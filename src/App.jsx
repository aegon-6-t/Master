import { useNavigate } from 'react-router-dom'
import './App.css'

function App() {
  const navigate = useNavigate()

  return (
    <div className="exotic-container">
      <div className="content">
        <h1 className="title">Bienvenue dans l'Oasis</h1>
        <p className="subtitle">Un endroit paisible pour coder</p>
        
        <div className="card">
          <div className="palm-decoration">🌴</div>
          <p className="message">
            Commencez votre voyage tropical
          </p>
          <button 
            className="exotic-button"
            onClick={() => navigate('/destination')}
          >
            Commencer l'aventure →
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
