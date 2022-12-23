import { routes } from "@utils/routes";
import { Link, useParams } from "react-router-dom";

const Navbar = (): JSX.Element => {
  const queryParams = useParams();
  console.log(queryParams, "this are your params");
  return (
    <div className="w-full h-12 bg-darker flex items-center">
      {routes.map((route) => (
        <Link className="hover:text-mid-light text-light ml-9" to={route.path}>
          {route.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
