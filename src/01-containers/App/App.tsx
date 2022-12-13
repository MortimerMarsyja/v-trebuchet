
import './App.css'
import { routes } from '@utils/routes'
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import Navbar from '@components/Navbar';
import NotFound from '@pages/NotFound';


const App = (): JSX.Element => {
  return (
    <div className="bg-dark h-full">
      <BrowserRouter  >
        <Navbar />
        <Routes>
          {routes.map((route) => (
            <Route key={route.name} path={route.path} element={route.element} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter  >
    </div>
  )
}

export default App

