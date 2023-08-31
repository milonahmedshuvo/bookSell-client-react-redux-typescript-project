import { useLocation, useNavigate } from "react-router-dom";
import singin from "../../image/singin.jpg";
import { userlogin } from "../../redux/Feature/userVerify/userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";

const Singin = () => {
const dispatch = useAppDispatch()
const {user, isLoading} = useAppSelector((state) => state.users)
    
    const handleSingup = (event: React.SyntheticEvent) => {
        event.preventDefault();
        const target = event.target as typeof event.target & {
          email: { value: string };
          password: { value: string };
        };
        const email = target.email.value;
        const password = target.password.value;
        console.log( email, password);
        dispatch(userlogin({email:email, password: password}))
      };


      const location = useLocation();
      const navigate = useNavigate();
      const from = location.state?.from?.pathname || '/';

      useEffect(() => {
        if(user?.email && !isLoading){
         navigate(from, {replace: true} )
        }  
     },[user?.email, isLoading ])






  return (
    <div className="flex items-center">
      <div className="w-1/2">
        <img src={singin} alt="" />
      </div>

      <div className=" md:w-1/2 px-28 ">
        <h1 className="text-2xl text-center mb-10">Singin from</h1>

        <form onSubmit={handleSingup}>
          <input
            type="email"
            placeholder="email"
            name="email"
            required
            className="input input-bordered w-full "
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

export default Singin;
