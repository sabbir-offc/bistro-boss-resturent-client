import HelmetTitle from "../../../components/HelmetTitle/HelmetTitle";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const UpdateItems = () => {
  return (
    <div>
      <HelmetTitle title="Add Item" />
      <SectionTitle heading="Update AN ITEM" subHeading="What's new?" />
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

export default UpdateItems;
