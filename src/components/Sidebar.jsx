import { Link, useLocation } from "react-router-dom";
import './Sidebar.css';

const navItems = [
    { label: 'Dashboard', path: '/dashboard'},
    { label: 'Inbox Scan', path: '/inbox'},
    { label: 'Email Detail', path: '/email/1'},
    { label: 'Threat Intelligence', path: null},
    { label: 'Geolocation', path: null},
    { label: 'Reports', path: null},
    { label: 'Settings', path: null},
]

function Sidebar(){
    const location = useLocation()
        
    return (
     <div className="sidebar">
         <div className="sidebar-brand">
        <div>
          <div className="sidebar-brand-name">EmailSentinel-AI</div>
          <div className="sidebar-brand-tag">AI-Powered Email Threat Intelligence</div>
        </div>
        </div>

        <nav className="sidebar-nav">
        {navItems.map((item) =>
          item.path ? (
            <Link
              key={item.label}
              to={item.path}
              className={`sidebar-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              <span className="sidebar-link-icon">{item.icon}</span>
              {item.label}
            </Link>
          ) : (
            <div key={item.label} className="sidebar-link disabled" title="Not built yet">
              <span className="sidebar-link-icon">{item.icon}</span>
              {item.label}
            </div>
          )
        )}
      </nav>

      <div className="sidebar-footer"> <button>LOGOUT</button></div>
    </div>
    )
}

export default Sidebar