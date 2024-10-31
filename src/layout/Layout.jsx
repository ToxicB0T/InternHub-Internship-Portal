import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"


import Home from "../pages/home/Home"
import Profile from "../pages/profile/Profile"
import Chatbox from "../pages/chatbox/Chatbox"
import Notification from "../pages/notification/Notification"
import Findinternship from "../pages/findinternship/Findinternship"
import Welcomepage from "../pages/welcomepage/Welcomepage"
import Signin from "../pages/signin/Signin"
import Signup from "../pages/signup/Signup"


import Leftside from "../component/leftside/Leftside"
import Rightside from "../component/rightside/Rightside"
import Navbar from "../component/navbar/Navbar"
import Projects from "../component/profileComponent/projects/Projects"
import Certificates from "../component/profileComponent/certificates/Certificates"
import Commendations from "../component/profileComponent/Commendations/Commendations"



export default function Layout() {
    const Feed=()=>{
        return(
            <>
            <Navbar />
            <main>
                <Leftside className="leftside"/>
                <div className="box">
                    <Outlet></Outlet>
                </div>
                <Rightside className="rightside"/>
            </main>
            </>
        )
    }


    const router=createBrowserRouter([
        {
            path:"/",
            element:<Feed />,
            children:[
                {
                    path:"/profile",
                    element:<Profile />,
                    children:[
                        {
                            path:"projects",
                            element:<Projects />,
                        },
                        {
                            path:"certificates",
                            element:<Certificates />,
                        },
                        {
                            path:"commendations",
                            element:<Commendations />,
                        },
                    ]
                },
                {
                    path:"/",
                    element:<Home />,
                },
                {
                    path:"/chatbox/:id",
                    element:<Chatbox />,
                },
                {
                    path:"/notification/:id",
                    element:<Notification />,
                },
                {
                    path:"/findinternship/:id",
                    element:<Findinternship />,
                },
                
            ]
        },
        {
            path:"/welcomepage",
            element:<Welcomepage />,
        },
        {
            path:"/signin",
            element:<Signin />,
        },
        {
            path:"/signup",
            element:<Signup />,
        },
    ])


  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}
