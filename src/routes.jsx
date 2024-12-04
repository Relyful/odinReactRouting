import App from "./App";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";
import Altpage from "./Altpage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "profile/:name",
    element: <Profile />,
  },
  {
    path: "altpage",
    element: <Altpage />
  }
];

export default routes;
