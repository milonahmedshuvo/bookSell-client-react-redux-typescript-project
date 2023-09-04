import { useParams } from "react-router-dom";
import { useBookDeleteMutation, useGetOneBookQuery } from "../../redux/Feature/api/apiSlice";
import { useAppSelector } from "../../redux/hooks";
import ProductReview from "./ProductReview";
import { toast } from "react-hot-toast";
import Modal from "./modal/Modal";

const BookDatails = () => {
  const { id } = useParams();
  const {user} = useAppSelector((state) => state.users)
  const { data:book, isLoading } = useGetOneBookQuery(id);
  const [deleteBook, { data }] =useBookDeleteMutation()
  
  console.log("delete data:", data)
  




  if (isLoading) {
    return <p>loading...</p>;
  }
  const { image, title, author, genre, publication, email } = book;

 

    const handleBookDelete = ( ) => {
      console.log("Delete")
      deleteBook(id)
    
    }
    if(data?.deletedCount == 1){
      toast.success("Your book succesful delete")
    }


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
        email === user?.email ? <Modal id={id} ></Modal>  : <button className="btn btn-sm btn-primary w-1/2 mr-2" disabled >Edit</button>
       }


      <button onClick={handleBookDelete} className="btn btn-sm  btn-error w-1/2 text-white">Delete</button>
      </div>

      
      <ProductReview id={id}></ProductReview>
    </div>
  );
};

export default BookDatails;
