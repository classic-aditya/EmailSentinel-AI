import {Link} from 'react-router-dom';

function Dashboard() {
    return (
        <div>
            <h1>// Dashboard Page</h1>
            <p> Analytics</p>
            <Link to="/inbox">Back to inbox</Link>

        </div>
    )
}

export default Dashboard;