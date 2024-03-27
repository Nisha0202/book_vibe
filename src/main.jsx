import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/root/Root';
import Home from './pages/Home';
import Pages from './pages/Pages';
import ErrorPage from './components/ErrorPage';
import CardDetails from './components/CardDetails'
import Bookmark from './pages/Bookmark';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/pages",
        element: <Pages />,
      },
      {
        path: "/book_details/:id",
        element: <CardDetails/>,
        loader: ()=> fetch('../book.json')
      },
      {
        path: "/bookmark",
        element: <Bookmark/>,
        loader: ()=> fetch('../book.json')
       
      },



    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
