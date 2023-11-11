import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";
import HelmetTitle from "../../../components/HelmetTitle/HelmetTitle";

const Home = () => {
  return (
    <div>
      <HelmetTitle title="Home" />
      <Banner></Banner>
      <Category></Category>
      <PopularMenu />
      <Featured />
      <Testimonial />
    </div>
  );
};

export default Home;
