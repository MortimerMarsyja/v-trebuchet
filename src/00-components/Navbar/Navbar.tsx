import { routes } from "@utils/routes";
import { Link, useParams } from "react-router-dom";
import { useThemeContext } from "@contexts/theme-context";
import Sun from "@assets/icons/Sun";
import Moon from "@assets/icons/Moon";
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
      <button
        className="mr-5 bg-[#505050] w-[36px] h-[36px] flex justify-center items-center rounded-2xl"
        onClick={toggleTheme}
      >
        {theme === "light" ? <Sun /> : <Moon />}
      </button>
    </div>
  );
};

export default Navbar;
