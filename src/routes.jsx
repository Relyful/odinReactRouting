import App from "./App";
import Fpv from "./Fpv";
import Errorpage from "./ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage />
  },
  {
    path: "fpv",
    element: <Fpv />
  },
  {
    path: "fpv/:quad",
    element: <Fpv />
  }
]

export default routes;