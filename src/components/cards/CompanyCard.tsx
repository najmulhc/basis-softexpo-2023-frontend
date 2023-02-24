import "./cards.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
interface Company {}

const CompanyCard: React.FC = (props: Company) => {
  const company = {
    name: "Fyntune Solutions",
    office: "Mumbai",
    email: "hr@fyntune.com",
    type: "insure-tech",
  };
  return (
    <div className="card-container">
      <h2 className="company-name">{company.name}</h2>
      <h3 className="company-type">{company.type}</h3>
      <div className="bottom-text-container">
        <h3 className="bottom-text">
          {" "}
          <HiMail />
          {company.email}
        </h3>
        <h3 className="bottom-text">
          <FaMapMarkerAlt />
          {company.office}
        </h3>
      </div>
    </div>
  );
};

export default CompanyCard;
