import Footer from "../components/Footer/Footer";
import Navber from "../components/Navber/Navber"
import { Outlet } from 'react-router-dom';

const Mainlayout = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet/>
      <Footer></Footer>
    </div>
  )
}

export default Mainlayout
