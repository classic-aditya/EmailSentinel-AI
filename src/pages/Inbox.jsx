import {Link} from 'react-router-dom'
import { mockEmails } from '../api/Data.js'
import RiskBadge from '../components/RiskBadge.jsx';
import './Inbox.css'

function Inbox(){
    return(
        <div className='inbox-page'>
            <h1>Inbox Scan </h1>
             <p className="inbox-subtitle">Last scan: just now · {mockEmails.length} messages</p>

             <table className='inbox-table'>
                <thead>
                    <tr>
                        <th>Sender</th>
                        <th>Subject</th>
                        <th>Received</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {mockEmails.map((email) => (
                        <tr key={email.id}>
                            <td>
                                <div className='sender-name'>{email.sender}</div>
                                <div className='sender-email'>{email.senderEmail}</div>
                            </td>
                            <td>
                                <Link to={`/email/${email.id}`} className="subject-link">
                                {email.subject}
                                </Link>
                            </td>
                            <td className='recevived-time'> {email.receivedAt}
                            </td>
                            <td>
                                <RiskBadge score={email.score}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
             </table>

        </div>
    )
}

export default Inbox ;