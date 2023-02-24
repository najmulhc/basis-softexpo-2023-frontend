import { useForm } from "react-hook-form";
interface developer {
    name: string,
    organisation: string, 
    linkedin: string, 
    advise: string
}

const AddDeveloper: React.FC = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const addDeveloper:any = (data:developer) => {
        console.log(data)
    }
  return (
    <div className="card-container">
        <h2 id="page-title">Add Developer</h2>
      <form onSubmit={handleSubmit(addDeveloper)} action="" >
        <label htmlFor="name">
          <h4>Name</h4>
          <input type="text" name="name" id="name" />
        </label>
        <label htmlFor="organisation">
          <h4>Organisation</h4>
          <input type="text" name="organisation" id="organisation" />
        </label>
        <label htmlFor="linkedin">
          <h4>Linkedin</h4>
          <input type="text" name="linkedin" id="linkedin" />
        </label>
        <label htmlFor="advise">
          <h4>Your advise</h4>
          <input   type="text" name="advise" id="advise" />
        </label>
        <button type="submit">Add Developer</button>
      </form>
    </div>
  );
};

export default AddDeveloper;
