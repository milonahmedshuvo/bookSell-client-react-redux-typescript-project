import singup from "../../image/singup.jpg";
import { userCreate } from "../../redux/Feature/userVerify/userSlice";
import { useAppDispatch } from "../../redux/hooks";



const Singup = () => {
    const dispatch = useAppDispatch()
    


  const handleSingup = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
      name: { value: string };
    };
    const name = target.name.value;
    const email = target.email.value;
    const password = target.password.value;
    console.log(name, email, password);
    dispatch(userCreate({email: email, password: password, name: name}))
    
  };

  





  return (
    <div className="flex items-center">
      <div className=" w-full md:w-1/2 mt-10">
        <img src={singup} alt="" />
      </div>

      <div className=" md:w-1/2 px-28 ">
        <h1 className="text-2xl text-center mb-10">Singup from</h1>

        <form onSubmit={handleSingup}>
          <input
            type="text"
            placeholder="name"
            name="name"
            required
            className="input input-bordered w-full "
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            required
            className="input input-bordered w-full mt-2 "
          />
          <input
            type="password"
            required
            placeholder="password"
            name="password"
            className="input input-bordered w-full mt-2"
          />

          <input
            type="submit"
            value="Submit"
            className="bg-blue-400 py-1 w-full text-center mt-4 font-bold text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default Singup;
