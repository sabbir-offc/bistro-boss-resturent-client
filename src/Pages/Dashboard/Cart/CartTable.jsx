import { useLocation } from "react-router-dom";
import { BiSolidEdit } from "react-icons/bi";

const CartTable = ({
  item,
  index,
  handleDeleteMenu,
  handleUpdateMenu,
  handleDeleteBooking,
}) => {
  const { _id, name, image, price } = item;
  const location = useLocation();

  return (
    <tr>
      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        <h2 className="font-medium text-gray-800 ">{index}</h2>
      </td>
      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          <div className="flex items-center gap-x-2">
            <img className="object-cover w-20 h-20" src={image} alt="" />
          </div>
        </div>
      </td>

      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        <h2 className="font-medium text-gray-800 ">{name}</h2>
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <h2 className="font-medium text-gray-800 ">${price}</h2>
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        {location.pathname === "/dashboard/cart" ? (
          <div className="flex items-center gap-x-6">
            <button
              onClick={() => handleDeleteBooking(_id)}
              className="text-white bg-[#B91C1C] transition-colors duration-300 p-3  hover:text-red-500 hover:bg-transparent focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
        ) : (
          <div>
            <button
              onClick={() => handleUpdateMenu(_id)}
              className="text-white mr-5 bg-[#D1A054] transition-colors duration-300 p-3  hover:text-[#D1A054] hover:bg-transparent focus:outline-none"
            >
              <BiSolidEdit size={20} />
            </button>
            <button
              onClick={() => handleDeleteMenu(_id)}
              className="text-white bg-[#B91C1C] transition-colors duration-300 p-3  hover:text-red-500 hover:bg-transparent focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
        )}
      </td>
    </tr>
  );
};

export default CartTable;
