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
import Read from './components/Read';
import Wishlist from './components/Wishlist';
import About from './pages/About';
import More from './pages/More';
import Contact from './pages/Contact'

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
        path: "/more",
        element: <More/>,
        loader: ()=> fetch('../book.json')
      },
      {
        path: "/contact",
        element: <Contact/>,
        loader: ()=> fetch('../book.json')
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/pages",
        element: <Pages />,
        loader: ()=> fetch('../book.json')
      },
      {
        path: "/book_details/:id",
        element: <CardDetails/>,
        loader: ()=> fetch('../book.json')
      },
      {
        path: "/bookmark/*",
        element: <Bookmark/>,
        loader: ()=> fetch('../book.json'),
        children: [
          {
            path: "read",
            element: <Read />
          },
          {
            path: "wishlist",
            element: <Wishlist />
          }
        ]
      },



    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
