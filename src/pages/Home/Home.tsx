import { useGetAllBooksQuery } from "../../redux/Feature/api/apiSlice"
import { IBooks } from "../../types/globalTypes"
import HomeBook from "./HomeBook"






const Home = () => {
      const {data:books, isLoading} = useGetAllBooksQuery(undefined)

      if(isLoading){
        return <p>Loading....</p>
      }
      console.log(books)
     


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-14">

       {
          books?.map((book:IBooks, i:number) => (
            <HomeBook
            key={i}
            book={book} ></HomeBook>
          ))
       }




    </div>
  )
}

export default Home
