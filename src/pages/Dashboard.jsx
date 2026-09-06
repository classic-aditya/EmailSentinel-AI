import { Link } from 'react-router-dom'
import { dashboardStats } from '../api/Data.js'
import './Dashboard.css'

function Dashboard() {
  const { totalScanned, scannedChange, totalFlagged, flaggedBreakdown, flaggedRate, flaggedRateChange, riskBreakdown } = dashboardStats

  const total = riskBreakdown.safe + riskBreakdown.suspicious + riskBreakdown.high

  return (
    <div className="dashboard-page">
      <Link to="/inbox" className="back-link">← Back to inbox</Link>

      <div className="dashboard-header">
        <h1>Dashboard</h1>
      </div>
      <p className="dashboard-subtitle">Overview · last 7 days</p>

      <div className="stat-cards">
        <div className="stat-card">
          <div className="stat-card-label">Emails Scanned</div>
          <div className="stat-card-value">{totalScanned.toLocaleString()}</div>
          <div className="stat-card-sub">{scannedChange}</div>
        </div>

        <div className="stat-card">
          <div className="stat-card-label">Total Flagged</div>
          <div className="stat-card-value">{totalFlagged}</div>
          <div className="stat-card-sub neutral">{flaggedBreakdown}</div>
        </div>

        <div className="stat-card">
          <div className="stat-card-label">Flagged Rate</div>
          <div className="stat-card-value">{flaggedRate}</div>
          <div className="stat-card-sub">{flaggedRateChange}</div>
        </div>
      </div>

      <div className="risk-section">
        <div className="risk-section-title">Risk Breakdown</div>

        <div className="risk-row">
          <div className="risk-row-label">Safe</div>
          <div className="risk-row-bar-track">
            <div
              className="risk-row-bar-fill"
              style={{ width: `${(riskBreakdown.safe / total) * 100}%`, background: 'green' }}
            />
          </div>
          <div className="risk-row-count">{riskBreakdown.safe}</div>
        </div>

        <div className="risk-row">
          <div className="risk-row-label">Suspicious</div>
          <div className="risk-row-bar-track">
            <div
              className="risk-row-bar-fill"
              style={{ width: `${(riskBreakdown.suspicious / total) * 100}%`, background: 'orange' }}
            />
          </div>
          <div className="risk-row-count">{riskBreakdown.suspicious}</div>
        </div>

        <div className="risk-row">
          <div className="risk-row-label">High Risk</div>
          <div className="risk-row-bar-track">
            <div
              className="risk-row-bar-fill"
              style={{ width: `${(riskBreakdown.high / total) * 100}%`, background: 'red' }}
            />
          </div>
          <div className="risk-row-count">{riskBreakdown.high}</div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard