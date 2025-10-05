import Sidebar from '../components/Sidebar.jsx';
import { Outlet } from 'react-router-dom'
import './Layout.css';


function Layout() {
  return (
    <div className="layout-root">
      <Sidebar />
      <div className="layout-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout