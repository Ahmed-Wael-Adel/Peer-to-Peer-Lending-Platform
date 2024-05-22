import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import BorrowerProfile from "./pages/Borrower_profile";
import CreateLoan from "./pages/createLoans";
import LenderProfile from "./pages/lender_profile";


function App() {
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: '/login', element: <Login /> },
        { path: '/register', element: <Register /> },
        { path: '/profile', element: <BorrowerProfile /> },
        { path: '/createloan', element: <CreateLoan /> },
        { path: '/Lprofile', element: <LenderProfile /> },
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
