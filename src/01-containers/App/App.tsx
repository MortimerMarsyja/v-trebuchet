import { routes } from "@utils/routes";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "@components/Navbar";
import NotFound from "@pages/NotFound";
import { ToastContentProvider } from "03-contexts/ToastContext";

const App = (): JSX.Element => {
  return (
    <div className="bg-light h-full">
      <ToastContentProvider>
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
      </ToastContentProvider>
    </div>
  );
};

export default App;
