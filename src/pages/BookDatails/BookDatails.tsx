import { useParams } from "react-router-dom";
import { useGetOneBookQuery } from "../../redux/Feature/api/apiSlice";
import { useAppSelector } from "../../redux/hooks";

const BookDatails = () => {
  const { id } = useParams();
  const {user} = useAppSelector((state) => state.users)
  const { data, isLoading } = useGetOneBookQuery(id);
  if (isLoading) {
    return <p>loading...</p>;
  }
  const { image, title, author, genre, publication, email } = data;

 

  return (
    <div className="mb-20">
      <div className="flex justify-center">
        <img className=" w-1/5 h-[350px]" src={image} alt="" />
      </div>

      <div>
        <p className="text-center text-xl mt-5">{title}</p>
        <p className="text-center text-lg">{author}</p>
        <p className="text-center text-lg">{genre}</p>
        <p className="text-center text-lg">{publication}</p>
      </div>

      <div className="flex justify-between w-1/5 mx-auto mt-3 ">
      
       {
        email === user.email ? <button className="btn btn-sm btn-primary w-1/2 mr-2">Edit</button> : <button className="btn btn-sm btn-primary w-1/2 mr-2" disabled >Edit</button>
       }


      <button className="btn btn-sm  btn-error w-1/2 text-white">Delete</button>
      </div>
    </div>
  );
};

export default BookDatails;
