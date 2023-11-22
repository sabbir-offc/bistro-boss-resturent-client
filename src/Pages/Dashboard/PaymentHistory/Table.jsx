const Table = ({ item, index }) => {
  const { email, price, date, status } = item;
  return (
    <tr>
      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        <h2 className="font-medium text-gray-800 ">{index}</h2>
      </td>
      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          <div className="flex items-center gap-x-2">
            <h2 className="font-medium text-gray-800 ">{email}</h2>
          </div>
        </div>
      </td>

      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        <h2 className="font-medium text-gray-800 ">{status}</h2>
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <h2 className="font-medium text-gray-800 ">${price}</h2>
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <h2 className="font-medium text-gray-800 ">{date}</h2>
      </td>
    </tr>
  );
};

export default Table;
