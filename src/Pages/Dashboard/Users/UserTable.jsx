import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";
import toast from "react-hot-toast";
const UserTable = ({ user, index, refetch }) => {
  const axiosSecure = useAxios();
  const { _id, name, email, role } = user;
  const handleDeleteUser = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${_id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) refetch();
          Swal.fire({
            title: "Deleted!",
            text: "User has been deleted.",
            icon: "success",
          });
        });
      }
    });
  };

  //update role
  const handleMakeAdmin = async () => {
    const { data } = await axiosSecure.patch(`/users/admin/${_id}`);
    if (data.modifiedCount > 0) refetch();
    return toast.success(`${name} has been updated to admin role.`);
  };
  return (
    <tr>
      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        <h2 className="font-medium text-gray-800 ">{index}</h2>
      </td>
      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <h2 className="font-medium text-gray-800 ">{name}</h2>
      </td>

      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        <h2 className="font-medium text-gray-800 ">{email}</h2>
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        {role === "admin" ? (
          "Admin"
        ) : (
          <button
            onClick={handleMakeAdmin}
            className="text-white bg-[#D1A054] transition-colors duration-300 p-3  hover:text-[#D1A054] hover:bg-transparent focus:outline-none"
          >
            <FaUsers size={23} />
          </button>
        )}
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-6">
          <button
            onClick={handleDeleteUser}
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
      </td>
    </tr>
  );
};

export default UserTable;
