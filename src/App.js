import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import Details from "./pages/app/details/Details";
import Learn from "./pages/app/learn/Learn";
import Chapter from "./pages/app/chapter/Chapter.jsx";
import Page404 from "./pages/misc/Page404/Page404.jsx";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {path:"/",element:<Nav />,errorElement:<Page404 />, children:[
      {path:"/",element:<Hero/>},
      {path:"/courses",children:[
        {index:true,element:<Courses/>},
        {path:"/courses/:id",element:<Details/>}
      ]},
      {path:"/learn/:id",
      element:<Learn />,
      children:[
        {
          path:"chapter/:chapterId",
        element:<Chapter/>
      }
      ]}
    ]}
  ])
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
