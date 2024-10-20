import { minTime, maxTime, timeToMinutes, minutesToTime } from "./choose__filter";
import React, { useState } from 'react';

export const Filter__direction__back: React.FC = () => {

    const minRange = timeToMinutes(minTime);
    const maxRange = timeToMinutes(maxTime);
    const [backDepartureTimeMin, setbackDepartureTimeMin] = useState<number>(minRange);
    const [backDepartureTimeMax, setbackDepartureTimeMax] = useState<number>(maxRange);
    const [backArrivalTimeMin, setbackArrivalTimeMin] = useState<number>(minRange);
    const [backArrivalTimeMax, setbackArrivalTimeMax] = useState<number>(maxRange);
    
    const handleBackDepartureMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(Number(event.target.value), backDepartureTimeMax);
        setbackDepartureTimeMin(value);
    };
    const handleBackDepartureMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = Math.max(Number(event.target.value), backDepartureTimeMin);
      setbackDepartureTimeMax(value);
    };
    
    const handleBackArrivalMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(Number(event.target.value), backArrivalTimeMax);
        setbackArrivalTimeMin(value);
    };
    const handleBackArrivalMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(Number(event.target.value), backArrivalTimeMin);
        setbackArrivalTimeMax(value);
    };

    const [isCollapsedBack, setIsCollapsedBack] = useState<boolean>(false);
    const toggleCollapseBack = () => {
      setIsCollapsedBack(!isCollapsedBack);
    };

  return (
    <>
        <div className='direction-title'>
            <div className='direction-pic'>
            <svg viewBox="-20 -10 100 100"><path d="m60 23.5h-35.64v-7.83a1.5 1.5 0 0 0 -2.48-1.13l-18.88 16.33a1.49 1.49 0 0 0 0 2.26l18.88 16.33a1.51 1.51 0 0 0 2.48-1.13v-7.83h35.64a1.5 1.5 0 0 0 1.5-1.5v-14a1.5 1.5 0 0 0 -1.5-1.5z"/></svg>
            </div>
            <div className='direction-text'>
                Обратно
            </div>
            <div className='direction-collapse' onClick={toggleCollapseBack}>
                {isCollapsedBack ? '-' : '+'}
            </div>
        </div>
        <div className='collapse-block' style={{maxHeight: isCollapsedBack ? '272px' : '0px'}}>
            <div className='departureTime'>
                <div className='time-title left'>Время отбытия</div>
                <div className='slider-container time-container'>
                <input type='range' min={minRange} max={maxRange} value={backDepartureTimeMin} className='slider-filter slider-time' onChange={handleBackDepartureMinChange} />
                <input type='range' min={minRange} max={maxRange} value={backDepartureTimeMax} className='slider-filter slider-time' onChange={handleBackDepartureMaxChange} />
                <div className='slider-fill time-slider-fill' style={{ 
                    left: `${((backDepartureTimeMin - minRange) / (maxRange - minRange)) * 100}%`,
                    right: `${100 - ((backDepartureTimeMax - minRange) / (maxRange - minRange)) * 100}%`,
                }} />
                <div className='slider-value'>
                    <div className='slider-filter-value' style={{ left: `${(backDepartureTimeMin / maxRange) * 100 + 10 }%` }}>
                    {minutesToTime(backDepartureTimeMin)}
                    </div>
                    <div className='slider-filter-value' style={{ left: `${(backDepartureTimeMax / maxRange) * 100}%` }}>
                    {minutesToTime(backDepartureTimeMax)}
                    </div>
                </div>
                </div>
            </div>
            <div className='arrivalTime'>
                <div className='time-title right'>Время прибытия</div>
                <div className='slider-container time-container'>
                <input type='range' min={minRange} max={maxRange} value={backArrivalTimeMin} className='slider-filter slider-time' onChange={handleBackArrivalMinChange} />
                <input type='range' min={minRange} max={maxRange} value={backArrivalTimeMax} className='slider-filter slider-time' onChange={handleBackArrivalMaxChange} />
                <div className='slider-fill time-slider-fill' style={{ 
                    left: `${((backArrivalTimeMin - minRange) / (maxRange - minRange)) * 100}%`,
                    right: `${100 - ((backArrivalTimeMax - minRange) / (maxRange - minRange)) * 100}%`,
                }} />
                <div className='slider-value'>
                    <div className='slider-filter-value' style={{ left: `${(backArrivalTimeMin / maxRange) * 100 + 10 }%` }}>
                    {minutesToTime(backArrivalTimeMin)}
                    </div>
                    <div className='slider-filter-value' style={{ left: `${(backArrivalTimeMax / maxRange) * 100}%` }}>
                    {minutesToTime(backArrivalTimeMax)}
                    </div>
                </div>
                </div>
            </div>
        </div> 
    </>
  )
}
