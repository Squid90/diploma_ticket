import React, { useState } from 'react';

const minPrice = 1000
const maxPrice = 15000

export const Filter__price: React.FC = () => {

 const [minValue, setMinValue] = useState<number>(minPrice);
 const [maxValue, setMaxValue] = useState<number>(maxPrice);

 const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     const value = Math.min(Number(event.target.value), maxValue);
     setMinValue(value);
 };

 const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     const value = Math.max(Number(event.target.value), minValue);
     setMaxValue(value);
 };

  return (
        <>
            <div className='label-price'>Стоимость</div>
            <div className='price-slider'>
              <div className='price-from-to'>
                <div className='price-from'>от</div>
                <div className='price-to'>до</div>
              </div>
              <div className='slider-container'>
                <input type='range' min={minPrice} max={maxPrice} value={minValue} className='slider-filter' onChange={handleMinChange} />
                <input type='range' min={minPrice} max={maxPrice} value={maxValue} className='slider-filter' onChange={handleMaxChange} />
                <div className='slider-fill' style={{ left: `${((minValue - minPrice) / (maxPrice - minPrice)) * 100 }%`, width: `${((maxValue - minValue) / (maxPrice - minPrice)) * 100}%` }} />
                <div className='slider-value'>
                  <div className='slider-filter-value' style={{ left: `${(minValue / maxPrice) * 100}%` }}>
                    {minValue}
                  </div>
                  <div className='slider-filter-value' style={{ left: `${(maxValue / maxPrice) * 100}%` }}>
                    {maxValue}
                  </div>
                </div>
              </div>
            </div>
        </>
  )
}
