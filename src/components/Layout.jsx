import Sidebar from './Sidebar.jsx';
import './Layout.css';

function Layout({children}){
    return (
        <div className='app-layout'>
            <Sidebar />
            <div className='app-content'>{children}</div>

        </div>
    )
}

export default Layout