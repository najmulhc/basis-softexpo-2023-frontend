import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";


const AddDeveloper: React.FC = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();
    const addDeveloper:any = (data:any) => {
      fetch(
        "https://basis-softexpo-2023-backend-lfiu.vercel.app/api/developers",
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
          console.log(data)
          navigate("/");
        })
    }
  return (
    <div className="card-container form-containter">
        <h2 id="page-title">Add Developer</h2>
      <form onSubmit={handleSubmit(addDeveloper)} action="" >
        <label htmlFor="name">
          <h4>Name</h4>
          <input placeholder="Enter Name" type="text"  id="name" {...register("name")} />
        </label>
        <label htmlFor="organization">
          <h4>Organisation</h4>
          <input placeholder="The organsiation you are working" type="text" {...register("organization")} id="organization" />
        </label>
        <label htmlFor="linkedin">
          <h4>Linkedin</h4>
          <input placeholder="Your LinkedIn Account" type="text" {...register("socialMedia")} id="linkedin" />
        </label>
        <label htmlFor="advise">
          <h4>Your advise</h4>
          <input  placeholder="The answer of the question you are asked..." type="text" {...register("opinion")} id="advise" />
        </label>
        <button type="submit">Add Developer</button>
      </form>
    </div>
  );
};

export default AddDeveloper;
