import React, { useState } from 'react';

const Tour = (props) => {
  const [readMore, setReadMore] = useState(false);
  const deleteTour = () =>{
    const tours = props.tours.filter(tour => tour.id !== props.tour.id);
    props.setTours(tours);
  }
  return <section className='single-tour'>
    <img src={props.tour.image} alt={props.tour.name} />
    <div className='tour-info'>
        <h4>{props.tour.name}</h4>
        <span className='tour-price'>{props.tour.price} $</span>
    </div>
    <footer >{  }...
      <button onClick={()=>setReadMore(!readMore)}>{!readMore? "read more" : "show less"}</button>
    </footer>
    <button className='delete-btn' onClick={deleteTour}>not interested</button>
  </section>;
};

export default Tour;
