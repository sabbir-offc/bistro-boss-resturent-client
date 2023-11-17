import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const { isAdmin, isAdminLoading } = useAdmin();
  const location = useLocation();

  if (isAdminLoading || loading) return <p>Loading...</p>;
  if (user && isAdmin) return children;

  return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoutes;
