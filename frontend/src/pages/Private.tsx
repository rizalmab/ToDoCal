import { Navigate, Outlet } from "react-router-dom";

// pages and components
import Navbar from "./../components/Navbar";

interface routeProps {
  user: { firstname?: string } | null;
  // children: JSX.Element;
}

const Private = ({ user }: routeProps) => {
  const auth: boolean = !!user;

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return (
    <>
      <Navbar />
      {auth ? <Outlet /> : <Navigate to="/auth" />}
    </>
  );
};

export default Private;
