import React, { useState } from 'react';

export const Filter__date: React.FC = () =>  {
  const [departureDate, setDepartureDate] = useState<string>('');
  const [returnDate, setReturnDate] = useState<string>('');
 
  return (
    <>
        <div className='label-selection'>
            Дата поездки:
        </div>
        <input type='date' className='date-selection' value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
        <div className='label-selection'>
            Дата возвращения:
        </div>
        <input type='date' className='date-selection' value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
    </>
  )
}
