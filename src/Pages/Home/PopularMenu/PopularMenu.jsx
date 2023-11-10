import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItem = data.filter((item) => item.category === "popular");
        setMenu(popularItem);
      });
  }, []);

  return (
    <section className="mb-12">
      <SectionTitle subHeading="Check it out" heading="FROM OUR MENU" />

      <div className="grid md:grid-cols-2 gap-5">
        {menu &&
          menu.map((item) => <MenuItem key={item._id} item={item}></MenuItem>)}
      </div>
    </section>
  );
};

export default PopularMenu;
