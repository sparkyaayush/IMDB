import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Component/Home';
import Actor from './Component/Actor';
import Movie from './Component/Movie';
import SearchResult from './Component/SearchResult';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/> ,
    },
    {
      path:'/search/:movie',
      element:<SearchResult/>
    },
    {
      path:'/movie/:movieId',
      element:<Movie/>
    },
    {
      path:'/actor/:actorId',
      element:<Actor/>
    }
  ]);
  return (
    <>
     <RouterProvider router={router} />
    </>
  );
}

export default App;