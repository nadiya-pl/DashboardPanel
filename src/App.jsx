import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './layouts/Layout.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Courses from './pages/Courses.jsx';
import Payments from './pages/Payments.jsx';
import Reports from './pages/Reports.jsx';
import Settings from './pages/Settings.jsx';


const router = createBrowserRouter(
  [
    { path: "/", element: <Layout/>, children: [
      { path: "", element: <Dashboard/> },
      { path: "courses", element: <Courses/> },
      { path: "payments", element: <Payments/> },
      { path: "reports", element: <Reports/> },
      { path: "settings", element: <Settings/> }]
    }
  ]
);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
