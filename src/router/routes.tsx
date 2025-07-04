import { createBrowserRouter } from "react-router";
import App from "../App";
import GenerateQueriesPage from "@pages/GenerateQueries";
import PredefinedQuery from "@pages/PredefinedQuery";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <div>Error Page</div>,
        children:[
            {
                path: "",
                element: <GenerateQueriesPage/>,
                errorElement: <div>Error Page</div>,
            },
            {
                path:"query/:queryKey",
                element: <PredefinedQuery/>,
                errorElement: <div>Error Page</div>,
            },
            {
                path: "about",
                element: <div>About Page</div>,
                errorElement: <div>Error Page</div>,
            }
        ]
    }
]);