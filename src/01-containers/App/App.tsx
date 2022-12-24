import { routes } from "@utils/routes";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "@components/Navbar";
import NotFound from "@pages/NotFound";
import { ThemeContextProvider } from "@contexts/theme-context";

const App = (): JSX.Element => {
  return (
    <div className="bg-light h-full">
      <ThemeContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.name}
                path={route.path}
                element={route.element}
              />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeContextProvider>
    </div>
  );
};

export default App;
