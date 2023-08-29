import { useGetAllBooksQuery } from "../../redux/Feature/api/apiSlice";
import { setSearchData } from "../../redux/Feature/book/bookSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IBooks } from "../../types/globalTypes";
import Allbook from "./Allbook";

const Allbooks = () => {
  const { data, isLoading } = useGetAllBooksQuery(undefined);
  const { search } = useAppSelector((state) => state.books)
  if (isLoading) {
    return <p>Loading....</p>;
  }
  const dispatch = useAppDispatch()
  const handleSearchData = (event: React.SyntheticEvent) =>{
        event.preventDefault();
        const target = event.target as typeof event.target & {
            search: { value: string };
          };
          const search = target.search.value
          dispatch(setSearchData(search))
  }
   const bookAuthor = data.filter((book:IBooks) => book.author === search )
   const bookTitle = data.filter((book:IBooks) => book.title === search)
   const bookGenre = data.filter((book:IBooks) => book.genre === search)
 
  let products;

   if( bookAuthor.filter((e: { author: string | null; }) => e.author === search).length > 0  ){
    products = bookAuthor   
   }else if (bookTitle.filter((e: { title: string | null; }) => e.title === search).length > 0){
    products = bookTitle
   }else if (bookGenre.filter((e: { genre: string | null; }) => e.genre === search).length > 0){
    products = bookGenre
   }else{
    products = data
   }

   console.log("products", products)
  

  
   



  return (
    <div>

       <div>
         <form onSubmit={handleSearchData}>
           <input type="text" name="search"   className="input input-bordered w-1/3 ml-2 " />
           <input
            type="submit"
            value="Submit"
            className="bg-blue-400 py-3 px-8 text-center font-bold text-white ml-2 rounded"
          />
         </form>
       </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-14">
        {products?.map((book: IBooks, i: number) => (
          <Allbook key={i} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Allbooks;
