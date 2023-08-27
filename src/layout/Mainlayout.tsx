import Navber from "../components/Navber/Navber"
import { Outlet } from 'react-router-dom';

const Mainlayout = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet/>


    </div>
  )
}

export default Mainlayout
