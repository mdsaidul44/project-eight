import React from 'react'
import ReactDOM from 'react-dom/client' 
import './index.css'
import Root from './components/Root/Root.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import Home from './components/Home/Home.jsx';
import Listed from './components/Listed/Listed.jsx';
import Pages from './components/Pages/Pages.jsx';
import ErrorElement from './components/ErrorElement/ErrorElement.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';
import { ToastContainer } from 'react-toastify';
import Contact from './components/Contact/Contact.jsx';
import About from './components/About/About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:   <Root />,
    errorElement: <ErrorElement/>,
    children:[
      {
        path:'/',
        element: <Home/>,
        loader: ()=>fetch('/BooksData.json')
      },
      {
        path:'/books/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/BooksData.json')
        
      },
      {
        path:'/listed',
        element:<Listed/>,
        loader: () => fetch('/BooksData.json')
      },
      {
        path:'/pages',
        element:<Pages/>,
        loader: () =>fetch('/BooksData.json')
      },
      {
        path:'/about',
        element:<About/>,
        loader: () => fetch('/BooksData.json')
      },
      {
        path:'/contact',
        element:<Contact/>,
        loader: () =>fetch('/BooksData.json')
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <RouterProvider router={router}/>
    <ToastContainer />
  </React.StrictMode>,
)
