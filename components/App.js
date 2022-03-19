import React, { Component, useState } from 'react';
import moment from 'moment';

const App =() => {
const [timeString, settimeString] = useState(()=>{
  let currDate = new Date()
  return currDate.toDateString()
})
    return (
      <div>
        <h1>Sample Application</h1>
        <p>Current date and time is {timeString}</p>
      </div>
    );
  

}

export default App;
