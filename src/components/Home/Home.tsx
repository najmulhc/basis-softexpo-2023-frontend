import axios from "axios";
import CompanyCard from "../cards/CompanyCard";
import DeveloperCard from "../cards/DeveloperCard";
import { useState, useEffect } from "react";

export interface Company {
  name: string;
  officeAddress: string;
  email: string;
  sector: string;
}

interface Developer {
  name: string;
  organization: string;
  socialMedia: string;
  opinion: string;
}
const Home: React.FC = () => {
  const [devs, setDevs] = useState<Developer[]>([]);
  const [companys, setCompanys] = useState<Company[]>([]);

  useEffect(() => {
    axios
      .get("https://basis-softexpo-2023-backend-lfiu.vercel.app/api/developers")
      .then((data) => setDevs(data?.data?.data));
    axios
      .get(
        "https://basis-softexpo-2023-backend-lfiu.vercel.app/api/organizations"
      )
      .then((data) => {
        setCompanys(data?.data?.data);
      });
  }, []);

  return (
    <div>
      <div className="card-container home-title">
        <h2 className="">Developers</h2>
      </div>
      {devs.map((dev) => (
        <DeveloperCard name={dev.name} opinion={dev.opinion} organization={dev.organization} socilaMedia={dev.socialMedia} />
      ))}
      <div className="card-container home-title company">
        <h2 className=" ">Companies</h2>
      </div>
      {companys.map((company) => (
        <CompanyCard
          name={company.name}
          sector={company.sector}
          officeAddress={company.officeAddress}
          email={company.email}
        />
      ))}
    </div>
  );
};

export default Home;
