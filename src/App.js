import React from 'react';
import './App.css';
import Card from './Components/Card.js'

function App() {
  return ( 
    <div className="App">
      <Card
        title = 'Septoria tritici'
        imageUrl = 'https://cdn-icons-png.flaticon.com/512/188/188333.png'
        bodyTitle = 'No action'
        body ='Infection not likely right now'
        datesTitle = '5 Day disease forcast'
        dates = 'dates'
        />
    </div>
  );
}

export default App;
