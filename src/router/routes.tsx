import { createBrowserRouter } from "react-router";
import App from "../App";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <div>Error Page</div>,
        children:[
            {
                path: "about",
                element: <div>About Page</div>,
                errorElement: <div>Error Page</div>,
            }
        ]
    }
]);