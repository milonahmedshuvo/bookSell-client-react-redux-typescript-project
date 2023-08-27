import singup from '../../image/singup.jpg'

const Singup = () => {


  return (
    <div className="flex items-center">

       <div className=" w-full md:w-1/2 mt-10">
           <img src={singup} alt="" />
       </div>  


       <div className=" md:w-1/2 px-28 ">
        <h1 className="text-2xl text-center mb-10">Singup from</h1>

          <form>
          <input type="email" placeholder="email" required className="input input-bordered w-full " />
          <input type="password" required placeholder="email" className="input input-bordered w-full mt-2" />
           
           <input type="submit" value="Submit" className="bg-blue-400 py-1 w-full text-center mt-4 font-bold text-white" />
          </form>
       </div>
    </div>
  )
}

export default Singup
