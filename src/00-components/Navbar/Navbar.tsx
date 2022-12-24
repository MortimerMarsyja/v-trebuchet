import { routes } from "@utils/routes";
import { Link, useParams } from "react-router-dom";
import { useThemeContext } from "@contexts/theme-context";
const Navbar = (): JSX.Element => {
  const { toggleTheme, theme } = useThemeContext();
  const queryParams = useParams();
  return (
    <div className="w-full h-12 bg-darker flex items-center justify-between">
      <div>
        {routes.map((route) => (
          <Link
            className="hover:text-mid-light text-light ml-9"
            to={route.path}
          >
            {route.name}
          </Link>
        ))}
      </div>
      <button className="mr-9" onClick={toggleTheme}>
        Theme {theme}
      </button>
    </div>
  );
};

export default Navbar;
