import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Company } from "../Home/Home";
import axios from "axios";
const AddCompany: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const addCompany = (data: any) => {
    fetch(
      "https://basis-softexpo-2023-backend-lfiu.vercel.app/api/organizations",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        navigate("/");
      });
  };
  return (
    <div className="card-container form-containter">
      <h2 id="page-title">Add Company</h2>
      <form action="" onSubmit={handleSubmit(addCompany)}>
        <label htmlFor="name">
          <h4>Name</h4>
          <input
            placeholder="Enter Name"
            type="text"
            id="name"
            {...register("name")}
          />
        </label>
        <label htmlFor="type">
          <h4>Type</h4>
          <input
            placeholder="The type of organisation"
            type="text"
            {...register("sector")}
            id="type"
          />
        </label>
        <label htmlFor="email-address">
          <h4>Email Address</h4>
          <input
            placeholder="Enter HR email address"
            type="email"
            {...register("email")}
            id="email-address"
          />
        </label>
        <label htmlFor="office">
          <h4>Office Address</h4>
          <input
            placeholder="Enter office address.."
            type="text"
            {...register("officeAddress")}
            id="office"
          />
        </label>
        <button type="submit">Add Company</button>
      </form>
    </div>
  );
};

export default AddCompany;
