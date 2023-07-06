import { layoutGeneral } from "../layouts/layoutGeneral";
import SignIn from "../pages/admin/SignIn";
import Admin from "../pages/admin/Admin";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Servicios from "../components/Servicios";
import Productos from "../components/Productos";
import Proveedores from "../components/Proveedores";
import Clientes from "../components/Clientes";

const AdminRoutes = [
  { path: "/admin", component: Admin, layout: layoutGeneral },
  { path: "/admin/sign-in", component: SignIn, layout: layoutGeneral },
];

const GeneralRoutes = [
  { path: "/", component: Home, layout: layoutGeneral },
  { path: "/contact", component: Contact, layout: layoutGeneral },
  { path: "*", component: NotFound, layout: layoutGeneral },
  { path: "/servicios", component: Servicios, layout: layoutGeneral },
  { path: "/productos", component: Productos, layout: layoutGeneral },
  { path: "/proveedores", component: Proveedores, layout: layoutGeneral },
  { path: "/clientes", component: Clientes, layout: layoutGeneral }
];

/**
 * Crea un nuevo arreglo que contiene todos los elementos de "AdminRoutes"
 * seguidos de todos los elementos de "GeneralRoutes"
 */
const allRoutesProject = [...AdminRoutes, ...GeneralRoutes];

export default allRoutesProject;
