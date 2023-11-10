import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../Shared/MenuItem";

const PopularMenu = () => {
  const [menu, loading] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <section className="mb-12 text-center">
      <SectionTitle subHeading="Check it out" heading="FROM OUR MENU" />

      <div className="grid md:grid-cols-2 text-left gap-5">
        {popular &&
          popular.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
      </div>
      <button className="btn btn-secondary mx-auto mt-5">View Full Menu</button>
    </section>
  );
};

export default PopularMenu;
