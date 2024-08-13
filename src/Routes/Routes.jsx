import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        Element: <Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
        ]
    }
])

export default router;