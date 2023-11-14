import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { user } = useAuth();
  const { refetch } = useCart();
  const axiosSecure = useAxios();
  const navigate = useNavigate();
  const location = useLocation();
  const { _id, name, image, price, recipe } = item;
  const handleaAddToCart = async () => {
    if (user && user.email) {
      //send cart to the database.
      const cartItem = {
        menuId: _id,
        email: user?.email,
        name,
        image,
        price,
      };
      return await axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          refetch();
          toast.success(`${name} added to your cart.`);
        }
      });
    } else {
      return Swal.fire({
        title: "You Are Not Logged In!",
        text: "Please Login First.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <div className="relative">
            <span className="absolute bg-black px-2 rounded-lg text-white py-1 right-3 top-3">
              ${price}
            </span>
            <img src={image} alt="Shoes" className="rounded-xl" />
          </div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button
              onClick={handleaAddToCart}
              className="btn uppercase border-0 border-b-4 bg-slate-200 border-black px-3 py-2 rounded-xl mt-3 ease-in-out hover:bg-black hover:text-white hover:border-0 duration-500"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
