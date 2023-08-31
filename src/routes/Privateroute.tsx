import { ReactNode } from "react"
import { useAppSelector } from "../redux/hooks"
import { Navigate, useLocation } from "react-router-dom"

interface IProps {
    children: ReactNode
}



const Privateroute = ({children}:IProps ) => {
    const {user, isLoading } = useAppSelector((state) => state.users)
    if(isLoading){
        return <p>Loading..</p>
    }

    const location = useLocation()

    if( !user.email){
        return <Navigate to="/singin" state={{from : location}} replace ></Navigate>
    }

    return children    
  
}

export default Privateroute
