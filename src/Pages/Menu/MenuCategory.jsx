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
    </div>
  );
};

export default MenuCategory;
