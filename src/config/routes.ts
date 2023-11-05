import Dashboard from "../screens/Dashboard/Dashboard";
import SignIn from "../screens/Login/Login";
import Perfil from "../screens/Perfil/Perfil";
import Home from "../screens/Perfil/Perfil";
import SmartForm from "../screens/Simulation/Simulador";
import TimeCard from "../screens/TimeCard/TimeCard";

interface RouteType {
  path: string;
  component: any;
  name: string;
  protected: boolean;
}

const routes: RouteType[] = [
  {
    path: "/login",
    component: SignIn,
    name: "/Login",
    protected: false,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    name: "/Dashboard",
    protected: false,
  },
  {
    path: "/time-card",
    component: TimeCard,
    name: "/TimeCard",
    protected: false,
  },
  {
    path: "/home",
    component: Home,
    name: "/Home",
    protected: false,
  },
  {
    path: "/simulador",
    component: SmartForm,
    name: "/Simulador",
    protected: false,
  },
  {
    path: "/perfil",
    component: Perfil,
    name: "/Perfil",
    protected: false,
  },
  {
    path: "*",
    component: SignIn,
    name: "/SignIn",
    protected: false,
  },
];

export default routes;
