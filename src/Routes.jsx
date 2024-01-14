import { createBrowserRouter } from "react-router-dom";
import Nav from './components/nav'
import Layout from "./pages/layout";
import Content from "./pages/Content";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Source from './pages/SourcePage';
import Code from "./pages/Code";
const RouterConfig = createBrowserRouter([
  {
    path:'/',
    element : <Layout/>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/source',
        element:<Source/>
      },
       {
        path:'/source/code/:param',
        element:<Code/>
      }
    ]
  },
  {
    
  }


])

export default RouterConfig;