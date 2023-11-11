import Cover from "../Shared/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory";
import HelmetTitle from "../../components/HelmetTitle/HelmetTitle";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <HelmetTitle title="Menu" />
      {/* main cover */}
      <Cover img={menuImg} title="our menu" />

      <div className="my-4">
        <SectionTitle subHeading={`Don't miss`} heading="TODAY'S OFFER" />
      </div>
      {/* offerer menu items */}
      <MenuCategory items={offered} />
      {/* desert menu items */}
      <MenuCategory items={dessert} title="desserts" coverImg={dessertImg} />
      {/* pizza menu items */}
      <MenuCategory items={pizza} title="pizzas" coverImg={pizzaImg} />
      {/* salads menu items */}
      <MenuCategory items={salad} title="salads" coverImg={saladImg} />
      {/* soups menu items */}
      <MenuCategory items={soup} title="soups" coverImg={soupImg} />
      {/* drinks menu items */}
      <MenuCategory items={drinks} title="drinks" coverImg={soupImg} />
    </div>
  );
};

export default Menu;
