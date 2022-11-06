import React from 'react';
import './Card.css';
import Dates from './Dates.js'

function Card({title,imageUrl,bodyTitle,body}) {
  return (
    <div className="card-container">

      <div className='card-title'>
        <b>{title}</b>
      </div>

      <div className='card-body-container'>
        <div className='card-body-image'>
          <img src={imageUrl} alt=''/>
        </div>
        <div className='body-container'>
              <b>{bodyTitle}</b>
              {body}
        </div>
      </div>
       
       <div className='card-date-title'>
         <b>5 Day disease forcast</b>
       </div>
       <div>
       <Dates
            colors = 'green'
            dates = 'Today'
         />
         <Dates
            colors = 'green'
            dates = '08 Nov' 
         />
         <Dates
            colors = 'green'
            dates = '09 Nov'
         />
         <Dates
            colors = 'orange' 
            dates = '10 Nov'
         />
         <Dates
            colors = 'green'
            dates = '11 Nov'
         />
       </div>

    </div>
  );
}

export default Card;
