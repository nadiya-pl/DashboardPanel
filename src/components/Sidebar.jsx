import { ChartPie, Notebook, BadgeDollarSign, Users, ChartNoAxesCombined, Settings, Menu } from "lucide-react";
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';


const menuItems = [
	{ name: "Dashboard", icon: ChartPie , color: "#6366f1", href: "/" },
	{ name: "Courses", icon: Notebook, color: "#8B5CF6", href: "/courses" },
	{ name: "Payments", icon: BadgeDollarSign, color: "#EC4899", href: "/payments" },
	{ name: "Reports", icon: ChartNoAxesCombined, color: "#F59E0B", href: "/reports" },
	{ name: "Settings", icon: Settings, color: "#6EE7B7", href: "/settings" },
];


function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
   <motion.div className={`sidebar-container ${isOpen ? 'sidebar--expanded' : 'sidebar--collapsed'}`} transition={{ duration: 0.3 }} >
      
      {/* menu button */}
      <div className="menu-header">
        <div className="menu-toggle">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={24} />
          </motion.button>         
        </div>
         <div className="menu-project-title">
            <motion.span style={{ display: "inline-block", overflow: "hidden", whiteSpace: "nowrap", }}
                  animate={{ opacity: isOpen ? 1 : 0, width: isOpen ? 120 : 0, marginLeft: isOpen ? 16 : 0 }}
                  transition={{ duration: isOpen ? 0.2 : 0.2, delay: isOpen ? 0.4 : 0.3 }} >
                    Demo Panel               
            </motion.span>
          </div>      
      </div> 
  

      {/* menu items */}
      <nav className="menu-items">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <NavLink key={index} to={item.href} end={index === 0 ? true : undefined}>
              <motion.div className="menu-item">
                <Icon size={24} style={{ color: item.color }} className="icon" />
                <motion.span style={{ display: "inline-block", overflow: "hidden", whiteSpace: "nowrap", }}
                  animate={{ opacity: isOpen ? 1 : 0, width: isOpen ? 120 : 0, marginLeft: isOpen ? 16 : 0 }}
                  transition={{ duration: isOpen ? 0.2 : 0.2, delay: isOpen ? 0.4 : 0.3 }} >
                  {item.name}
                </motion.span>
              </motion.div>
            </NavLink>
          );
        })}
      </nav>
    </motion.div>
  );
}

export default Sidebar