import { FaLinkedin } from "react-icons/fa";

interface Developer {
  name: string;
  organization: string;
  socilaMedia: string;
  opinion: string;
}
const DeveloperCard: React.FC<Developer> = (props: Developer) => {
  return (
    <div className="card-container">
      <h2 className="company-name">{props.opinion}</h2>
      <div className="bottom-text-container bottom-text-flex">
        <h3 className="bottom-text developer-name">{props.name}</h3>
        <h3 className="company-type">{props.organization}</h3>
        <h3 className="linkedin">
          {" "}
          <FaLinkedin />
          {props.socilaMedia}
        </h3>{" "}
      </div>
    </div>
  );
};

export default DeveloperCard;
