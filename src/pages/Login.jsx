import {Link} from 'react-router-dom'

function Login(){
    return (
        <div>
            <h1>Login Page</h1>
            <p>// Google connetion button </p>
            <Link to = "/inbox">Continue to Inbox </Link>
        </div>
    )
}

export default Login;