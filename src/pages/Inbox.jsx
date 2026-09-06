import {Link} from 'react-router-dom'

function Inbox(){
    return(
        <div>
            <h1>Inbox Scan Page</h1>
            <p>// table of emails with sender, subject, score,risk badge</p>
            <Link to="/email/1">open sample email </Link>
            <br />
            <Link to="/dashboard">View dashboard</Link>
        </div>
    )
}

export default Inbox ;