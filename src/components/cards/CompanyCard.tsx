import "./cards.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
interface Company {
  name: string;
  officeAddress: string;
  email: string;
  sector: string;
}

const CompanyCard: React.FC<Company> = (props: Company) => {
  return (
    <div className="card-container">
      <h2 className="company-name">{props.name}</h2>
      <h3 className="company-type">{props.sector}</h3>
      <div className="bottom-text-container">
        <h3 className="bottom-text">
          {" "}
          <HiMail />
          {props.email}
        </h3>
        <h3 className="bottom-text">
          <FaMapMarkerAlt />
          {props.officeAddress}
        </h3>
      </div>
    </div>
  );
};

export default CompanyCard;
