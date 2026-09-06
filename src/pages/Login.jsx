import { useNavigate } from 'react-router-dom'
import './Login.css'

function Login() {
  const navigate = useNavigate()

  const handleGoogleConnect = () => {
    navigate('/inbox')
  }

  const handleLogin = (e) => {
    e.preventDefault()
    navigate('/inbox')
  }

  return (
    <div className="login-page">
      <div className="login-left">
        <div className="brand-row">
          <div className="brand-name">
            EmailSentinel-<span>AI</span>
          </div>
        </div>

        <div className="eyebrow-pill">AI-Powered Email Security</div>

        <h1 className="hero-title">
          EmailSentinel-<span>AI</span>
        </h1>
        <div className="hero-tagline">Detect. Block. Stay Safe.</div>
        <p className="hero-desc">
          Protect your inbox from phishing, spam and malicious emails with the
          power of AI. Because your security matters.
        </p>

        <div className="feature-list">
          <div className="feature-item">
            <div className="feature-icon blue"></div>
            <div>
              <div className="feature-title">Smart Threat Detection</div>
              <div className="feature-desc">Identifies phishing, spam and malicious emails using AI.</div>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon green"></div>
            <div>
              <div className="feature-title">Real-time Protection</div>
              <div className="feature-desc">Stops threats before they reach your inbox.</div>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon purple"></div>
            <div>
              <div className="feature-title">Your Privacy First</div>
              <div className="feature-desc">Secure, private and always in your control.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="login-right">
        <form className="login-card" onSubmit={handleLogin}>
          <div className="login-card-icon"></div>
          <div className="login-card-title">Welcome Back </div>
          <div className="login-card-subtitle">Login to your EmailSentinel-AI account</div>

          <div className="field-group">
            <label className="field-label">Email Address</label>
            <input type="email" className="field-input" placeholder="Enter your email address" required />
          </div>

          <div className="field-group">
            <label className="field-label">Password</label>
            <input type="password" className="field-input" placeholder="Enter your password" required />
          </div>

          <button type="submit" className="login-submit">→ Login</button>

          <div className="divider">OR</div>

          <button type="button" className="google-button" onClick={handleGoogleConnect}>
            🔵 Continue with Google
          </button>

          <div className="signup-line">
            Don't have an account? <a href="#">Sign up</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login