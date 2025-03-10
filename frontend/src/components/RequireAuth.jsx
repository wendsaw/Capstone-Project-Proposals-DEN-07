// components/RequireAuth.js
import { useAuthContext } from "../hooks/useAuthContext";
import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
  const { user } = useAuthContext();

  // if user is not logged in, redirect to login
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default RequireAuth;
