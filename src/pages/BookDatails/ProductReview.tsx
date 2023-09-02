const ProductReview = () => {


    
  return (
    <div className=" mt-20">

      <form onSubmit={handleReview} className="flex justify-center">
        <input
          type="text"
          placeholder="Comments"
          className="input input-bordered input-sm w-full md:w-1/2 "
        />
        <input
          type="submit"
          value="Comment"
          className="bg-blue-400 py-1 text-white ml-1 px-6 rounded"
        />
      </form>


    </div>
  );
};



export default ProductReview;
