import { useForm } from "react-hook-form";
interface Company {
  name: string;
  organisation: string;
  linkedin: string;
  advise: string;
}

const AddCompany: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const addCompany = (data: Company) => {
    console.log(data);
  };
  return (
    <div className="card-container form-containter">
      <h2 id="page-title">Add Company</h2>
      <form action="">
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
            {...register("type")}
            id="type"
          />
        </label>
        <label htmlFor="email-address">
          <h4>Email Address</h4>
          <input
            placeholder="Enter HR email address"
            type="email"
            {...register("emailAddress")}
            id="email-address"
          />
        </label>
        <label htmlFor="office">
          <h4>Office Address</h4>
          <input
            placeholder="Enter office address.."
            type="text"
            {...register("office")}
            id="office"
          />
        </label>
        <button type="submit">Add Company</button>
      </form>
    </div>
  );
};

export default AddCompany;
