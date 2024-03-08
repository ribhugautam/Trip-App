import data from './data';
import Tour from './components/tour';
import React, {useState} from 'react';

function App() {

  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTour = tours.filter(tour => tour.id !== id);
    setTours(newTour);
  }

  if(tours.length === 0){
    return(
      <div className='refresh flex flex-col gap-2 items-center justify-center h-[100vh]'>
        <h2 className='font-bold text-2xl'>No Tours Left</h2>
        <button className='px-10 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition-all duration-200 font-semibold' onClick={() => setTours(data)}>Refresh</button>
      </div>
    )
  }

  return (
    <div className='App flex flex-col justify-center items-center bg-slate-100 p-10 gap-3'>
       <h1 className='heading text-5xl shadow-lg bg-white border-[5px] rounded-lg border-dashed text-center border-red-500 p-4 font-bold'>TRIP PLAN</h1>
       <Tour className='mx-auto' tours = {tours} removeTour = {removeTour}></Tour>
    </div>
  );
}

export default App;
