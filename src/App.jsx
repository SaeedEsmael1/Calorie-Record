import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { LandingPage, TrackPage } from "./pages";
import { PageLayout } from "./pages/PageLayout";
import ErrorPage from "./pages/ErrorPage";
import Details from "./pages/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout/>,
    errorElement:<ErrorPage/>,
    children: [
      {
        index:true,
        element: <LandingPage/>,
      },
      {
        path: "track",
        element: <TrackPage/>,
      },
      {
        path: "track/:recordId",
        element: <Details/>,
      },
    ]
  },

]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;