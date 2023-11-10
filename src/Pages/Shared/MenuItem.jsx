const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex space-x-4">
      <img
        src={image}
        className="w-[100px] rounded-[200px] rounded-tl-none"
        alt=""
      />
      <div>
        <h1>{name}--------</h1>
        <p>{recipe}</p>
      </div>
      <p className="text-[#BB8506]"> {price}</p>
    </div>
  );
};

export default MenuItem;
