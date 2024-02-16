import Indicator from './components/Indicator'
import { CiSearch } from "react-icons/ci";
import './App.css'
import { useState } from 'react';
import { useEffect } from 'react';
import WeatherIcon from './components/WeatherIcon';
import Loader from './components/Loader';

function App() {
  const [searchBar,setSearchBar]=useState('')
  const [city,setCity]=useState('');
  const[data,setData]=useState(null);
  const [error,setError]=useState(null);
  const [isLoading,setIsLoading]=useState(false);

  useEffect(() => {
    if (city) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d8e88834ba817aa331676e4cae7b5ef5&units=metric`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(responseObj => {
          setData(responseObj);
          setIsLoading(false);
          setError(null);
        })
        .catch(() => {
          setIsLoading(false);
          setError('Data not found');
        });
    }
  }, [city]);
  
  const handleChange = (e) => {
    setSearchBar(e.target.value);
  };
  const handleClick=()=>{
    setCity(searchBar);
    setIsLoading(true);
  }
  return (
    <div className='bg-slate-700 m-0 p-0 flex justify-center'>
      <div className='customContainer h-fit w-2/6 rounded-2xl p-3 mt-20 flex-col'>
      <div className="flex h-14 m-5">
            <input value={searchBar} onChange={handleChange} placeholder="Enter City Name" type="text" className="bg-slate-200 focus:outline-none rounded-full w-4/5 mr-3 pl-5 text-xl placeholder-gray-500" />
            <button onClick={handleClick} disabled={searchBar===''?true:false} className="h-14 w-14 bg-slate-200 rounded-full flex justify-center items-center">
            <CiSearch className="text-2xl text-slate-500" />
            </button  >
        </div>
        {isLoading&& <Loader />}
       {data&& !isLoading &&
       <><WeatherIcon condition={data.weather[0].main} />
        <h6 className='text-white text-l'>{data.weather[0].main}</h6>
        <h6 className='text-white text-4xl font-bold'>{`${data.main.temp}°C`}</h6>
        <h6 className='text-white text-2xl font-bold'>{data.name}</h6></> } 
        {error&& <h2 className='text-white'>Data not found!</h2>}
        {!isLoading && <Indicator windSpeed={data ? data.wind.speed : null} humidity={data ? data.main.humidity : null} />}

      </div>
    </div>
  )
}

export default App
