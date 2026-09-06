import './RiskBadge.css';

function RiskBadge({score}){
    let label = 'safe'
    let variant = 'safe'

    if(score>70){
        label = 'High Risk'
        variant = "high"
    } else if (score > 30){
        label = 'suspicious'
        variant = 'suspicious'
    }

    return (
        <span className={`risk-badge risk-badge--${variant}`}>
         {label} · {score}
        </span>
    )
}

export default RiskBadge;