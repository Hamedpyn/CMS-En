import Home from "./Pages/Home"
import Users from "./Pages/Users"
import Product from "./Pages/Product"
import Products from "./Pages/Products"
import Analytics from "./Pages/Analytics"
import TransActions from "./Pages/TransActions"

let routes = [
    {path:"*",element:<Home/>},
    {path:"/",element:<Home/>},
    {path:"/Users",element:<Users/>},
    {path:"/NewUsers",element:<Home/>},
    {path:"/Products",element:<Product/>},
    {path:"/Products/:id",element:<Products/>},
    {path:"/Analytics",element:<Analytics/>},
    {path:"/Sales",element:<Home/>},
    {path:"/Reports",element:<Home/>},
    {path:"/Mail",element:<Home/>},
    {path:"/FeedBack",element:<Home/>},
    {path:"/Messages",element:<Home/>},
    {path:"/Manage",element:<Home/>},
    {path:"/TransActions",element:<TransActions/>},
]

export default routes