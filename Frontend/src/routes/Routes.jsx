import Add from "../pages/Add/Add";
import Main from "../pages/Main/Main";
import Root from "../pages/Root";
import Wishlist from "../pages/Wishlist/Wishlist";


export const ROUTES = [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/add",
                element: <Add />
            },
            {
                path: "/wishlist",
                element: <Wishlist />
            },
            {
                path: "/",
                element: <Main />
            }
        ]
    }

]
