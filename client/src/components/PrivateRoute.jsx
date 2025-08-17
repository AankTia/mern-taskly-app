import { Outlet, Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

// This component checks whether the user state in UserContext has a truthy value.
// If the user exists, the Outlet component will render the child component. Otherwise, use the Navigate component to render the Sign In page.

export default function PrivateRoute() {
  const { user } = useUser();

  return user ? <Outlet /> : <Navigate to="/signin" />;
}