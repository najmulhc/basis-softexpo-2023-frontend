import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
const HomeContainer: React.FC = () => {
   return (
    <div> 
    <Navbar />
    <Outlet/>
    <Footer/>
    </div>
   )
}

export default HomeContainer;