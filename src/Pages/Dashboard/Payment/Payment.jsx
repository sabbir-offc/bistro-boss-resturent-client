import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../../components/Dashboard/Payment/CheckoutForm";

//TODO: add pk key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  return (
    <div className="min-h-full min-w-full flex items-center justify-center">
      <div className="w-full space-y-10">
        <h2 className="text-6xl text-center">Payment</h2>
        <div className="w-full">
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
