import { FaLinkedin } from "react-icons/fa";
interface Developer {}

const DeveloperCard: React.FC = (props: Developer) => {
  const developer = {
    name: "Sumit Saha",
    organisation: "Analyzen",
    linkedin: "/in/sumit-saha",
    advise: "use typescript while using react for better developer experince.",
  };
  return (
    <div className="card-container">
      <h2 className="company-name">{developer.advise}</h2>
      <div className="bottom-text-container bottom-text-flex">
        <h3 className="bottom-text">{developer.name}</h3>
        <h3 className="company-type">{developer.organisation}</h3>
        <h3 className="linkedin">
          {" "}
          <FaLinkedin />
          {developer.linkedin}
        </h3>{" "}
      </div>
    </div>
  );
};

export default DeveloperCard;
