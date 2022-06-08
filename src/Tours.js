import React from 'react';
import Tour from './Tour';
const Tours = (props) => {
  return <main>{props.tours.map((tour) => {
    return <Tour key={tour.id} tour={tour} setTours={props.setTours} tours={props.tours}></Tour>
  })}
  </main>;
};

export default Tours;
