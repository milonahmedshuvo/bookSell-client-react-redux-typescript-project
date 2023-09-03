import { toast } from "react-hot-toast";
import {
  useGetOneBookQuery,
  useUpdateCommentsMutation,
} from "../../redux/Feature/api/apiSlice";

const ProductReview = ({ id }: any) => {
  console.log("review id:", id);
  const { data: book, isLoading } = useGetOneBookQuery(id)
  const [updateComments, { data, isError }] = useUpdateCommentsMutation();

  console.log(isError, isLoading);
  console.log("server response :", data);

  const handleReview = (event: any) => {
    event.preventDefault();
    const inputValue = event.target.comment.value;
    console.log(inputValue);

    const options = {
      id: id,
      data: { proverty: inputValue },
    };

    updateComments(options);
  };

  if (data?.modifiedCount === 1) {
    toast.success("Succesful comment add");
  }

  return (
    <div className=" mt-20">
      <form onSubmit={handleReview} className="flex justify-center">
        <input
          type="text"
          name="comment"
          placeholder="Comments"
          className="input input-bordered input-sm w-full md:w-1/2 "
        />
        <input
          type="submit"
          value="Comment"
          className="bg-blue-400 py-1 text-white ml-1 px-6 rounded"
        />
      </form>



      {/* product review show  */}
      <div className="mt-10 md:ml-10 ml-0 ">
        {book?.comments?.map((comment: string, index: number) => (
          <div className="flex items-center gap-5 mb-5" key={index}>

            <div>
              <img className="w-14 h-10 rounded-full" src="https://dpemoji.com/wp-content/uploads/2023/01/Girlish-Cartoon-Dp-59.png" alt="" />
            </div>

            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductReview;
