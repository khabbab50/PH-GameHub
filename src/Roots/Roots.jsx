import { Outlet } from "react-router";
import Footer from "../componets/Footer";
import Navber from "../componets/Navber";

const Roots = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Roots;
