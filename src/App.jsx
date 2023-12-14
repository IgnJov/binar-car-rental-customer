import {
    BrowserRouter,
    Routes,
    Route,
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Landing from "./pages/landing/Landing.jsx";
import Filter from "./pages/search/Search.jsx";
import Detail from "./pages/detail/Detail.jsx";
import Error from "./pages/error/Error.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Landing />,
            errorElement: <Error />,
        },
        {
            path: "/search",
            element: <Filter />,
        },
        {
            path: "/detail/:id",
            element: <Detail />,
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
