import HelmetTitle from "../../../components/HelmetTitle/HelmetTitle";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import CartTable from "./CartTable";

const Cart = () => {
  const { cart } = useCart();
  const totalPrice = cart.reduce((acc, curr) => acc + parseInt(curr.price), 0);
  return (
    <>
      <HelmetTitle title="My Cart" />
      <div>
        <SectionTitle subHeading="My Cart" heading="WANNA ADD MORE?" />
        <div className="mt-16 bg-gray-100 p-11">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl uppercase">Total orders: {cart.length}</h2>
            <h2 className="text-3xl uppercase">Total price: {totalPrice}</h2>
            <button className="uppercase bg-[#D1A054] text-white px-4 py-3 rounded-md">
              pay
            </button>
          </div>

          <section className="container px-4 mx-auto">
            <div className="flex flex-col mt-6">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200 ">
                      <thead className="bg-gray-50 ">
                        <tr>
                          <th
                            scope="col"
                            className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 "
                          >
                            #
                          </th>
                          <th
                            scope="col"
                            className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 "
                          >
                            <div className="flex items-center gap-x-3">
                              <span>Item Image</span>
                            </div>
                          </th>

                          <th
                            scope="col"
                            className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                          >
                            Item Name
                          </th>

                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                          >
                            Price
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {cart &&
                          cart.map((item, idx) => (
                            <CartTable
                              key={item._id}
                              index={idx + 1}
                              item={item}
                            />
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Cart;
