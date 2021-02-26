import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState({ hits: [] });

  useEffect(async () => {
    const result = await axios(
      'https://mfa30ao9w8.execute-api.us-east-1.amazonaws.com/dev/'
    );

    console.log(result);
  });
  return <div className='App'></div>;
}

export default App;
