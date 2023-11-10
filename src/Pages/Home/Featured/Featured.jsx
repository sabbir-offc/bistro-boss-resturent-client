import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
const Featured = () => {
  return (
    <div className="my-20 bg-fixed bg-featured bg-cover">
      <div className="bg-blend-overlay bg-black bg-opacity-30 p-10 text-white">
        <SectionTitle subHeading="Check it out" heading="FROM OUR MENU" />
        <div className="md:flex items-center justify-center gap-4 py-8 px-16">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div>
            <p>
              March 20, 2023 <br />
              WHERE CAN I GET SOME? <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="uppercase border-b-2 border-white px-3 py-2 rounded-xl mt-3 hover:border ease-in-out">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
