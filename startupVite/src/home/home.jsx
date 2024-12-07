import React from 'react';
import { useState, useEffect } from 'react';

export function Home({ userName }) {
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
      const location = "provo";
      const api_key = "kM8YGj9oKccQcmyNJvd7zDQUsbhxlXka";
      const url = `https://api.tomorrow.io/v4/weather/forecast?location=${location}&apikey=${api_key}&units=imperial`;
      fetch(url, {headers: {accept: 'application/json'}})
      .then(response => {
          if (response.status === 429) {
              // Handle rate limit scenario
              const dummyTemperature = 'tooMany';
              return res.send(dummyTemperature.toString());
          }
          return response.json()}
      )
      .then(data => {
          let temperature = data.timelines.hourly[0].values.temperatureApparent;
          let roundedTemperature = Math.round(temperature); // Round the number
          return roundedTemperature
      })
      .then(temperature => updateTemp(temperature))
      .catch(error => {
          console.error('Fetch error:', error);
          res.status(500).send('Internal Server Error');
      });
    }, 60000) //updates every hour

    return () => clearInterval(interval); // de-allocates memory for the timer once the page component changes (no memory leaks)
  }, []); // empty dependency array makes it so it won't execute for each render (which would be redundant considering we have an interval)

  async function saveLeaderboardPosition() {
    const date = new Date();
    const newPerson = {userName: userName, date: date };

    await fetch('/api/updateLeaderboard', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newPerson),
    });
  }

  useEffect(() => { // current target rerenders every time you open/refresh the page
    get_target();
  }, []);

  const [target, setTarget] = useState(['MR BEAST', 'https://shorturl.at/aRkQD']);

  function eliminate() {
    console.log('eliminate');
    console.log(target[0]);
    fetch('/api/eliminatePlayer', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ target_name: target[0] }) // Send userName in the body
    })
    .then(response => response.json())
    .then(data => {
      setTarget(['Target Eliminated', 'https://shorturl.at/SrzJ8'])
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  function get_target() {
    fetch(`/api/getTarget?userName=${userName}`)
    .then(response => response.json())
    .then(data => {
      setTarget([data[0], data[1]])
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  function newRound() { // reshuffles targets based on remaining players
    fetch('/api/newRound', { method: 'POST' })
    .then(response => response.json())
    .then(data => {
      console.log(data.message);
      get_target(); 
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  function newGame() { // resets players to start a new game
    fetch('/api/newGame', { method: 'POST' })
    .then(response => response.json())
    .then(data => {
      console.log(data.message);
      get_target();
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  
  function countdown() {
    let now = new Date();
    let total_seconds = 
      ((8 - now.getDay()) * 24 * 60 * 60) - 
      (now.getHours() * 60 * 60) - 
      (now.getMinutes() * 60) 
      - now.getSeconds();
    let days_left = Math.floor(total_seconds / (24 * 60 * 60));
    let hours_left = Math.floor((total_seconds % (24 * 60 * 60)) / (60 * 60));
    let minutes_left = Math.floor((total_seconds % (60 * 60)) / 60);
    let seconds_left = total_seconds % 60;
    return { days_left, hours_left, minutes_left, seconds_left };
  }

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    const { days_left, hours_left, minutes_left, seconds_left } = countdown();
    setDays(days_left);
    setHours(hours_left);
    setMinutes(minutes_left);
    setSeconds(seconds_left);

    const intervalId = setInterval(() => {
        setSeconds(prevSeconds => {
            if (prevSeconds === 0) {
                setMinutes(prevMinutes => {
                    if (prevMinutes === 0) {
                        setHours(prevHours => {
                            if (prevHours === 0) {
                                setDays(prevDays => prevDays - 1);
                                return 23;
                            }
                            return prevHours - 1;
                        });
                        return 59;
                    }
                    return prevMinutes - 1;
                });
                return 59;
            }
            return prevSeconds - 1;
        });
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (   
    <main role="main">
      <div className="mobile_countdown">
          <span className="unit">YOU HAVE</span><br />
          <span className="time">{days} </span><span className="unit">days </span><span className="time">{hours} </span><span className="unit">hours </span><span className="time">{minutes} </span><span className="unit">minutes </span><span className="time">{seconds} </span><span className="unit">seconds</span><br />
          <span className="unit">TO COMPLETE THIS WEEK'S CONTRACT</span>
        </div>
      <div className="countdown_and_weather">
        <div className="countdown">
          <span className="unit">YOU HAVE</span><br />
          <span className="time">{days} </span><span className="unit">days </span><span className="time">{hours} </span><span className="unit">hours </span><span className="time">{minutes} </span><span className="unit">minutes </span><span className="time">{seconds} </span><span className="unit">seconds</span><br />
          <span className="unit">TO COMPLETE THIS WEEK'S CONTRACT</span>
        </div>
        <div className="forecast">
          <p>Thinking about going after your target tonight? It's currently {temperature}&deg;F out.</p>
        </div>
      </div>
    <div className="target">
      <button className="privacy_button" onClick={handleClick}><img className="privacy_logo" src="https://shorturl.at/o7x5o" /></button>
      <div>
        <button className="resetTargets" onClick={newRound}>NEW ROUND</button>
        <button className="resetTargets" onClick={newGame}>NEW GAME</button>
      </div>
      <img className="target_photo" 
        src={target[1]} 
        style={{ filter: privacy === "private" ? 'blur(50px)' : 'none' }}/>
      <div>
        <p style={{ display: privacy === "private" ? 'inline-block' : 'none' }}><b>[REDACTED]</b></p>
        <p style={{ display: privacy === "public" ? 'inline-block' : 'none' }}>{target[0]} | </p>
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
            <button className="elimination_button" onClick={() => { hidePopup(); saveLeaderboardPosition(); eliminate()} }>ELIMINATE</button>
          </div>
        </div>)}
    </div>
    </div>
    </main>
  );
}
