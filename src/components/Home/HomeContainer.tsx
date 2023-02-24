import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
const HomeContainer: React.FC = () => {
   return (
    <div> 
    <Navbar />
    <Outlet/>
    </div>
   )
}

export default HomeContainer;