import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import HomePage from './pages/homePage/HomePage';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';
import BlogsPage from './pages/blogspage/BlogsPage';
import ArticlesPage from './pages/articlesPage/ArticlesPage';
import FundingPage from './pages/fundingPage/FundingPage';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <NotFoundPage />
    },
    {
      path: "/blogs",
      element: <BlogsPage />
    },
    {
      path: "/articles",
      element: <ArticlesPage />
    },
    {
      path: "/funding",
      element: <FundingPage />
    }
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
