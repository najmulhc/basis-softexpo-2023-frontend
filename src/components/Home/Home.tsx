import axios from "axios";
import CompanyCard from "../cards/CompanyCard";
import DeveloperCard from "../cards/DeveloperCard";
import { useState, useEffect } from "react";

const Home: React.FC = () => {
  const [devs, setDevs] = useState([]);
  const [companys, setCompanys] = useState([]);

  useEffect(() => {
     axios.get().then(data => setDevs(data.data))
  }, [])
  

  return (
    <div>
      <div className="card-container home-title">
        <h2 className="">Developers</h2>
      </div>
      <DeveloperCard />
      <div className="card-container home-title company">
        <h2 className=" ">Companys</h2>
      </div>
      <CompanyCard />
    </div>
  );
};

export default Home;
