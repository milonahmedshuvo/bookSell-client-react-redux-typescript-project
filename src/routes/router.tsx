import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../layout/Mainlayout';
import Home from '../pages/Home/Home';
import Singin from '../pages/Singin/Singin';
import Singup from '../pages/Singup/Singup';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/singin",
                element: <Singin/>
            },
            {
                path: "/singup",
                element: <Singup/>
            }
        ]
    }
])

export default router
