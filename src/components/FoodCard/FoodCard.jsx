const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;

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
            <button className="btn uppercase border-0 border-b-4 bg-slate-200 border-black px-3 py-2 rounded-xl mt-3 ease-in-out hover:bg-black hover:text-white hover:border-0 duration-500 ">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
