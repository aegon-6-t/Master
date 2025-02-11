import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
            onClick={() => setCount(count + 1)}
          >
            {count === 0 ? 'Démarrer l\'aventure' : `${count} palmiers plantés 🌴`}
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
