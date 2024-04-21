import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./context/auth.context";

export const ProtectedRoute = ({ path }) => {
  const { isUserLoggedIn } = useContext(AuthContext);
  return (
    !isUserLoggedIn && <Navigate replace to="/login" state={{ from: path }} />
  );
};
