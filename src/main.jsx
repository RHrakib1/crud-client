import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Readdata from './Component/Readdata/Readdata.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

  },
  {
    path: '/user',
    element: <Readdata />,
    loader: () => fetch('http://localhost:5000/getdata')
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
