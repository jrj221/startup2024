import React from 'react';
import { useState, useEffect } from 'react';

export function Home() {
  const [popupOpen, setIsOpen] = useState(false);
  const showPopup = () => setIsOpen(true);
  const hidePopup = () => setIsOpen(false);

  const [privacy, setPrivacy] = useState("public")

  function handleClick() {
    setPrivacy((privacy) => privacy === "private" ? "public" : "private");
  }

  const [temperature, updateTemp] = useState('TEMP');
  useEffect(() => {
    const interval = setInterval(() => {
      fetch('/api/getWeather')
        .then(response => response.text()) // makes response readable as a string I guess
        .then(temperature => updateTemp(temperature))
    }, 60000) //updates every hour

    return () => clearInterval(interval); // de-allocates memory for the timer once the page component changes (no memory leaks)
  }, []); // empty dependency array makes it so it won't execute for each render (which would be redundant considering we have an interval)

  return (   
    <main role="main">
      <div className="mobile_countdown">
          <span className="unit">YOU HAVE</span><br />
          <span className="time">5 </span><span className="unit">days </span><span className="time">14 </span><span className="unit">hours </span><span className="time">48 </span><span className="unit">seconds</span><br />
          <span className="unit">TO COMPLETE THIS WEEK'S CONTRACT</span>
        </div>
      <div className="countdown_and_weather">
        <div className="countdown">
          <span className="unit">YOU HAVE</span><br />
          <span className="time">5 </span><span className="unit">days </span><span className="time">14 </span><span className="unit">hours </span><span className="time">48 </span><span className="unit">seconds</span><br />
          <span className="unit">TO COMPLETE THIS WEEK'S CONTRACT</span>
        </div>
        <div className="forecast">
          <p>Thinking about going after your target tonight? It's currently {temperature}&deg;F out.</p>
        </div>
      </div>
    <div className="target">
      <button className="privacy_button" onClick={handleClick}><img className="privacy_logo" src="https://shorturl.at/o7x5o" /></button>
      <img className="target_photo" 
        src="https://shorturl.at/aRkQD" 
        style={{ filter: privacy === "private" ? 'blur(50px)' : 'none' }}/>
      <div>
        <p style={{ display: privacy === "private" ? 'inline-block' : 'none' }}><b>[REDACTED]</b></p>
        <p style={{ display: privacy === "public" ? 'inline-block' : 'none' }}>MR BEAST | </p>
        <button 
          onClick={showPopup} 
          style={{ display: privacy === "public" ? 'inline-block' : 'none' }} 
          className="elimination_button">
        <b>ELIMINATE</b></button>
        {/* popup */}
        {popupOpen && (
        <div style={{
          position: 'fixed', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)', width: '60vw',
          backgroundColor: 'black', color: 'white', padding: '20px', border: '4px solid red', zIndex: 1000}}>
          <h2>Are you sure you eliminated your target?</h2>
          <h4>This action cannot be undone</h4>
          <div>
            <button onClick={hidePopup}>Go back</button>
            <button className="elimination_button" onClick={hidePopup}>ELIMINATE</button>
          </div>
        </div>)}
    </div>
    </div>

    <p className="comments">  
        Does a countdown count as a third party service call?
            Otherwise I'll have a third party call to the weather 
        so you know if you need a rain jacket to go hunt your target &#129335;</p>
    </main>
  );
}
