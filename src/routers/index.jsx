import { createBrowserRouter } from "react-router-dom";
import Homesection from "../pages/Home/Home-section.jsx";
import App from "../App.jsx";
import About from "../pages/About/About.jsx";
import ContectUs from "../pages/ContectUs/ContectUs.jsx";
import Project from "../pages/Project/Project.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path:"/",
                element:<Homesection/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/project",
                element:<Project/>
            },
            {
                path:"/contectUs",
                element:<ContectUs/>
            }
        ]
    }
])

export default router