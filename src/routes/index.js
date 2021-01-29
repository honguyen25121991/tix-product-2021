import HomePage from "./../containers/HomeTemplate/HomePage";
import AboutPage from "./../containers/HomeTemplate/AboutPage";
import ListMoviePage from "./../containers/HomeTemplate/ListMoviePage";
import DetailPage from "./../containers/HomeTemplate/DetailPage";
import HocPage from "../containers/HomeTemplate/HocPage";
import DashboardPage from "../containers/AdminTemplate/DashboardPage";
import UserPage from "../containers/AdminTemplate/UserPage";
import HooksPage from "../containers/HomeTemplate/HooksPage";
import MaterialPage from "../containers/HomeTemplate/MaterialPage";

const routesHome = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  {
    exact: false,
    path: "/about",
    component: AboutPage,
  },
  {
    exact: false,
    path: "/list-movie",
    component: ListMoviePage,
  },
  {
    exact: false,
    path: "/detail/:id",
    component: DetailPage,
  },
  {
    exact: false,
    path: "/hoc",
    component: HocPage,
  },
  {
    exact: false,
    path: "/hooks",
    component: HooksPage,
  },
  {
    exact: false,
    path: "/material",
    component: MaterialPage,
  },
];

const routesAdmin = [
  {
    exact: false,
    path: "/dashboard",
    component: DashboardPage,
  },
  {
    exact: false,
    path: "/user",
    component: UserPage,
  },
];

export { routesHome, routesAdmin };
