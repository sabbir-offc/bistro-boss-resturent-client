import { Link } from "react-router-dom";
import Cover from "../Shared/Cover";
import MenuItem from "../Shared/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div className="my-14">
      <div className="my-10">
        {title && <Cover img={coverImg} title={title} />}
      </div>

      <div className="grid md:grid-cols-2 text-left gap-5">
        {items && items.map((item) => <MenuItem key={item._id} item={item} />)}
      </div>
      <div className="text-center">
        <Link to={`/order/${title}`}>
          <button className="uppercase border-b-2 border-black px-3 py-2 rounded-xl my-3 hover:border ease-in-out mx-auto">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
