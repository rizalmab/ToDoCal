import { Navigate, Outlet } from "react-router-dom";

interface routeProps {
  user: { firstname?: string };
  // children: JSX.Element;
}

const Private = ({ user }: routeProps) => {
  const auth: boolean = !!user;
  console.log('private', auth)
  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return auth ? <Outlet /> : <Navigate to="/auth" />;
};

export default Private;
