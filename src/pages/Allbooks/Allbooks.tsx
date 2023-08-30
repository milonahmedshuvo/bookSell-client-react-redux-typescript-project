import React from "react";
import {
  useGetAllBooksQuery,
  useGetGenteQuery,
  useGetPublicationYearQuery,
} from "../../redux/Feature/api/apiSlice";
import {
  setGenre,
  setPublicationYear,
  setSearchData,
} from "../../redux/Feature/book/bookSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IBooks } from "../../types/globalTypes";
import Allbook from "./Allbook";

const Allbooks = () => {
  const { data, isLoading } = useGetAllBooksQuery(undefined);
  const { data:years } = useGetPublicationYearQuery(undefined);
  const { data: genres } = useGetGenteQuery(undefined);


  const { search, publicationYear, genre } = useAppSelector((state) => state.books);
  if (isLoading) {
    return <p>Loading....</p>;
  }
  const dispatch = useAppDispatch();
  const handleSearchData = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      search: { value: string };
    };
    const search = target.search.value;
    dispatch(setSearchData(search));
  };

  const handleSelect = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      publicationYear: { value: string };
      genre: { value: string };
    };

    const publicationYear = target.publicationYear.value;
    const genre = target.genre.value;
    console.log(publicationYear, genre);
    dispatch(setPublicationYear(publicationYear));
    dispatch(setGenre(genre));
  };

  const bookAuthor = data.filter((book: IBooks) => book.author === search);
  const bookTitle = data.filter((book: IBooks) => book.title === search);
  const bookGenre = data.filter((book: IBooks) => book.genre === search);

  let products;

  if (
    bookAuthor.filter((e: { author: string | null }) => e.author === search)
      .length > 0
  ) {
    products = bookAuthor;
  } else if (
    bookTitle.filter((e: { title: string | null }) => e.title === search)
      .length > 0
  ) {
    products = bookTitle;
  } else if (
    bookGenre.filter((e: { genre: string | null }) => e.genre === search)
      .length > 0
  ) {
    products = bookGenre;
  } else {
    products = data;
  }


  const bookyears = data.filter((book: { publication: any; }) => book.publication === publicationYear)
  const booksGenre = data.filter((book: { genre: string | null; }) => book.genre === genre)
 
   if(bookyears.filter((e: { publication: string | null; }) => e.publication === publicationYear).length > 0 ){
         products =bookyears
   }else if (bookGenre) {
         products = booksGenre
   }




  console.log("products", products);
  return (
    <div>
      <div className="mt-6">
        <form onSubmit={handleSearchData}>
          <input
            type="text"
            name="search"
            placeholder="Search"
            className="input input-bordered w-full md:w-1/3 ml-2 "
          />
          <input
            type="submit"
            value="Search"
            className="bg-blue-400 py-3 px-8 text-center font-bold text-white ml-2 rounded"
          />
        </form>

        {/* select  */}
        <form
          onSubmit={handleSelect}
          className=" w-full md:w-1/3 mt-4 mb-14 ml-2 flex "
        >
          <select
            className="select select-bordered w-full md:w-2/4"
            name="publicationYear"
          >
            <option disabled selected>
              Publication year
            </option>
            {years?.map(
              (el: {
                publication:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | null
                  | undefined;
              }) => (
                <option> {el.publication} </option>
              )
            )}

            {/* <option>Han Solo</option>
              <option>Greedo</option> */}
          </select>

          <select
            className="select select-bordered w-full md:w-2/4 ml-1"
            name="genre"
          >
            <option disabled selected>
              Genre
            </option>

            {genres?.map(
              (el: {
                _id: React.Key | null | undefined;
                genre:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | null
                  | undefined;
              }) => (
                <option key={el._id}> {el.genre} </option>
              )
            )}
          </select>

          <input
            type="submit"
            value="Filter"
            className="bg-purple-400 py-1 text-white rounded text-center ml-1 px-4"
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
