import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";
import Stats from "../../../components/Admin/Stats";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();
  const { data: stats = [] } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const { data } = await axiosSecure("/admin-stats");
      return data;
    },
  });
  return (
    <div>
      <h1 className="text-2xl">
        Hi, welcome
        <span> {user?.displayName ? user.displayName : "Back."}</span>
        <Stats stats={stats} key={stats.menuItems} />
      </h1>
    </div>
  );
};

export default AdminHome;
