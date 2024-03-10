import { Navigate } from "react-router-dom";
import { useAuthContext } from "@context/Auth"; // Adjust the path if needed

export const PrivateRoute = ({ children }: any) => {
  const { user, login } = useAuthContext();

  if (!user.isAuthenticated) {
    //login(); // Attempt to log in or redirect to login page
    return <Navigate to="/login" replace />;
  }

  return children;
};
