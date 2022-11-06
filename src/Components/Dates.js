import React from 'react';
import './Dates.css';

function Dates({colors,dates}) {
  return (
    <div className="card-dates">

        <span className='card-date'>
           <div className='card-date-dot' style={{backgroundColor:colors}}></div>
           {dates}
        </span>

    </div> 
  );
}

export default Dates;