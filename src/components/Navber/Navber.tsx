import { Link } from 'react-router-dom';


const Navber = () => {





  return (
    <div>

      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
           


        {/* item */}


          </div>
          <a className="btn btn-ghost normal-case text-xl">BookSell</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          

        {/* item */}



        </div>




        <div className="navbar-end">
          
             <Link to="" className='mr-3'> All Books</Link>
             <Link to="/singup" className='mr-3'> Signup</Link>
             <Link to="/singin" className='mr-4'> Signin</Link>


        </div>
      </div>
    </div>
  );
};

export default Navber;
