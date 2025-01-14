import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BrowseBooks from './components/BrowseBooks.jsx'
import AddBook from './components/AddBook.jsx'
import Home from './components/Home.jsx'
import NotFound from './components/NotFound.jsx'
import BookDetails from './components/BookDetails.jsx'

const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/browsebooks",
          element: <BrowseBooks/>
        },
        {
          path: "/books/:category",
          element: <BrowseBooks />,
        },
        
        {
          path: "/book/:id",
          element: <BookDetails/>
        },
        {
          path: "addbook",
          element: <AddBook/>
        }
      ],
      errorElement: <NotFound/>
    },
    
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>,
)
