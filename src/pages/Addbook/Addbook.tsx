import React from "react"
import { useAppSelector } from "../../redux/hooks"
import { useNewbookpostMutation } from "../../redux/Feature/api/apiSlice"
import { toast } from "react-hot-toast"


const Addbook = () => {
     const { user, isLoading } = useAppSelector ((state) => state.users)
     const [newbookData, {data, isError}] = useNewbookpostMutation()
     if(isLoading){
      return <p>Loading..</p>
     }

     console.log(isError)
     console.log("server book add:", data)


   
const handledatapost = (event:React.SyntheticEvent) => {
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
      newbookData( { data:postdata } )
}

if(data?.acknowledged === true){
  toast.success("Succesful add book")
}

  return (
    <div>
       

        <div className="flex justify-center">
             <form className="" onSubmit={handledatapost}>
             <input type="text" name="image" placeholder="You provite image link" className="input input-bordered  w-full  mt-2" />
             <input type="text" name="title" placeholder="title" className="input input-bordered w-full  mt-2" />
             <input type="text" name="author" placeholder="author" className="input input-bordered w-full mt-2" />
             <input type="text" name="genre" placeholder="genre" className="input input-bordered w-full mt-2" />
             <input type="text" name="publicationYear" placeholder="publication year" className="input input-bordered w-full mt-2" />

             <input type="submit" value="Add New Book" className="bg-blue-400 py-1 text-center text-white px-6 mt-3 rounded" />
             </form>
        </div>
    </div>
  )
}

export default Addbook
