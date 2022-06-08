import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([]);
  const getTours = async () => {
    try {
      const tourUrl = await fetch(url);
      const response = await tourUrl.json();
      setTours(response);
      setLoading(false)

    } catch (error) {
      console.log(error);
    }

  }
  useEffect(() => {
    getTours();
  }, [])

  return <>
    <h2 className='title'>our tours</h2>
    <div className='underline'></div>
    {loading ? <Loading></Loading> : <Tours tours={tours} setTours={setTours}></Tours>}
    {tours.length === 0 && <button className='btn' onClick={() => getTours()}>refresh</button>}
  </>
}

export default App
