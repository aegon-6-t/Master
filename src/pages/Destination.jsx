function Destination() {
  const destinations = [
    { title: "Plage Paradisiaque", emoji: "🏖️", color: "#FF6B6B" },
    { title: "Jungle Mystérieuse", emoji: "🌴", color: "#4ECB71" },
    { title: "Lagon Bleu", emoji: "🌊", color: "#4DA8DA" },
    { title: "Volcan Sacré", emoji: "🌋", color: "#FF8C42" },
  ]

  return (
    <div className="exotic-container">
      <div className="content">
        <h1 className="title">Destination Paradisiaque</h1>
        <p className="subtitle">Choisissez votre prochaine aventure</p>
        
        <div className="destinations-grid">
          {destinations.map((dest, index) => (
            <button 
              key={index}
              className="destination-button"
              style={{'--delay': `${index * 0.2}s`, '--color': dest.color}}
            >
              <span className="destination-emoji">{dest.emoji}</span>
              <span className="destination-title">{dest.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Destination 