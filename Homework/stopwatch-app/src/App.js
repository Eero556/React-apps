
import './App.css';
import React, { useState, useEffect } from 'react';
function App() {
  // is stopwatch running
  const [isOn, setIsOn] = useState(false);
  // stopwatch timer
  const [timer, setTimer] = useState(0);

  const reset = () => {
    setIsOn(false);
    setTimer(0);
  };

  useEffect(() => {

    let interval;
    if (isOn) {
      interval = setInterval(() => setTimer(timer => timer + 1), 1000);
    }
    // clean up
    return () => clearInterval(interval);
  }, [isOn, timer]);
  // only render if isOn or timer is different than prev state



  // Better way to use conditional renderin imo
  return (
    <div className="App">
      
      <div className='stopwatch'>
      <p>
        {timer}
      </p>


        {isOn ? <button className='stopbutton' type="button" onClick={() => setIsOn(false)}>Stop</button> : <button className='startbutton' type="button" onClick={() => setIsOn(true)}>Start</button>}
        <button className='resetbutton' onClick={reset} type="button">
          Reset
        </button>
      </div>

    </div>
  );
}

export default App;
