import { RouterProvider } from "react-router-dom"
import router from "./routes/router"
import { useEffect } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAppDispatch } from "./redux/hooks";
import { setLoading, setuserEmail, setuserName } from "./redux/Feature/userVerify/userSlice";



const auth = getAuth();

function App() {
     const dispatch = useAppDispatch()
      
      

     useEffect(()=>{
      dispatch(setLoading(true))

      onAuthStateChanged(auth, (user) => {
        if (user) {  
          // console.log("on auth state changed:",user, user.displayName)
          // console.log("displayName:", user.displayName)
          dispatch(setLoading(false))
          dispatch(setuserEmail(user.email))
          dispatch(setuserName(user.displayName))                              
        } else {
         console.log("user nai")
         dispatch(setLoading(false))
         
        }



      });
     }, [])



  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}


export default App
