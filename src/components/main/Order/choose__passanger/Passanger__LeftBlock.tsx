import { useState } from "react";


export const Passanger__LeftBlock: React.FC = () => {


    const [isCollapsedThere, setIsCollapsedThere] = useState<boolean>(false);
    const toggleCollapseThere = () => {
      setIsCollapsedThere(!isCollapsedThere);
    };
    const [isCollapsedBack, setIsCollapsedBack] = useState<boolean>(false);
    const toggleCollapseBack = () => {
      setIsCollapsedBack(!isCollapsedBack);
    };
    const [isCollapsedPassangers, setIsCollapsedPassangers] = useState<boolean>(false);
    const toggleCollapsePassangers = () => {
        setIsCollapsedPassangers(!isCollapsedPassangers);
    };
    
  return (
    <>
        <div className='passangers__leftBlock__detailsTrip'>
            <div className='leftBlock__detailsTrip'>Детали поездки</div>
        </div>
        <div className='passangers__leftBlock__line'></div>
        <div className='passangers__leftBlock__direction-there'>
            <div className='direction-title'>
                <div className='direction-pic'>
                <svg viewBox="-20 -10 100 100"><path d="m61 30.87-18.88-16.33a1.5 1.5 0 0 0 -2.48 1.13v7.83h-35.64a1.5 1.5 0 0 0 -1.5 1.5v14a1.5 1.5 0 0 0 1.5 1.5h35.64v7.83a1.51 1.51 0 0 0 2.48 1.13l18.88-16.33a1.49 1.49 0 0 0 0-2.26z"/></svg>
                </div>
                <div className='direction-text'>
                    Туда
                </div>
                <div className='direction-date'>
                    03/08/2025
                </div>
                <div className='direction-collapse' onClick={toggleCollapseThere} >
                    {isCollapsedThere ? '-' : '+'}
                </div>
            </div>
            <div className='collapse-block' style={{maxHeight: isCollapsedThere ? '272px' : '0px'}}>
                <div className="collapse-block_trainNumber">
                    <div className="collapse-block_trainNumberTitle">
                        № Поезда
                    </div>
                    <div className="collapse-block_Number">
                     116С
                    </div>
                </div>
                <div className="collapse-block_trainName">
                    <div className="collapse-block_trainNameTitle">
                        Название
                    </div>
                    <div className="collapse-block_Name">
                        Москва Санкт-Петербург
                    </div>
                </div>
                <div className="collapse-block_trainTrackTime">
                    09:32
                </div>
                <div className="collapse-block_trainTrack">
                    <div className="collapse-block_trainTrackDeparture">
                        11.11.2011 09-22
                    </div>
                    <div className="collapse-block_trainTrackPic">
                        -
                    </div>
                    <div className="collapse-block_trainTrackArrival">
                    12.12.2012 13-45
                    </div>
                </div>
                <div className="collapse-block_trainCities">
                    <div className="collapse-block_trainCitiesDeparture">
                        Москва Курский вокзал
                    </div>
                    <div className="collapse-block_trainCitiesArrival">
                        Санкт-Петербург Ладожский вокзал
                    </div>
                </div>
            </div>
        </div>
        <div className='passangers__leftBlock__line'></div>
        <div className='passangers__leftBlock__direction-back'>
            <div className='direction-title'>
                <div className='direction-pic'>
                    <svg viewBox="-20 -10 100 100"><path d="m60 23.5h-35.64v-7.83a1.5 1.5 0 0 0 -2.48-1.13l-18.88 16.33a1.49 1.49 0 0 0 0 2.26l18.88 16.33a1.51 1.51 0 0 0 2.48-1.13v-7.83h35.64a1.5 1.5 0 0 0 1.5-1.5v-14a1.5 1.5 0 0 0 -1.5-1.5z"/></svg>
                </div>
                <div className='direction-text'>
                    Обратно
                </div>
                <div className='direction-date'>
                    23/09/2026
                </div>
                <div className='direction-collapse' onClick={toggleCollapseBack}>
                    {isCollapsedBack ? '-' : '+'}
                </div>
            </div>
            <div className='collapse-block' style={{maxHeight: isCollapsedBack ? '272px' : '0px'}}>

            </div>
        </div>
        <div className='passangers__leftBlock__line'></div>
        <div className='passangers__leftBlock__passangers'>
            <div className='direction-title'>
                <div className='direction-pic'>
                    <svg viewBox="-20 -10 100 100"><path d="m61 30.87-18.88-16.33a1.5 1.5 0 0 0 -2.48 1.13v7.83h-35.64a1.5 1.5 0 0 0 -1.5 1.5v14a1.5 1.5 0 0 0 1.5 1.5h35.64v7.83a1.51 1.51 0 0 0 2.48 1.13l18.88-16.33a1.49 1.49 0 0 0 0-2.26z"/></svg>
                </div>
                <div className='direction-text'>
                    Пассажиры
                </div>
                <div className='direction-collapse' onClick={toggleCollapsePassangers} >
                    {isCollapsedPassangers ? '-' : '+'}
                </div>
            </div>
            <div className='collapse-block' style={{maxHeight: isCollapsedPassangers ? '272px' : '0px'}}>

            </div>
        </div>
        <div className='passangers__leftBlock__line'></div>
        <div className='passangers__leftBlock__totalCost'>
            <div className="leftBlock__totalCost_title">
                ИТОГ
            </div>
            <div className="leftBlock__totalCost_price">
                10 598
            </div>
            <div className="leftBlock__totalCost_price">
                P
            </div>
        </div>
    </>
  )
}
