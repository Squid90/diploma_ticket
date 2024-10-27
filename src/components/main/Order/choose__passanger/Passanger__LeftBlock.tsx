import { useState } from 'react';
import { data_ticket } from '../data_order/data_order';
import { data_trainCard } from '../choose__train/data__train/data__trainCard';
import moment from 'moment';


export const Passanger__LeftBlock: React.FC = () => {
    const selectedInfo = data_ticket[0];
    const currentTrain = data_trainCard[Number(selectedInfo.trainIdSelect) - 1]
    //console.log (currentTrain);

    const [isCollapsedThere, setIsCollapsedThere] = useState<boolean>(true);
    const toggleCollapseThere = () => {
      setIsCollapsedThere(!isCollapsedThere);
    };
    const [isCollapsedBack, setIsCollapsedBack] = useState<boolean>(true);
    const toggleCollapseBack = () => {
      setIsCollapsedBack(!isCollapsedBack);
    };
    const [isCollapsedPassangers, setIsCollapsedPassangers] = useState<boolean>(true);
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
            <div className='passangers__leftBlock__direction-title'>
                <div className='passangers__leftBlock__pic-text-date'>
                    <div className='passangers__leftBlock__direction-pic'>
                        <svg viewBox='-20 -10 100 100'><path d='m61 30.87-18.88-16.33a1.5 1.5 0 0 0 -2.48 1.13v7.83h-35.64a1.5 1.5 0 0 0 -1.5 1.5v14a1.5 1.5 0 0 0 1.5 1.5h35.64v7.83a1.51 1.51 0 0 0 2.48 1.13l18.88-16.33a1.49 1.49 0 0 0 0-2.26z'/></svg>
                    </div>
                    <div className='passangers__leftBlock__direction-text'>
                        Туда
                    </div>
                    <div className='passangers__leftBlock__direction-date'>
                        {moment(currentTrain.departureTimeThere).format('DD/MM/YYYY')}
                    </div>
                </div>
                <div className='passangers__leftBlock__direction-collapse' onClick={toggleCollapseThere} >
                    {isCollapsedThere ? '-' : '+'}
                </div>
            </div>
            <div className='passangers__leftBlock__collapse-block' style={{maxHeight: isCollapsedThere ? '350px' : '0px'}}>
                <div className='collapse-block_block'>
                    <div className='collapse-block_leftText collapse_trainNumberTitle'>
                        № Поезда
                    </div>
                    <div className='collapse-block_rightText collapse_Number'>
                        {currentTrain.trainNumber}
                    </div>
                </div>
                <div className='collapse-block_block'>
                    <div className='collapse-block_leftText collapse_trainNameTitle'>
                        Название
                    </div>
                    <div className='collapse-block_rightText collapse_Name'>
                        {currentTrain.trainTrackFrom} <p>{currentTrain.trainTrackTo}</p>
                    </div>
                </div>
                <div className='collapse-block_leftText collapse_trainTrackTime collapse-block_block'>
                    {currentTrain.timeTrackThere}
                </div>
                <div className='collapse-block_block'>
                    <div className='collapse-block_leftText collapse_trainTrackDeparture'>
                        <p className='collapse-block_time'>{moment(currentTrain.departureTimeThere).format('LT')}</p>{moment(currentTrain.departureTimeThere).format('DD/MM/YYYY')}
                    </div>
                    <div className='collapse-block_trainTrackPic'>
                        <svg viewBox='0 0 60 60' fill='#FFA800'><path d='m61 30.87-18.88-16.33a1.5 1.5 0 0 0 -2.48 1.13v7.83h-35.64a1.5 1.5 0 0 0 -1.5 1.5v14a1.5 1.5 0 0 0 1.5 1.5h35.64v7.83a1.51 1.51 0 0 0 2.48 1.13l18.88-16.33a1.49 1.49 0 0 0 0-2.26z'/></svg>
                    </div>
                    <div className='collapse-block_rightText collapse_trainTrackArrival'>
                        <p className='collapse-block_time'>{moment(currentTrain.arrivalTimeThere).format('LT')}</p>{moment(currentTrain.arrivalTimeThere).format('DD/MM/YYYY')}
                    </div>
                </div>
                <div className='collapse-block_block'>
                    <div className='collapse-block_leftText collapse_trainCities'>
                        {currentTrain.departureCityThere} <p>{currentTrain.departureStationThere}</p>
                    </div>
                    <div className='collapse-block_rightText collapse_trainCities'>
                        {currentTrain.arrivalCityThere} <p>{currentTrain.arrivalStationThere}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='passangers__leftBlock__line'></div>
        <div className='passangers__leftBlock__direction-back'>
            <div className='passangers__leftBlock__direction-title'>
                <div className='passangers__leftBlock__pic-text-date'>
                    <div className='passangers__leftBlock__direction-pic'>
                        <svg viewBox='-20 -10 100 100'><path d='m60 23.5h-35.64v-7.83a1.5 1.5 0 0 0 -2.48-1.13l-18.88 16.33a1.49 1.49 0 0 0 0 2.26l18.88 16.33a1.51 1.51 0 0 0 2.48-1.13v-7.83h35.64a1.5 1.5 0 0 0 1.5-1.5v-14a1.5 1.5 0 0 0 -1.5-1.5z'/></svg>
                    </div>
                    <div className='passangers__leftBlock__direction-text'>
                        Обратно
                    </div>
                    <div className='passangers__leftBlock__direction-date'>
                        {moment(currentTrain.departureTimeBack).format('DD/MM/YYYY')}
                    </div>
                </div>
                <div className='passangers__leftBlock__direction-collapse' onClick={toggleCollapseBack}>
                    {isCollapsedBack ? '-' : '+'}
                </div>
            </div>
            <div className='passangers__leftBlock__collapse-block' style={{maxHeight: isCollapsedBack ? '350px' : '0px'}}>
                <div className='collapse-block_block'>
                    <div className='collapse-block_leftText collapse_trainNumberTitle'>
                        № Поезда
                    </div>
                    <div className='collapse-block_rightText collapse_Number'>
                        {currentTrain.trainNumber}
                    </div>
                </div>
                <div className='collapse-block_block'>
                    <div className='collapse-block_leftText collapse_trainNameTitle'>
                        Название
                    </div>
                    <div className='collapse-block_rightText collapse_Name'>
                        {currentTrain.trainTrackTo}<p>{currentTrain.trainTrackFrom}</p>
                    </div>
                </div>
                <div className='collapse-block_leftText collapse_trainTrackTime collapse-block_block'>
                    {currentTrain.timeTrackBack}
                </div>
                <div className='collapse-block_block'>
                    <div className='collapse-block_leftText collapse_trainTrackDeparture'>
                        <p className='collapse-block_time'>{moment(currentTrain.departureTimeBack).format('LT')}</p>{moment(currentTrain.departureTimeBack).format('DD/MM/YYYY')}
                    </div>
                    <div className='collapse-block_trainTrackPic'>
                        <svg viewBox='0 0 60 60' fill='#FFA800'><path d='m60 23.5h-35.64v-7.83a1.5 1.5 0 0 0 -2.48-1.13l-18.88 16.33a1.49 1.49 0 0 0 0 2.26l18.88 16.33a1.51 1.51 0 0 0 2.48-1.13v-7.83h35.64a1.5 1.5 0 0 0 1.5-1.5v-14a1.5 1.5 0 0 0 -1.5-1.5z'/></svg>
                    </div>
                    <div className='collapse-block_rightText collapse_trainTrackArrival'>
                        <p className='collapse-block_time'>{moment(currentTrain.arrivalTimeBack).format('LT')}</p>{moment(currentTrain.arrivalTimeBack).format('DD/MM/YYYY')}
                    </div>
                </div>
                <div className='collapse-block_block'>
                    <div className='collapse-block_leftText collapse_trainCities'>
                        {currentTrain.departureCityBack} <p>{currentTrain.departureStationBack}</p>
                    </div>
                    <div className='collapse-block_rightText collapse_trainCities'>
                        {currentTrain.arrivalCityBack} <p>{currentTrain.arrivalStationBack}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='passangers__leftBlock__line'></div>
        <div className='passangers__leftBlock__passangers'>
            <div className='passangers__leftBlock__direction-title'>
                <div className='passangers__leftBlock__pic'>
                    <svg viewBox="0 0 25 25" fill='#FFA800'><path d="M16.428,15.744c-0.159-0.052-1.164-0.505-0.536-2.414h-0.009c1.637-1.686,2.888-4.399,2.888-7.07 c0-4.107-2.731-6.26-5.905-6.26C9.69,0,6.974,2.152,6.974,6.26c0,2.682,1.244,5.406,2.891,7.088 c0.642,1.684-0.506,2.309-0.746,2.396c-3.324,1.203-7.224,3.394-7.224,5.557c0,0.584,0,0.23,0,0.811 c0,2.947,5.714,3.617,11.002,3.617c5.296,0,10.938-0.67,10.938-3.617c0-0.58,0-0.227,0-0.811 C23.835,19.073,19.916,16.899,16.428,15.744z"/></svg>
                </div>
                <div className='passangers__leftBlock__direction-text'>
                    Пассажиры
                </div>
                <div className='passangers__leftBlock__direction-collapse' onClick={toggleCollapsePassangers} >
                    {isCollapsedPassangers ? '-' : '+'}
                </div>
            </div>
            <div className='passangers__leftBlock__collapse-block' style={{maxHeight: isCollapsedPassangers ? '350px' : '0px'}}>
                <div className='collapse-block__passangers'>
                    <div className='collapse-block__passanger'>1 Взрослый</div>
                    <div className='collapse-block__ticketCost'>{selectedInfo.ticketPriceSelect} <span>Р</span></div>
                </div>
            </div>
        </div>
        <div className='passangers__leftBlock__line'></div>
        <div className='passangers__leftBlock__totalCost'>
            <div className='leftBlock__totalCost_title'>
                ИТОГ
            </div>
            <div className='leftBlock__totalCost_price'>
                {selectedInfo.ticketPriceSelect} <span>Р</span>
            </div>
        </div>
    </>
  )
}
