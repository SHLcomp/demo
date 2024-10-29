import './App.css'
import Err from './comp/err/Err'
import Home from './comp/home/Home'
import { RouterProvider } from 'react-router-dom';


import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Err/>
  }
])

function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
