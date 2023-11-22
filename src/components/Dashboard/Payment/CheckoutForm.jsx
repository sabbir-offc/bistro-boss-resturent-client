import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";

const CheckoutForm = () => {
  const { user } = useAuth();
  const [error, setError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const { cart, refetch } = useCart();

  const totalPrice = cart.reduce(
    (acc, curr) => acc + parseFloat(curr.price),
    0
  );

  const axiosSecure = useAxios();

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", {
          price: totalPrice,
        })
        .then((res) => {
          console.log(res.data);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [totalPrice, axiosSecure]);

  //submit payment
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError(null);
    }

    //confirm payment.
    const { paymentIntent, error: cardConfirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (cardConfirmError) {
      console.log(cardConfirmError, "card error confirm");
    } else {
      console.log(paymentIntent, "successfull");
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);

        //now save the payment in db.
        const payment = {
          email: user?.email,
          transactionId: paymentIntent.id,
          price: totalPrice,
          date: new Date(), //utc date converter. OR user moment js.
          cartIds: cart.map((item) => item._id),
          menuItemIds: cart.map((item) => item.menuId),
          status: "pending",
        };
        const res = await axiosSecure.post("/payments", payment);
        if (res?.data?.deleteResult?.deletedCount > 0) {
          refetch();
          toast.success("Transaction Successfull");
        }
      }
    }
  };
  return (
    <form className="text-center" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },

            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      {error && <p className="text-red-600">{error}</p>}
      <button
        className=" bg-[#570DF8] disabled:bg-gray-400 mt-5 rounded-md text-white font-semibold py-5 w-2/3 mx-auto"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      {transactionId && (
        <p className="text-green-600 text-xl font-medium">
          Transaction Id: {transactionId}{" "}
        </p>
      )}
    </form>
  );
};

export default CheckoutForm;
