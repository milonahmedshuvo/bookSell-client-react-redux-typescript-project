import React, { useState } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { useBookupdateMutation } from "../../../redux/Feature/api/apiSlice";
import { toast } from "react-hot-toast";










const Modal = ({id}:any) => {
const {user} = useAppSelector((state) => state.users)
console.log("MODAl id:", id)
const [bookupdate, {data} ] = useBookupdateMutation()
console.log(data)  
if(data?.modifiedCount == 1 ){
  toast.success("successful book modifiedCount")
}  

const [modalOpen, setModalOpen] = useState(false);
const handleModalToggle = () => {
  setModalOpen(!modalOpen);
};






    //   handlebookedit fucntion 
    const handlebookedit = (event:React.SyntheticEvent) => {
        event.preventDefault()
            
        const target = event.target as typeof event.target & {
          image: { value: string };
          title: { value: string };
          author: { value: string}
          genre: {value: string}
          publicationYear: {value: string}
        };
  
        const image = target.image.value 
        const title = target.title.value 
        const author = target.author.value
        const genre = target.genre.value
        const publicationYear = target.publicationYear.value 
  
        const postdata = {
          image,
          title,
          author,
          genre,
          publication: publicationYear,
          email: user?.email
        }
  
        console.log(postdata)

        const options ={
          id: id,
          data: postdata
      }
       bookupdate(options)
        
  }

  
    
 

  return (
    <div>
    {/* The button to open modal */}
    <label htmlFor="my_modal_6" className="btn btn-sm btn-primary px-10" onClick={handleModalToggle}>
      Edit
    </label>

    {/* Put this part before </body> tag */}
    <input type="checkbox" id="my_modal_6" className="modal-toggle" checked={modalOpen} />
    <div className={`modal ${modalOpen ? 'modal-open' : ''}`}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>

        <div className="flex justify-center">
             <form className="" onSubmit={handlebookedit}>
             <input type="text" name="image" placeholder="You provite image link" className="input input-bordered  w-full  mt-2" />
             <input type="text" name="title" placeholder="title" className="input input-bordered w-full  mt-2" />
             <input type="text" name="author" placeholder="author" className="input input-bordered w-full mt-2" />
             <input type="text" name="genre" placeholder="genre" className="input input-bordered w-full mt-2" />
             <input type="text" name="publicationYear" placeholder="publication year" className="input input-bordered w-full mt-2" />

             <input type="submit" value="submit" className="bg-blue-400 py-1 text-center text-white px-6 mt-3 rounded" />
             </form>
        </div>
       





        <div className="modal-action">
          <label htmlFor="my_modal_6" className="btn" onClick={handleModalToggle}>
            Close!
          </label>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Modal;
