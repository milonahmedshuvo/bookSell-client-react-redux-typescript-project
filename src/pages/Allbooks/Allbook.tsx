interface IBooks {
  image: string;
  title: string;
  author: string;
  genre: string;
  publication: string;
  comments: string[];
}

interface BookProps {
  book: IBooks;
}

const Allbook = (props: BookProps) => {
  const { image, title, author, genre, publication } = props.book;


  
  return (
    <div className="mb-20">
      <div className="flex justify-center">
        <img className=" w-3/5 h-[350px]" src={image} alt="" />
      </div>

      <div>
        <p className="text-center text-xl mt-5">{title}</p>
        <p className="text-center text-lg">{author}</p>
        <p className="text-center text-lg">{genre}</p>
        <p className="text-center text-lg">{publication}</p>
      </div>

      <div className="flex justify-center mt-3">
        <input
          type="submit"
          className="bg-blue-400 w-full md:w-2/3 py-1 text-white font-bold text-center rounded"
          value="Add to card"
        />
      </div>
    </div>
  );
};

export default Allbook;
