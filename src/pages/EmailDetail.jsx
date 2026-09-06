import { Link, useParams } from 'react-router-dom';
import { mockEmails } from '../api/Data.js';
import RiskBadge from '../components/RiskBadge.jsx';
import OriginMap from '../components/OriginMap.jsx';
import './EmailDetail.css';

function EmailDetail(){
    const {id} = useParams()
    const email = mockEmails.find((e) => e.id == id)
    if(!email){
        return (
            <div className='detail-page'>
                <Link to='/inbox' className="back-link"> Back to inbox </Link>
                <p>Email not found.</p>
            </div>
        )
    }

    return (
        <div className='detail-page'> 
            <Link to="/inbox" className="back-link">Back to inbox</Link>

            <h1 className='email-subject'>{email.subject}</h1>
            <div className='email-meta'>
                {email.sender}&lt;{email.senderEmail}&gt;
            </div>
            <RiskBadge score={email.score}/>

            <div className='section-title'>Sender Intelligence</div>
            <div className='intel-grid'>
                <div className='intel-label'>Source IP</div>
                <div>{email.sourceIp}</div>
                <div className="intel-label">Geolocation</div>
                <div>{email.geolocation}</div>
                <div className="intel-label">ISP / Host</div>
                <div>{email.isp}</div>

                <div className="intel-label">WHOIS</div>
                <div>{email.whois}</div>          
            </div>
            {/* <OriginMap lat={email.lat} lng={email.lng} label={email.geolocation} /> */}

            <div className="section-title">Evidence</div>
            <div className="evidence-box">
                <div className="evidence-score">AbuseIPDB score: {email.abuseScore}</div>
                <div>{email.abuseNote}</div>
            </div>
            <div className="evidence-box">
                <div>{email.priorFlagged}</div>
            </div>

            <div className="section-title">Message Preview</div>
            <div className="preview-box">{email.preview}</div>
         </div>
    )
}

export default EmailDetail 