import { Link, useParams } from 'react-router-dom';

function EmailDetail(){
    const {id} = useParams()

    return (
        <div>
            <h1>// Email Detail Page </h1>
            <p> ............</p>
            <Link to="/inbox">Back to Inbox</Link>
        </div>
    )
}

export default EmailDetail ;