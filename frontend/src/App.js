import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch('http://localhost:5000/api/test')
    .then(response => response.json())
    .then(data => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <h1>PokéProgress</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;