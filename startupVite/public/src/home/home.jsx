import React from 'react';
import { useState } from 'react';

export function Home() {
  const [privacy, setPrivacy] = useState("public")

  function handleClick() {
    setPrivacy((privacy) => privacy === "private" ? "public" : "private");
  }

  return (   
    <main role="main">
        <div className="countdown">
        <span className="unit">YOU HAVE</span><br />
        <span className="time">5 </span><span className="unit">days </span><span className="time">14 </span><span className="unit">hours </span><span className="time">48 </span><span className="unit">seconds</span><br />
        <span className="unit">TO COMPLETE THIS WEEK'S CONTRACT</span>
        </div>
    <div className="target">
        <button className="privacy_button" onClick={handleClick}><img className="privacy_logo" src="https://shorturl.at/o7x5o" /></button>
        <img className="target_photo" 
        src="https://shorturl.at/aRkQD" 
        style={{ filter: privacy === "private" ? 'blur(50px)' : 'none' }}
        />
        <p style={{ display: privacy === "private" ? 'block' : 'none' }}><b>[REDACTED]</b></p>
        <p style={{ display: privacy === "public" ? 'block' : 'none' }}>MR BEAST</p>
    </div>

    <p className="comments">  
        Does a countdown count as a third party service call?
            Otherwise I'll have a third party call to the weather 
        so you know if you need a rain jacket to go hunt your target &#129335;</p>
    </main>
  );
}
