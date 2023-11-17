import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxios from "../../../hooks/useAxios";
import HelmetTitle from "../../../components/HelmetTitle/HelmetTitle";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxios();
  const onSubmit = async (data) => {
    console.log(data);
    //image upload to imgbb and then get an url.
    const imageFile = { image: data.image[0] };

    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      //now send the menu item data to the server with the image url.
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        image: res.data.data.display_url,
        recipe: data.recipe,
      };
      //now
      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        reset();
        return alert("Uploaded");
      }
    }
  };

  return (
    <div>
      <HelmetTitle title="Add Item" />
      <SectionTitle heading="ADD AN ITEM" subHeading="What's new?" />
      <div className="md:p-10 bg-[#F3F3F3]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="" className="text-base font-medium text-gray-900">
              Recipe Name
            </label>
            <div className="mt-2">
              <input
                className="flex bg-white h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Recipe Name"
                required
                {...register("name")}
              ></input>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-5">
            <div className="col-span-1">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                defaultValue="default"
                {...register("category", { required: true })}
                required
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Category
                </option>
                <option value="dessert" className="capitalize">
                  desserts
                </option>
                <option value="drinks" className="capitalize">
                  drinks
                </option>
                <option value="salad" className="capitalize">
                  salads
                </option>
                <option value="soup" className="capitalize">
                  soups
                </option>
                <option value="pizza" className="capitalize">
                  pizzas
                </option>
              </select>
            </div>
            <div className="md:mt-4">
              <label className="col-span-1 text-base font-medium text-gray-900">
                Price
              </label>
              <div className="">
                <input
                  className="flex bg-white h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Price"
                  required
                  {...register("price")}
                ></input>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="" className="text-base font-medium text-gray-900">
              Recipe Details*
            </label>
            <div className="mt-2">
              <textarea
                rows={5}
                className="flex bg-white w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                required
                placeholder="Recipe Details*"
                {...register("recipe")}
              ></textarea>
            </div>
          </div>
          <div className="form-control mt-5">
            <input
              {...register("image")}
              type="file"
              required
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-gradient-to-r from-[#835D23] to-[#B58130] px-8 py-4 text-white font-bold btn items-center  mt-5 rounded-md"
            >
              Add Item <FaUtensils />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
