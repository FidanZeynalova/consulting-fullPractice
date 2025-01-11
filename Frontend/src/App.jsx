import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import { ROUTES } from './routes/Routes'

function App() {
  const router = createBrowserRouter(ROUTES)

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
