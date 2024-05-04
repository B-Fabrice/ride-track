import React from 'react';
import MapWrapper from './components/map_wrapper'

function App() {
  const [distance, setDistance] = React.useState<number>(0);
  const [time, setTime] = React.useState<number>(0)
  const [nextLeg, setNextLeg] = React.useState<number>(0)
  
  return (
    <div className="App bg-white min-h-screen flex flex-col">
      <div className="flex-none bg-gradient-to-r from-cyan-400 to-lime-400">
        <div className="p-5 flex justify-between items-center">
          <div className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="current" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
          <div className="text-xl font-bold">
            <h2>Startup</h2>
          </div>
        </div>
      </div>
      <div className="grow flex flex-col">
        <div className="p-5">
          <h2 className="text-xl font-bold">Nyabugogo - Kimironko</h2>
          <p className="mt-1">Next stop: {nextLeg}</p>
          <div className="mt-1 flex">
            <p className="grow">Distance: {distance} km</p>
            <p className="grow">Time: {time} minutes</p>
          </div>
        </div>
        <div className="grow">
          <MapWrapper setDistance={setDistance} setNextLeg={setNextLeg} setTime={setTime} />
        </div>
      </div>
      <div className="flex-none bg-gradient-to-r from-cyan-400 to-lime-400 py-5">
        <div className="flex justify-around items-center text-white">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
