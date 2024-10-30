import React from 'react';

export function Home() {
  return (   
    <main role="main">
        <div className="countdown">
        <span className="unit">YOU HAVE</span><br />
        <span className="time">5 </span><span className="unit">days </span><span className="time">14 </span><span className="unit">hours </span><span className="time">48 </span><span className="unit">seconds</span><br />
        <span className="unit">TO COMPLETE THIS WEEK'S CONTRACT</span>
        </div>
    <div className="target">
        <img className="target_photo" src="target_placeholder.jpg" />
        <p>TOBIAS RIEPER</p>
    </div>

    <p className="comments">
        Does a countdown count as a third party service call?
            Otherwise I'll have a third party call to the weather 
        so you know if you need a rain jacket to go hunt your target &#129335</p>
    </main>
  );
}
