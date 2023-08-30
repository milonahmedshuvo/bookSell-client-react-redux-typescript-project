import React from "react";
import { useGetAllBooksQuery } from "../../redux/Feature/api/apiSlice";
import { setSearchData } from "../../redux/Feature/book/bookSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IBooks } from "../../types/globalTypes";
import Allbook from "./Allbook";

const Allbooks = () => {
  const { data, isLoading } = useGetAllBooksQuery(undefined);
  const { search } = useAppSelector((state) => state.books);
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

  const handleSelect = (event:React.SyntheticEvent) => {
    event.preventDefault()
    const target = event.target as typeof event.target & {
      publicationYear: {value: string},
      genre: {value: string}
    }

    const publicationYear = target.publicationYear.value
    const genre = target.genre.value
    console.log(publicationYear, genre)
  }


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
        <form onSubmit={handleSelect} className=" w-full md:w-1/3 mt-4 mb-14 ml-2 flex ">
         
            <select className="select select-bordered w-full md:w-2/4" name="publicationYear">
              <option disabled selected>
                Publication year
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>

            <select className="select select-bordered w-full md:w-2/4 ml-1" name="genre">
              <option disabled selected>
                Genre
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
         

          <input type="submit" value="Filter" className="bg-purple-400 py-1 text-white rounded text-center ml-1 px-4" />
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
