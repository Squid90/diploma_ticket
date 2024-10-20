import { minTime, maxTime, timeToMinutes, minutesToTime } from "./choose__filter";
import React, { useState } from 'react';

export const Filter__direction__there: React.FC = () => {
      
    const minRange = timeToMinutes(minTime);
    const maxRange = timeToMinutes(maxTime);
    const [thereDepartureTimeMin, setThereDepartureTimeMin] = useState<number>(minRange);
    const [thereDepartureTimeMax, setThereDepartureTimeMax] = useState<number>(maxRange);
    const [thereArrivalTimeMin, setThereArrivalTimeMin] = useState<number>(minRange);
    const [thereArrivalTimeMax, setThereArrivalTimeMax] = useState<number>(maxRange);
    
    const handleThereDepartureMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(Number(event.target.value), thereDepartureTimeMax);
        setThereDepartureTimeMin(value);
    };
    const handleThereDepartureMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = Math.max(Number(event.target.value), thereDepartureTimeMin);
      setThereDepartureTimeMax(value);
    };
    
    const handleThereArrivalMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(Number(event.target.value), thereArrivalTimeMax);
        setThereArrivalTimeMin(value);
    };
    const handleThereArrivalMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(Number(event.target.value), thereArrivalTimeMin);
        setThereArrivalTimeMax(value);
    };
    
    const [isCollapsedThere, setIsCollapsedThere] = useState<boolean>(false);
    const toggleCollapseThere = () => {
      setIsCollapsedThere(!isCollapsedThere);
    };
    

  return (
        <>
            <div className='direction-title'>
              <div className='direction-pic'>
              <svg viewBox="-20 -10 100 100"><path d="m61 30.87-18.88-16.33a1.5 1.5 0 0 0 -2.48 1.13v7.83h-35.64a1.5 1.5 0 0 0 -1.5 1.5v14a1.5 1.5 0 0 0 1.5 1.5h35.64v7.83a1.51 1.51 0 0 0 2.48 1.13l18.88-16.33a1.49 1.49 0 0 0 0-2.26z"/></svg>
              </div>
              <div className='direction-text'>
                Туда
              </div>
              <div className='direction-collapse' onClick={toggleCollapseThere} >
                {isCollapsedThere ? '-' : '+'}
              </div>
            </div>
            <div className='collapse-block' style={{maxHeight: isCollapsedThere ? '272px' : '0px'}}>
              <div className='departureTime'>
                <div className='time-title left'>Время отбытия</div>
                <div className='slider-container time-container'>
                  <input type='range' min={minRange} max={maxRange} value={thereDepartureTimeMin} className='slider-filter slider-time' onChange={handleThereDepartureMinChange} />
                  <input type='range' min={minRange} max={maxRange} value={thereDepartureTimeMax} className='slider-filter slider-time' onChange={handleThereDepartureMaxChange} />
                  <div className='slider-fill time-slider-fill' style={{ 
                    left: `${((thereDepartureTimeMin - minRange) / (maxRange - minRange)) * 100}%`,
                    right: `${100 - ((thereDepartureTimeMax - minRange) / (maxRange - minRange)) * 100}%`,
                  }} />
                  <div className='slider-value'>
                    <div className='slider-filter-value' style={{ left: `${(thereDepartureTimeMin / maxRange) * 100 + 10 }%` }}>
                      {minutesToTime(thereDepartureTimeMin)}
                    </div>
                    <div className='slider-filter-value' style={{ left: `${(thereDepartureTimeMax / maxRange) * 100}%` }}>
                      {minutesToTime(thereDepartureTimeMax)}
                    </div>
                  </div>
                </div>
              </div>
              <div className='arrivalTime'>
                <div className='time-title right'>Время прибытия</div>
                <div className='slider-container time-container'>
                  <input type='range' min={minRange} max={maxRange} value={thereArrivalTimeMin} className='slider-filter slider-time' onChange={handleThereArrivalMinChange} />
                  <input type='range' min={minRange} max={maxRange} value={thereArrivalTimeMax} className='slider-filter slider-time' onChange={handleThereArrivalMaxChange} />
                  <div className='slider-fill time-slider-fill' style={{ 
                    left: `${((thereArrivalTimeMin - minRange) / (maxRange - minRange)) * 100}%`,
                    right: `${100 - ((thereArrivalTimeMax - minRange) / (maxRange - minRange)) * 100}%`,
                  }} />
                  <div className='slider-value'>
                    <div className='slider-filter-value' style={{ left: `${(thereArrivalTimeMin / maxRange) * 100 + 10 }%` }}>
                      {minutesToTime(thereArrivalTimeMin)}
                    </div>
                    <div className='slider-filter-value' style={{ left: `${(thereArrivalTimeMax / maxRange) * 100}%` }}>
                      {minutesToTime(thereArrivalTimeMax)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </>
  )
}
export { minutesToTime };

