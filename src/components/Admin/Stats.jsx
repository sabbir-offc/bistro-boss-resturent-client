import { Fastfood } from "@mui/icons-material";
import { FaMoneyBill, FaTruck, FaUsers } from "react-icons/fa";
import Rechart from "./Rechart";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import PieChartStats from "./PieChartStats";

const Stats = ({ stats }) => {
  const revenue = stats.revenue?.toFixed(2);
  const axiosSecure = useAxios();
  const { data = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/order-stats");
      return data;
    },
  });
  console.log(data);
  return (
    <div>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-primary">
            <FaMoneyBill />
          </div>
          <div className="stat-title">Revenue</div>
          <div className="stat-value text-primary">{revenue}</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers />
          </div>
          <div className="stat-title">Customers</div>
          <div className="stat-value text-secondary">{stats.users}</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-accent">
            <Fastfood />
          </div>
          <div className="stat-title">Products</div>
          <div className="stat-value text-accent">{stats.menuItems}</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-info">
            <FaTruck />
          </div>
          <div className="stat-title">Orders</div>
          <div className="stat-value text-info">{stats.orders}</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center">
        <div className="w-1/2">
          <Rechart data={data} />
        </div>
        <div className="w-1/2">
          <PieChartStats data={data} />
        </div>
      </div>
    </div>
  );
};

export default Stats;
