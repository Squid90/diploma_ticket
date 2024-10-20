import React from 'react'

export interface LastTicketItemProp {
    id: string;
    imgOptionFirst: string;
    viewBoxOptionFirst: string;
    imgOptionSecond: string;
    viewBoxOptionSecond: string;
    imgOptionThird: string;
    viewBoxOptionThird: string;
    dapartureCity: string;
    arrivalCity: string;
    dapartureStation: string;
    arrivalStation: string;
    price: string;
    imgCurrency: string;
    viewBoxCurrency: string;
}

export const LastTicket__item: React.FC<LastTicketItemProp> = (item) => {
    const { imgOptionFirst,
            imgOptionSecond,
            imgOptionThird,
            viewBoxOptionFirst,
            viewBoxOptionSecond,
            viewBoxOptionThird,
            dapartureCity,
            arrivalCity,
            dapartureStation,
            arrivalStation,
            price,
            imgCurrency,
            viewBoxCurrency
        } = item
  return (
    
    <>
        <div className='lastTicket__item'>
            <div className='lastTicket__cities'>
                <div className='lastTicket__dapartureCity'>
                    {dapartureCity}
                </div>
                <div className='lastTicket__arrivalCity'>
                    {arrivalCity}
                </div>
            </div>
            <div className='lastTicket__stations'>
                <div className='lastTicket__dapartureStation'>
                    {dapartureStation}
                </div>
                <div className='lastTicket__arrivalStation'>
                    {arrivalStation}
                </div>
            </div>
            <div className='lastTicket__info'>
                <div className='lastTicket__options'>
                    <svg viewBox={viewBoxOptionFirst} fill='#E5E5E5' ><path d={imgOptionFirst} stroke='#E5E5E5'></path></svg>
                    <svg viewBox={viewBoxOptionSecond} fill='#E5E5E5' ><path d={imgOptionSecond} stroke='#E5E5E5'></path></svg>
                    <svg viewBox={viewBoxOptionThird} fill='#E5E5E5' ><path d={imgOptionThird} stroke='#E5E5E5'></path></svg>
                </div>
                <div className='lastTicket__priceInfo'>
                    от
                    <div className='lastTicket__price'>{price}</div>
                    <div className='lastTicket__currency'>
                        <svg viewBox={viewBoxCurrency} fill='#928F94' ><path d={imgCurrency} stroke='#928F94'></path></svg>
                    </div>
                </div>
            </div>
        </div>
    </>

  )
}