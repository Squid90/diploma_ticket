// import { Link } from 'react-router-dom'
// to='/choosetrain/chooseplace/choosepassangers'
import './Choose_place.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { data_trainCard } from '../choose__train/data__train/data__trainCard';
import { TrainCard__trainNumber } from '../choose__train/TrainList/trainCard__trainNumber';
import moment from 'moment';
import { useState } from 'react';
import { data_ticket } from '../data_order/data_order';

const seatSeats = Array.from({ length: 62 }, (_, index) => ({
  number: index + 1,
}));
const plazcartSeats = Array.from({ length: 48 }, (_, index) => ({
  number: index + 1,
}));
const coupeSeats = Array.from({ length: 32 }, (_, index) => ({
  number: index + 1,
}));
const luxSeats = Array.from({ length: 16 }, (_, index) => ({
  number: index + 1,
}));

const amountAdultTickets = 2;


export const Choose__place__mainSide: React.FC = () => {

  const location = useLocation();
  const id = location.state;
  const currentTrain = data_trainCard[id-1];

  document.querySelector('.bar2')?.classList.remove('active__bar');

  let idSeatType = currentTrain.dataTrainType.find(obj => obj.trainType === 'Сидячий');
  let idPlazcartType = currentTrain.dataTrainType.find(obj => obj.trainType === 'Плацкарт');
  let idCoupeType = currentTrain.dataTrainType.find(obj => obj.trainType === 'Купе');
  let idLuxType = currentTrain.dataTrainType.find(obj => obj.trainType === 'Люкс');



  const navigate = useNavigate();
  const handleReturnToTrains = () => {
    navigate('/choosetrain');
    window.scrollTo({
      top: 592,
      left: 0,
      behavior: 'smooth',
    });
  };
  const handleSelectPassanger = (selectedSeatThere: any, selectedSeatBack: any) => {
    navigate('/choosetrain/chooseplace/choosepassangers', { state: selectedSeatThere});
    
    window.scrollTo({
      top: 592,
      left: 0,
      behavior: 'smooth',
    });

    const updatedDataTicket = data_ticket.map(ticket => ({
      ...ticket,
      numberSeatThereSelect: selectedSeatThere,
      numberSeatBackSelect: selectedSeatBack
    }));
  
    data_ticket.splice(0, 1, updatedDataTicket[0]);

  };
  
  const [selectedSeatThere, setSelectedSeatThere] = useState<number | null>(null);
  const handleSeatThereClick = (seatNumber: number) => {
    setSelectedSeatThere(selectedSeatThere === seatNumber ? null : seatNumber);
  };
  

  const [selectedSeatBack, setSelectedSeatBack] = useState<number | null>(null);
  const handleSeatBackClick = (seatNumber: number) => {
    setSelectedSeatBack(selectedSeatBack === seatNumber ? null : seatNumber);
  };

  const handleChangeTypeWagonThere = () => {
    document.querySelectorAll('.places__typeWagon__pictureElm').forEach((element,index,item)=>{
      element.addEventListener('click',()=>{
        item.forEach((el)=> {
          const childTxt = el.querySelector('.places__typeWagon__pictureText');
          const childSvg = el.querySelector('.places__typeWagon__svg');
          childTxt?.classList.remove('typeWagonActive');
          childSvg?.classList.remove('typeWagonActive');
        });
        const childTxtCurrent = element.querySelector('.places__typeWagon__pictureText');
        const childSvgCurrent = element.querySelector('.places__typeWagon__svg');
        childTxtCurrent?.classList.add('typeWagonActive');
        childSvgCurrent?.classList.add('typeWagonActive');

        const viewBlockSeat = document.querySelector('.viewBlock__seat');
        const viewBlockPlazcart = document.querySelector('.viewBlock__plazcart');
        const viewBlockCoupe = document.querySelector('.viewBlock__coupe');
        const viewBlockLux = document.querySelector('.viewBlock__lux');
        

        switch(childTxtCurrent?.textContent) {
          case 'Сидячий':  
            viewBlockSeat?.classList.remove('hidden');
            viewBlockPlazcart?.classList.add('hidden');
            viewBlockCoupe?.classList.add('hidden');
            viewBlockLux?.classList.add('hidden');
            break
          case 'Плацкарт':  
            viewBlockSeat?.classList.add('hidden');
            viewBlockPlazcart?.classList.remove('hidden');
            viewBlockCoupe?.classList.add('hidden');
            viewBlockLux?.classList.add('hidden');
            break
          case 'Купе':  
            viewBlockSeat?.classList.add('hidden');
            viewBlockPlazcart?.classList.add('hidden');
            viewBlockCoupe?.classList.remove('hidden');
            viewBlockLux?.classList.add('hidden');
            break
          case 'Люкс':
            viewBlockSeat?.classList.add('hidden');
            viewBlockPlazcart?.classList.add('hidden');
            viewBlockCoupe?.classList.add('hidden');
            viewBlockLux?.classList.remove('hidden');
            break
          default:
            break
        };

      })
      element.removeEventListener('click', () => {});
    })
  };

  const handleChangeTypeWagonBack = () => {
    document.querySelectorAll('.places__typeWagon__pictureElm_Back').forEach((element,index,item)=>{
      element.addEventListener('click',()=>{
        item.forEach((el)=> {
          const childTxt = el.querySelector('.places__typeWagon__pictureText_Back');
          const childSvg = el.querySelector('.places__typeWagon__svg_Back');
          childTxt?.classList.remove('typeWagonActive');
          childSvg?.classList.remove('typeWagonActive');
        });
        const childTxtCurrent = element.querySelector('.places__typeWagon__pictureText_Back');
        const childSvgCurrent = element.querySelector('.places__typeWagon__svg_Back');
        childTxtCurrent?.classList.add('typeWagonActive');
        childSvgCurrent?.classList.add('typeWagonActive');

        const viewBlockSeat = document.querySelector('.viewBlock__seat_Back');
        const viewBlockPlazcart = document.querySelector('.viewBlock__plazcart_Back');
        const viewBlockCoupe = document.querySelector('.viewBlock__coupe_Back');
        const viewBlockLux = document.querySelector('.viewBlock__lux_Back');
        

        switch(childTxtCurrent?.textContent) {
          case 'Сидячий':  
            viewBlockSeat?.classList.remove('hidden');
            viewBlockPlazcart?.classList.add('hidden');
            viewBlockCoupe?.classList.add('hidden');
            viewBlockLux?.classList.add('hidden');
            break
          case 'Плацкарт':  
            viewBlockSeat?.classList.add('hidden');
            viewBlockPlazcart?.classList.remove('hidden');
            viewBlockCoupe?.classList.add('hidden');
            viewBlockLux?.classList.add('hidden');
            break
          case 'Купе':  
            viewBlockSeat?.classList.add('hidden');
            viewBlockPlazcart?.classList.add('hidden');
            viewBlockCoupe?.classList.remove('hidden');
            viewBlockLux?.classList.add('hidden');
            break
          case 'Люкс':
            viewBlockSeat?.classList.add('hidden');
            viewBlockPlazcart?.classList.add('hidden');
            viewBlockCoupe?.classList.add('hidden');
            viewBlockLux?.classList.remove('hidden');
            break
          default:
            break
        };

      })
      element.removeEventListener('click', () => {});
    })
  };
  

  return (
    <>
      <div className='choose__place__mainSide'>
        <div className='choose__place__title'>
          Выбор мест
        </div>

        <div className='choose__place__placesThere'>
          <div className='places__direction_there'>
            <div className='places__directionPic'>
              <svg viewBox='-43 -26 150 150'><path d='m61 30.87-18.88-16.33a1.5 1.5 0 0 0 -2.48 1.13v7.83h-35.64a1.5 1.5 0 0 0 -1.5 1.5v14a1.5 1.5 0 0 0 1.5 1.5h35.64v7.83a1.51 1.51 0 0 0 2.48 1.13l18.88-16.33a1.49 1.49 0 0 0 0-2.26z'/></svg>
            </div>
            <button className='places__btnChangeTrain' onClick={() => handleReturnToTrains()}>Выбрать другой поезд</button>
          </div>

          <div className='places__trainInfo'>
            <div className='places__trainInfo__numberBlok'>
              <div className='places__trainInfo__numberBlokPic'>
                <svg viewBox='70 50 400 400' fill='#ffffff'><path d='M130.088,545.062l78.891-114.75h127.105l78.891,114.75h42.734l-79.502-115.63c26.87-4.6,47.334-27.932,47.334-56.104 V95.233c0-31.47-25.513-56.983-56.983-56.983h-48.204V19.125C320.354,8.559,311.795,0,301.229,0s-19.125,8.559-19.125,19.125 V38.25h-28.688V19.125C253.416,8.559,244.857,0,234.291,0s-19.125,8.559-19.125,19.125V38.25h-48.205 c-31.47,0-56.983,25.513-56.983,56.983v278.106c0,31.241,25.149,56.572,56.294,56.945L87.354,545.062H130.088z M346.058,380.54 c-16.381,0-29.663-13.282-29.663-29.663s13.282-29.663,29.663-29.663s29.663,13.282,29.663,29.663S362.438,380.54,346.058,380.54z M186.479,267.75h162.562c5.278,0,9.562,4.284,9.562,9.562s-4.284,9.562-9.562,9.562H186.479c-5.278,0-9.562-4.284-9.562-9.562 S181.2,267.75,186.479,267.75z M176.916,248.625c0-5.278,4.284-9.562,9.562-9.562h162.562c5.278,0,9.562,4.284,9.562,9.562 s-4.284,9.562-9.562,9.562H186.479C181.2,258.188,176.916,253.903,176.916,248.625z M148.229,104.987 c0-15.73,12.756-28.487,28.487-28.487h57.576h66.938h57.576c15.729,0,28.486,12.756,28.486,28.487v67.33 c0,15.74-12.757,28.496-28.486,28.496H176.715c-15.73,0-28.487-12.756-28.487-28.487V104.987z M152.675,350.877 c0-16.381,13.282-29.663,29.663-29.663c16.381,0,29.663,13.282,29.663,29.663s-13.282,29.663-29.663,29.663 C165.958,380.54,152.675,367.258,152.675,350.877z'/></svg>
              </div>
              <div className='places__trainInfo__numberBlokNumber'>
                <TrainCard__trainNumber trainNumber={currentTrain.trainNumber} trainTrackFrom={currentTrain.departureCityThere} trainTrackTo={currentTrain.arrivalCityThere} />
              </div>
            </div>

            <div className='places__trainInfo_line'></div>

            <div className='places__trainInfo__directionBlok'>
              <div className='trainInfo-there'>
                <div className='trainInfo-there-departure'>
                  <div className='trainInfo-Time'>
                    {moment(currentTrain.departureTimeThere).format('LT')}
                  </div>

                  <div className='trainInfo-City'>
                    {currentTrain.departureCityThere}
                  </div>

                  <div className='trainInfo-Station'>
                    {currentTrain.departureStationThere}
                  </div>
                </div>

                <div className='trainInfo-there-time'>
                  <div className='trainInfo-direction'>
                    <svg viewBox='0 0 64 64' fill='#FFA800C9'><path d='m61 30.87-18.88-16.33a1.5 1.5 0 0 0 -2.48 1.13v7.83h-35.64a1.5 1.5 0 0 0 -1.5 1.5v14a1.5 1.5 0 0 0 1.5 1.5h35.64v7.83a1.51 1.51 0 0 0 2.48 1.13l18.88-16.33a1.49 1.49 0 0 0 0-2.26z'/></svg>
                  </div>
                </div>

                <div className='trainInfo-there-arrival'>
                  <div className='trainInfo-Time'>
                    {moment(currentTrain.arrivalTimeThere).format('LT')}
                  </div>

                  <div className='trainInfo-City'>
                    {currentTrain.arrivalCityThere}
                  </div>

                  <div className='trainInfo-Station'>
                    {currentTrain.arrivalStationThere}
                  </div>
                </div>
              </div>
            </div>

            <div className='places__trainInfo_line'></div>

            <div className='places__trainInfo__timeBlock'>
              <div className='places__trainInfo__timeBlockPic'>
                <svg viewBox='70 50 400 400' fill='#ffffff'><path d='M130.088,545.062l78.891-114.75h127.105l78.891,114.75h42.734l-79.502-115.63c26.87-4.6,47.334-27.932,47.334-56.104 V95.233c0-31.47-25.513-56.983-56.983-56.983h-48.204V19.125C320.354,8.559,311.795,0,301.229,0s-19.125,8.559-19.125,19.125 V38.25h-28.688V19.125C253.416,8.559,244.857,0,234.291,0s-19.125,8.559-19.125,19.125V38.25h-48.205 c-31.47,0-56.983,25.513-56.983,56.983v278.106c0,31.241,25.149,56.572,56.294,56.945L87.354,545.062H130.088z M346.058,380.54 c-16.381,0-29.663-13.282-29.663-29.663s13.282-29.663,29.663-29.663s29.663,13.282,29.663,29.663S362.438,380.54,346.058,380.54z M186.479,267.75h162.562c5.278,0,9.562,4.284,9.562,9.562s-4.284,9.562-9.562,9.562H186.479c-5.278,0-9.562-4.284-9.562-9.562 S181.2,267.75,186.479,267.75z M176.916,248.625c0-5.278,4.284-9.562,9.562-9.562h162.562c5.278,0,9.562,4.284,9.562,9.562 s-4.284,9.562-9.562,9.562H186.479C181.2,258.188,176.916,253.903,176.916,248.625z M148.229,104.987 c0-15.73,12.756-28.487,28.487-28.487h57.576h66.938h57.576c15.729,0,28.486,12.756,28.486,28.487v67.33 c0,15.74-12.757,28.496-28.486,28.496H176.715c-15.73,0-28.487-12.756-28.487-28.487V104.987z M152.675,350.877 c0-16.381,13.282-29.663,29.663-29.663c16.381,0,29.663,13.282,29.663,29.663s-13.282,29.663-29.663,29.663 C165.958,380.54,152.675,367.258,152.675,350.877z'/></svg>
              </div>
              <div className='places__trainInfo__timeBlockInfo'>
              <p>{currentTrain.timeTrackThere.slice(0, 2)} часов</p>
              <p>{currentTrain.timeTrackThere.slice(3, 5)} минут</p>
              </div>
            </div>
          </div>

          <div className='places__amountTickets'>
            <div className='places__amountTickets_title'>
              Количество билетов
            </div>

            <div className='places__amountTickets_blocks'>
              <div className='places__amountTickets_block places__amountTickets_blockActive'>
                <div className='places__amountTickets_blockTitle'>
                  Взрослых — {amountAdultTickets}
                </div>
                <div className='places__amountTickets_blockText'>
                  Можно добавить еще 3 пассажиров
                </div>
              </div>

              <div className='places__amountTickets_block'>
                <div className='places__amountTickets_blockTitle'>
                  Детских — 1
                </div>
                <div className='places__amountTickets_blockText'>
                Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%
                </div>
              </div>

              <div className='places__amountTickets_block'>
                <div className='places__amountTickets_blockTitle'>
                  Детских «без места» — 0
                </div>
                <div className='places__amountTickets_blockText'>
                   
                </div>
              </div>
            </div>
          </div>

          <div className='places__line'></div>

          <div className='places__typeWagon'>
            <div className='places__typeWagon_title'>
              Тип вагона
            </div>

            <div className='places__typeWagon__pictures'>
              <div className='places__typeWagon__pictureElm' id='0' onClick={() => handleChangeTypeWagonThere()}>
                <div className='places__typeWagon__pictureSvg'>
                  <svg className='places__typeWagon__svg' viewBox='0 0 413 413' ><path d='M390.271,337.66l-39.809-112.445c-3.06-8.641-12.637-15.41-21.803-15.41h-50.723c-4.361,0-7.91-3.549-7.91-7.91v-79.293 c0-9.813-7.983-17.797-17.797-17.797h-2.369c18.737-8.773,31.753-27.801,31.753-49.82C281.615,24.666,256.948,0,226.63,0 c-30.32,0-54.986,24.666-54.986,54.985c0,22.171,13.197,41.305,32.142,49.996c-8.698,1.162-15.434,8.611-15.434,17.621v138.733 c0,9.789,7.963,17.753,17.813,17.752l86.149-0.296c5.348,0,12.46,4.004,15.221,8.569l33.63,55.624 c4.539,7.505,14.964,13.384,23.734,13.384h12.148c4.996,0,9.317-2.059,11.854-5.649C391.439,347.13,391.938,342.37,390.271,337.66z ' ></path></svg>
                </div>
                <div className='places__typeWagon__pictureText'>
                  Сидячий
                </div>
              </div>

              <div className='places__typeWagon__pictureElm' id='1' onClick={() => handleChangeTypeWagonThere()}>
                <div className='places__typeWagon__pictureSvg'>
                  <svg className='places__typeWagon__svg' viewBox='0 0 24 24'><path d='M12 17V21M8 21H16M6.2 17H17.8C18.9201 17 19.4802 17 19.908 16.782C20.2843 16.5903 20.5903 16.2843 20.782 15.908C21 15.4802 21 14.9201 21 13.8V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.71569 20.2843 3.40973 19.908 3.21799C19.4802 3 18.9201 3 17.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.07989 3 6.2V13.8C3 14.9201 3 15.4802 3.21799 15.908C3.40973 16.2843 3.71569 16.5903 4.09202 16.782C4.51984 17 5.07989 17 6.2 17Z' ></path></svg>
                </div>
                <div className='places__typeWagon__pictureText'>
                  Плацкарт
                </div>
              </div>

              <div className='places__typeWagon__pictureElm' id='2' onClick={() => handleChangeTypeWagonThere()}>
                <div className='places__typeWagon__pictureSvg'>
                  <svg className='places__typeWagon__svg typeWagonActive' viewBox='0 0 24 24'><path d='M12 17V21M8 21H16M6.2 17H17.8C18.9201 17 19.4802 17 19.908 16.782C20.2843 16.5903 20.5903 16.2843 20.782 15.908C21 15.4802 21 14.9201 21 13.8V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.71569 20.2843 3.40973 19.908 3.21799C19.4802 3 18.9201 3 17.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.07989 3 6.2V13.8C3 14.9201 3 15.4802 3.21799 15.908C3.40973 16.2843 3.71569 16.5903 4.09202 16.782C4.51984 17 5.07989 17 6.2 17Z' ></path></svg>
                </div>
                <div className='places__typeWagon__pictureText typeWagonActive'>
                  Купе
                </div>
              </div>

              <div className='places__typeWagon__pictureElm' id='3' onClick={() => handleChangeTypeWagonThere()}>
                <div className='places__typeWagon__pictureSvg'>
                  <svg className='places__typeWagon__svg' viewBox='0 2 32 32' ><path d='m29.64063 12.84277a.99975.99975 0 0 0 -.80713-.68066l-8.248-1.19922-3.6885-7.47363a1.041 1.041 0 0 0 -1.79394 0l-3.68848 7.47363-8.248 1.19922a.99972.99972 0 0 0 -.5542 1.70508l5.96827 5.81836-1.40877 8.21386a1.00012 1.00012 0 0 0 1.45112 1.05372l7.377-3.87793 7.377 3.87793a1.00013 1.00013 0 0 0 1.45118-1.05372l-1.4087-8.21386 5.96827-5.81836a.99924.99924 0 0 0 .25288-1.02442z'></path></svg>
                </div>
                <div className='places__typeWagon__pictureText'>
                  Люкс
                </div>
              </div>
            </div>
          </div>
          <div className='places__viewBlock viewBlock__seat hidden'>
            <div className='places__wagonInfo'>
            <div className='places__wagonInfo__wagonNumber'>
                <div className='places__wagonNumber__numbers'>
                  <span className='places__wagonNumber__spantext'>Вагоны</span>
                  <span className='places__wagonNumber__spanNumber wagonNumberActive'>15</span>
                  <span className='places__wagonNumber__spanNumber'>16</span>
                </div>
                <div className='places__wagonNumber__text'>
                  Нумерация вагонов начинается с головы поезда
                </div>
              </div>

              <div className='places__wagonInfo__detailedInfo'>
                <div className='places__detailedInfo__wagonNumber'>
                  <div className='wagonNumber__number'>16</div>
                  <div className='wagonNumber__text'>вагон</div>
                </div>

                <div className='places__detailedInfo__wagonPlaces'>
                  <div className='places__wagonPlaces__amountPlaces'>
                    Места {idSeatType?.trainAmount}
                  </div>
                  
                </div>

                <div className='places__detailedInfo__wagonCosts'>
                  <div className='places__wagonCosts__text'>
                    Стоимость
                  </div>
                  <div className='places__wagonCosts__upperlowerCost'>
                    {idSeatType?.trainPrice} Р
                  </div>
                </div>

                <div className='places__detailedInfo__wagonOptions'>
                  <div className='places__wagonOptions__text'>
                    Обслуживание ФПК
                  </div>
                  <div className='places__wagonOptions__icons'>
                    <div className='places__wagonOptions__icon'>
                      <svg viewBox='-20 -20 180 180'><path d='M117.88,73.85l-22.42,6L68,64,95.46,48.15l22.42,6a2,2,0,0,0,1-3.86l-18.56-5,15.74-9.09a2,2,0,0,0-2-3.46L98.36,41.85l5-18.56a2,2,0,0,0-3.86-1l-6,22.42L69.65,58.43,96.14,14H108a2,2,0,0,0,0-4H95a2,2,0,0,0-1.72,1L80.43,32.54a35.57,35.57,0,0,0-14.43-4V4a2,2,0,0,0-4,0V28.56a35.2,35.2,0,0,0-14,3.76L35.73,11a2,2,0,1,0-3.46,2L44.56,34.32A35.68,35.68,0,0,0,34.32,44.56L13,32.27a2,2,0,1,0-2,3.46L32.32,48a35.2,35.2,0,0,0-3.76,14H4a2,2,0,0,0,0,4H28.56a35.38,35.38,0,0,0,3.75,14L11.08,92.34a2,2,0,1,0,2,3.46L34.3,83.51a35.52,35.52,0,0,0,9.84,9.9L31.86,114H20a2,2,0,0,0,0,4H33a2,2,0,0,0,1.72-1L62,71.26V99.17L45.59,115.59a2,2,0,0,0,2.82,2.82L62,104.83V123a2,2,0,0,0,4,0V104.83l13.59,13.58a2,2,0,0,0,2.82-2.82L66,99.17V67.46L93.46,83.32l6,22.42a2,2,0,0,0,3.86-1l-5-18.56,15.74,9.08a2,2,0,0,0,2-3.46l-15.74-9.09,18.56-5a2,2,0,0,0-1-3.86ZM32.5,64A31.49,31.49,0,0,1,78.38,36L62.27,63h0L46.19,90A31.28,31.28,0,0,1,32.5,64Z'></path></svg>
                      <span className='places__wagonOptions__tooltip'>кондиционер</span>
                    </div>
                    <div className='places__wagonOptions__icon'>
                      <svg viewBox='-130 -130 900 900'><path d='M306,51C191.25,51,84.15,89.25,0,153l306,408l306-408C527.85,89.25,420.75,51,306,51z M306,186.15 c-66.3,0-127.5,17.85-181.05,48.45l-51-68.85C142.8,124.95,221.85,102,306,102c84.15,0,163.2,22.95,232.05,63.75l-51,68.85 C433.5,204,372.3,186.15,306,186.15z'></path></svg>
                      <span className='places__wagonOptions__tooltip'>Wi-Fi</span>
                    </div>
                    <div className='places__wagonOptions__icon'>
                      <svg viewBox='-100 -100 700 700'><path d='m452 0h-392c-33.084 0-60 26.916-60 60v347c0 57.897 47.103 105 105 105h362c24.813 0 45-20.187 45-45 0-11.517-4.353-22.032-11.495-30 7.141-7.968 11.495-18.483 11.495-30s-4.353-22.032-11.495-30c7.141-7.968 11.495-18.483 11.495-30v-287c0-33.084-26.916-60-60-60zm-120 77.574 102.426 102.426h-102.426zm150-17.574v125.148l-155.148-155.148h125.148c16.542 0 30 13.458 30 30zm0 347c0 8.271-6.729 15-15 15h-362c-8.271 0-15-6.729-15-15s6.729-15 15-15h362c8.271 0 15 6.729 15 15zm-15-45h-362c-24.813 0-45 20.187-45 45s20.187 45 45 45h362c8.271 0 15 6.729 15 15s-6.729 15-15 15h-362c-41.355 0-75-33.645-75-75s33.645-75 75-75h362c8.271 0 15 6.729 15 15s-6.729 15-15 15zm15-57.42c-4.695-1.665-9.742-2.58-15-2.58h-362c-29.354 0-55.927 12.113-75 31.596v-273.596c0-16.542 13.458-30 30-30h212c16.542 0 30 13.458 30 30v150h150c16.542 0 30 13.458 30 30z'></path></svg>
                      <span className='places__wagonOptions__tooltip'>белье</span>
                    </div>
                    <div className='places__wagonOptions__icon'>
                      <svg viewBox='-70 70 612 612'><path d='M386.5,163h-341v285c0,19.556,12.539,36.239,30,42.43V512h270v-21.57c17.461-6.191,30-22.873,30-42.43v-16h11 c44.183,0,80-35.817,80-80V243C466.5,198.817,430.683,163,386.5,163z M415.5,353c0,16.541-13.459,29.989-30,29.99h-10V213.01h10 c16.541,0.001,30,13.449,30,29.99V353z'></path></svg>
                      <span className='places__wagonOptions__tooltip'>завтрак</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='places__choosePlace'>
              {Array.from({ length: 2 }, (_, seatIndex) => (
                <div key={seatIndex} className='places__choosePlace_seat'>
                  {seatSeats.slice(seatIndex * 32, seatIndex * 32 + 32).map(seat => (
                    <div
                      key={seat.number}
                      className={`places__choosePlace_seatSeat ${selectedSeatThere === seat.number+100 ? 'places__choosePlace_activeSeat' : ''}`}
                      onClick={() => handleSeatThereClick(seat.number+100)}>
                        {seat.number}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className='places__viewBlock viewBlock__plazcart hidden'>
            <div className='places__wagonInfo'>
            <div className='places__wagonInfo__wagonNumber'>
                <div className='places__wagonNumber__numbers'>
                  <span className='places__wagonNumber__spantext'>Вагоны</span>
                  <span className='places__wagonNumber__spanNumber wagonNumberActive'>10</span>
                  <span className='places__wagonNumber__spanNumber'>11</span>
                </div>
                <div className='places__wagonNumber__text'>
                  Нумерация вагонов начинается с головы поезда
                </div>
              </div>

              <div className='places__wagonInfo__detailedInfo'>
                <div className='places__detailedInfo__wagonNumber'>
                  <div className='wagonNumber__number'>10</div>
                  <div className='wagonNumber__text'>вагон</div>
                </div>

                <div className='places__detailedInfo__wagonPlaces'>
                  <div className='places__wagonPlaces__amountPlaces'>
                    Места {idPlazcartType?.trainAmount}
                  </div>
                  <div className='places__wagonPlaces__upperlowerPlaces'>
                    Верхние 3
                  </div>
                  <div className='places__wagonPlaces__upperlowerPlaces'>
                    Нижние 8
                  </div>
                </div>

                <div className='places__detailedInfo__wagonCosts'>
                  <div className='places__wagonCosts__text'>
                    Стоимость
                  </div>
                  <div className='places__wagonCosts__upperlowerCost'>
                    {idPlazcartType?.trainPrice} Р
                  </div>
                  <div className='places__wagonCosts__upperlowerCost'>
                    {idPlazcartType?.trainPrice} Р
                  </div>
                </div>

                <div className='places__detailedInfo__wagonOptions'>
                  <div className='places__wagonOptions__text'>
                    Обслуживание ФПК
                  </div>
                  <div className='places__wagonOptions__icons'>
                    <div className='places__wagonOptions__icon'>
                      <svg viewBox='-20 -20 180 180'><path d='M117.88,73.85l-22.42,6L68,64,95.46,48.15l22.42,6a2,2,0,0,0,1-3.86l-18.56-5,15.74-9.09a2,2,0,0,0-2-3.46L98.36,41.85l5-18.56a2,2,0,0,0-3.86-1l-6,22.42L69.65,58.43,96.14,14H108a2,2,0,0,0,0-4H95a2,2,0,0,0-1.72,1L80.43,32.54a35.57,35.57,0,0,0-14.43-4V4a2,2,0,0,0-4,0V28.56a35.2,35.2,0,0,0-14,3.76L35.73,11a2,2,0,1,0-3.46,2L44.56,34.32A35.68,35.68,0,0,0,34.32,44.56L13,32.27a2,2,0,1,0-2,3.46L32.32,48a35.2,35.2,0,0,0-3.76,14H4a2,2,0,0,0,0,4H28.56a35.38,35.38,0,0,0,3.75,14L11.08,92.34a2,2,0,1,0,2,3.46L34.3,83.51a35.52,35.52,0,0,0,9.84,9.9L31.86,114H20a2,2,0,0,0,0,4H33a2,2,0,0,0,1.72-1L62,71.26V99.17L45.59,115.59a2,2,0,0,0,2.82,2.82L62,104.83V123a2,2,0,0,0,4,0V104.83l13.59,13.58a2,2,0,0,0,2.82-2.82L66,99.17V67.46L93.46,83.32l6,22.42a2,2,0,0,0,3.86-1l-5-18.56,15.74,9.08a2,2,0,0,0,2-3.46l-15.74-9.09,18.56-5a2,2,0,0,0-1-3.86ZM32.5,64A31.49,31.49,0,0,1,78.38,36L62.27,63h0L46.19,90A31.28,31.28,0,0,1,32.5,64Z'></path></svg>
                      <span className='places__wagonOptions__tooltip'>кондиционер</span>
                    </div>
                    <div className='places__wagonOptions__icon'>
                      <svg viewBox='-130 -130 900 900'><path d='M306,51C191.25,51,84.15,89.25,0,153l306,408l306-408C527.85,89.25,420.75,51,306,51z M306,186.15 c-66.3,0-127.5,17.85-181.05,48.45l-51-68.85C142.8,124.95,221.85,102,306,102c84.15,0,163.2,22.95,232.05,63.75l-51,68.85 C433.5,204,372.3,186.15,306,186.15z'></path></svg>
                      <span className='places__wagonOptions__tooltip'>Wi-Fi</span>
                    </div>
                    <div className='places__wagonOptions__icon places__wagonOptions__iconActive'>
                      <svg viewBox='-100 -100 700 700'><path d='m452 0h-392c-33.084 0-60 26.916-60 60v347c0 57.897 47.103 105 105 105h362c24.813 0 45-20.187 45-45 0-11.517-4.353-22.032-11.495-30 7.141-7.968 11.495-18.483 11.495-30s-4.353-22.032-11.495-30c7.141-7.968 11.495-18.483 11.495-30v-287c0-33.084-26.916-60-60-60zm-120 77.574 102.426 102.426h-102.426zm150-17.574v125.148l-155.148-155.148h125.148c16.542 0 30 13.458 30 30zm0 347c0 8.271-6.729 15-15 15h-362c-8.271 0-15-6.729-15-15s6.729-15 15-15h362c8.271 0 15 6.729 15 15zm-15-45h-362c-24.813 0-45 20.187-45 45s20.187 45 45 45h362c8.271 0 15 6.729 15 15s-6.729 15-15 15h-362c-41.355 0-75-33.645-75-75s33.645-75 75-75h362c8.271 0 15 6.729 15 15s-6.729 15-15 15zm15-57.42c-4.695-1.665-9.742-2.58-15-2.58h-362c-29.354 0-55.927 12.113-75 31.596v-273.596c0-16.542 13.458-30 30-30h212c16.542 0 30 13.458 30 30v150h150c16.542 0 30 13.458 30 30z'></path></svg>
                      <span className='places__wagonOptions__tooltip'>белье</span>
                    </div>
                    <div className='places__wagonOptions__icon'>
                      <svg viewBox='-70 70 612 612'><path d='M386.5,163h-341v285c0,19.556,12.539,36.239,30,42.43V512h270v-21.57c17.461-6.191,30-22.873,30-42.43v-16h11 c44.183,0,80-35.817,80-80V243C466.5,198.817,430.683,163,386.5,163z M415.5,353c0,16.541-13.459,29.989-30,29.99h-10V213.01h10 c16.541,0.001,30,13.449,30,29.99V353z'></path></svg>
                      <span className='places__wagonOptions__tooltip'>завтрак</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='places__choosePlace'>
              {Array.from({ length: 8 }, (_, plazcartIndex) => (
                <div key={plazcartIndex} className='places__choosePlace_plazcart'>
                  {plazcartSeats.slice(plazcartIndex * 4, plazcartIndex * 4 + 4).map(seat => (
                    <div
                      key={seat.number}
                      className={`places__choosePlace_plazcartSeat ${selectedSeatThere === seat.number+200 ? 'places__choosePlace_activeSeat' : ''}`}
                      onClick={() => handleSeatThereClick(seat.number+200)}>
                        {seat.number}
                    </div>
                  ))}
                </div>
              ))}
              {Array.from({ length: 8 }, (_, plazcartIndex) => (
                <div key={plazcartIndex + 32} className='places__choosePlace_plazcartSide'>
                  {plazcartSeats.slice(plazcartIndex * 2, plazcartIndex * 2 + 2).map(seat => (
                    <div
                      key={seat.number + 32}
                      className={`places__choosePlace_plazcartSeat ${selectedSeatThere === seat.number + 232 ? 'places__choosePlace_activeSeat' : ''}`}
                      onClick={() => handleSeatThereClick(seat.number + 232)}>
                        {seat.number + 32}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className='places__viewBlock viewBlock__coupe'>
            <div className='places__wagonInfo'>
              <div className='places__wagonInfo__wagonNumber'>
                <div className='places__wagonNumber__numbers'>
                  <span className='places__wagonNumber__spantext'>Вагоны</span>
                  <span className='places__wagonNumber__spanNumber wagonNumberActive'>07</span>
                  <span className='places__wagonNumber__spanNumber'>09</span>
                </div>
                <div className='places__wagonNumber__text'>
                  Нумерация вагонов начинается с головы поезда
                </div>
              </div>

              <div className='places__wagonInfo__detailedInfo'>
                <div className='places__detailedInfo__wagonNumber'>
                  <div className='wagonNumber__number'>07</div>
                  <div className='wagonNumber__text'>вагон</div>
                </div>

                <div className='places__detailedInfo__wagonPlaces'>
                  <div className='places__wagonPlaces__amountPlaces'>
                    Места {idCoupeType?.trainAmount}
                  </div>
                  <div className='places__wagonPlaces__upperlowerPlaces'>
                    Верхние 3
                  </div>
                  <div className='places__wagonPlaces__upperlowerPlaces'>
                    Нижние 8
                  </div>
                </div>

                <div className='places__detailedInfo__wagonCosts'>
                  <div className='places__wagonCosts__text'>
                    Стоимость
                  </div>
                  <div className='places__wagonCosts__upperlowerCost'>
                    {idCoupeType?.trainPrice} Р
                  </div>
                  <div className='places__wagonCosts__upperlowerCost'>
                    {idCoupeType?.trainPrice} Р
                  </div>
                </div>

                <div className='places__detailedInfo__wagonOptions'>
                  <div className='places__wagonOptions__text'>
                    Обслуживание ФПК
                  </div>
                  <div className='places__wagonOptions__icons'>
                    <div className='places__wagonOptions__icon'>
                      <svg viewBox='-20 -20 180 180'><path d='M117.88,73.85l-22.42,6L68,64,95.46,48.15l22.42,6a2,2,0,0,0,1-3.86l-18.56-5,15.74-9.09a2,2,0,0,0-2-3.46L98.36,41.85l5-18.56a2,2,0,0,0-3.86-1l-6,22.42L69.65,58.43,96.14,14H108a2,2,0,0,0,0-4H95a2,2,0,0,0-1.72,1L80.43,32.54a35.57,35.57,0,0,0-14.43-4V4a2,2,0,0,0-4,0V28.56a35.2,35.2,0,0,0-14,3.76L35.73,11a2,2,0,1,0-3.46,2L44.56,34.32A35.68,35.68,0,0,0,34.32,44.56L13,32.27a2,2,0,1,0-2,3.46L32.32,48a35.2,35.2,0,0,0-3.76,14H4a2,2,0,0,0,0,4H28.56a35.38,35.38,0,0,0,3.75,14L11.08,92.34a2,2,0,1,0,2,3.46L34.3,83.51a35.52,35.52,0,0,0,9.84,9.9L31.86,114H20a2,2,0,0,0,0,4H33a2,2,0,0,0,1.72-1L62,71.26V99.17L45.59,115.59a2,2,0,0,0,2.82,2.82L62,104.83V123a2,2,0,0,0,4,0V104.83l13.59,13.58a2,2,0,0,0,2.82-2.82L66,99.17V67.46L93.46,83.32l6,22.42a2,2,0,0,0,3.86-1l-5-18.56,15.74,9.08a2,2,0,0,0,2-3.46l-15.74-9.09,18.56-5a2,2,0,0,0-1-3.86ZM32.5,64A31.49,31.49,0,0,1,78.38,36L62.27,63h0L46.19,90A31.28,31.28,0,0,1,32.5,64Z'></path></svg>
                      <span className='places__wagonOptions__tooltip'>кондиционер</span>
                    </div>
                    <div className='places__wagonOptions__icon'>
                      <svg viewBox='-130 -130 900 900'><path d='M306,51C191.25,51,84.15,89.25,0,153l306,408l306-408C527.85,89.25,420.75,51,306,51z M306,186.15 c-66.3,0-127.5,17.85-181.05,48.45l-51-68.85C142.8,124.95,221.85,102,306,102c84.15,0,163.2,22.95,232.05,63.75l-51,68.85 C433.5,204,372.3,186.15,306,186.15z'></path></svg>
                      <span className='places__wagonOptions__tooltip'>Wi-Fi</span>
                    </div>
                    <div className='places__wagonOptions__icon places__wagonOptions__iconActive'>
                      <svg viewBox='-100 -100 700 700'><path d='m452 0h-392c-33.084 0-60 26.916-60 60v347c0 57.897 47.103 105 105 105h362c24.813 0 45-20.187 45-45 0-11.517-4.353-22.032-11.495-30 7.141-7.968 11.495-18.483 11.495-30s-4.353-22.032-11.495-30c7.141-7.968 11.495-18.483 11.495-30v-287c0-33.084-26.916-60-60-60zm-120 77.574 102.426 102.426h-102.426zm150-17.574v125.148l-155.148-155.148h125.148c16.542 0 30 13.458 30 30zm0 347c0 8.271-6.729 15-15 15h-362c-8.271 0-15-6.729-15-15s6.729-15 15-15h362c8.271 0 15 6.729 15 15zm-15-45h-362c-24.813 0-45 20.187-45 45s20.187 45 45 45h362c8.271 0 15 6.729 15 15s-6.729 15-15 15h-362c-41.355 0-75-33.645-75-75s33.645-75 75-75h362c8.271 0 15 6.729 15 15s-6.729 15-15 15zm15-57.42c-4.695-1.665-9.742-2.58-15-2.58h-362c-29.354 0-55.927 12.113-75 31.596v-273.596c0-16.542 13.458-30 30-30h212c16.542 0 30 13.458 30 30v150h150c16.542 0 30 13.458 30 30z'></path></svg>
                      <span className='places__wagonOptions__tooltip'>белье</span>
                    </div>
                    <div className='places__wagonOptions__icon places__wagonOptions__iconActive'>
                      <svg viewBox='-70 70 612 612'><path d='M386.5,163h-341v285c0,19.556,12.539,36.239,30,42.43V512h270v-21.57c17.461-6.191,30-22.873,30-42.43v-16h11 c44.183,0,80-35.817,80-80V243C466.5,198.817,430.683,163,386.5,163z M415.5,353c0,16.541-13.459,29.989-30,29.99h-10V213.01h10 c16.541,0.001,30,13.449,30,29.99V353z'></path></svg>
                      <span className='places__wagonOptions__tooltip'>завтрак</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='places__choosePlace'>
              {Array.from({ length: 8 }, (_, coupeIndex) => (
                <div key={coupeIndex} className='places__choosePlace_coupe'>
                  {coupeSeats.slice(coupeIndex * 4, coupeIndex * 4 + 4).map(seat => (
                    <div
                      key={seat.number}
                      className={`places__choosePlace_coupeSeat ${selectedSeatThere === seat.number+300 ? 'places__choosePlace_activeSeat' : ''}`}
                      onClick={() => handleSeatThereClick(seat.number+300)}>
                        {seat.number}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className='places__viewBlock viewBlock__lux hidden'>
            <div className='places__wagonInfo'>
            <div className='places__wagonInfo__wagonNumber'>
                <div className='places__wagonNumber__numbers'>
                  <span className='places__wagonNumber__spantext'>Вагоны</span>
                  <span className='places__wagonNumber__spanNumber wagonNumberActive'>02</span>
                  <span className='places__wagonNumber__spanNumber'>03</span>
                </div>
                <div className='places__wagonNumber__text'>
                  Нумерация вагонов начинается с головы поезда
                </div>
              </div>

              <div className='places__wagonInfo__detailedInfo'>
                <div className='places__detailedInfo__wagonNumber'>
                  <div className='wagonNumber__number'>02</div>
                  <div className='wagonNumber__text'>вагон</div>
                </div>

                <div className='places__detailedInfo__wagonPlaces'>
                  <div className='places__wagonPlaces__amountPlaces'>
                    Места {idLuxType?.trainAmount}
                  </div>
                </div>

                <div className='places__detailedInfo__wagonCosts'>
                  <div className='places__wagonCosts__text'>
                    Стоимость
                  </div>
                  <div className='places__wagonCosts__upperlowerCost'>
                    {idLuxType?.trainPrice} Р
                  </div>
                </div>

                <div className='places__detailedInfo__wagonOptions'>
                  <div className='places__wagonOptions__text'>
                    Обслуживание ФПК
                  </div>
                  <div className='places__wagonOptions__icons'>
                    <div className='places__wagonOptions__icon places__wagonOptions__iconActive'>
                      <svg viewBox='-20 -20 180 180'><path d='M117.88,73.85l-22.42,6L68,64,95.46,48.15l22.42,6a2,2,0,0,0,1-3.86l-18.56-5,15.74-9.09a2,2,0,0,0-2-3.46L98.36,41.85l5-18.56a2,2,0,0,0-3.86-1l-6,22.42L69.65,58.43,96.14,14H108a2,2,0,0,0,0-4H95a2,2,0,0,0-1.72,1L80.43,32.54a35.57,35.57,0,0,0-14.43-4V4a2,2,0,0,0-4,0V28.56a35.2,35.2,0,0,0-14,3.76L35.73,11a2,2,0,1,0-3.46,2L44.56,34.32A35.68,35.68,0,0,0,34.32,44.56L13,32.27a2,2,0,1,0-2,3.46L32.32,48a35.2,35.2,0,0,0-3.76,14H4a2,2,0,0,0,0,4H28.56a35.38,35.38,0,0,0,3.75,14L11.08,92.34a2,2,0,1,0,2,3.46L34.3,83.51a35.52,35.52,0,0,0,9.84,9.9L31.86,114H20a2,2,0,0,0,0,4H33a2,2,0,0,0,1.72-1L62,71.26V99.17L45.59,115.59a2,2,0,0,0,2.82,2.82L62,104.83V123a2,2,0,0,0,4,0V104.83l13.59,13.58a2,2,0,0,0,2.82-2.82L66,99.17V67.46L93.46,83.32l6,22.42a2,2,0,0,0,3.86-1l-5-18.56,15.74,9.08a2,2,0,0,0,2-3.46l-15.74-9.09,18.56-5a2,2,0,0,0-1-3.86ZM32.5,64A31.49,31.49,0,0,1,78.38,36L62.27,63h0L46.19,90A31.28,31.28,0,0,1,32.5,64Z'></path></svg>
                      <span className='places__wagonOptions__tooltip'>кондиционер</span>
                    </div>
                    <div className='places__wagonOptions__icon places__wagonOptions__iconActive'>
                      <svg viewBox='-130 -130 900 900'><path d='M306,51C191.25,51,84.15,89.25,0,153l306,408l306-408C527.85,89.25,420.75,51,306,51z M306,186.15 c-66.3,0-127.5,17.85-181.05,48.45l-51-68.85C142.8,124.95,221.85,102,306,102c84.15,0,163.2,22.95,232.05,63.75l-51,68.85 C433.5,204,372.3,186.15,306,186.15z'></path></svg>
                      <span className='places__wagonOptions__tooltip'>Wi-Fi</span>
                    </div>
                    <div className='places__wagonOptions__icon places__wagonOptions__iconActive'>
                      <svg viewBox='-100 -100 700 700'><path d='m452 0h-392c-33.084 0-60 26.916-60 60v347c0 57.897 47.103 105 105 105h362c24.813 0 45-20.187 45-45 0-11.517-4.353-22.032-11.495-30 7.141-7.968 11.495-18.483 11.495-30s-4.353-22.032-11.495-30c7.141-7.968 11.495-18.483 11.495-30v-287c0-33.084-26.916-60-60-60zm-120 77.574 102.426 102.426h-102.426zm150-17.574v125.148l-155.148-155.148h125.148c16.542 0 30 13.458 30 30zm0 347c0 8.271-6.729 15-15 15h-362c-8.271 0-15-6.729-15-15s6.729-15 15-15h362c8.271 0 15 6.729 15 15zm-15-45h-362c-24.813 0-45 20.187-45 45s20.187 45 45 45h362c8.271 0 15 6.729 15 15s-6.729 15-15 15h-362c-41.355 0-75-33.645-75-75s33.645-75 75-75h362c8.271 0 15 6.729 15 15s-6.729 15-15 15zm15-57.42c-4.695-1.665-9.742-2.58-15-2.58h-362c-29.354 0-55.927 12.113-75 31.596v-273.596c0-16.542 13.458-30 30-30h212c16.542 0 30 13.458 30 30v150h150c16.542 0 30 13.458 30 30z'></path></svg>
                      <span className='places__wagonOptions__tooltip'>белье</span>
                    </div>
                    <div className='places__wagonOptions__icon places__wagonOptions__iconActive'>
                      <svg viewBox='-70 70 612 612'><path d='M386.5,163h-341v285c0,19.556,12.539,36.239,30,42.43V512h270v-21.57c17.461-6.191,30-22.873,30-42.43v-16h11 c44.183,0,80-35.817,80-80V243C466.5,198.817,430.683,163,386.5,163z M415.5,353c0,16.541-13.459,29.989-30,29.99h-10V213.01h10 c16.541,0.001,30,13.449,30,29.99V353z'></path></svg>
                      <span className='places__wagonOptions__tooltip'>завтрак</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='places__choosePlace'>
              {Array.from({ length: 8 }, (_, coupeIndex) => (
                <div key={coupeIndex} className='places__choosePlace_lux'>
                  {luxSeats.slice(coupeIndex * 2, coupeIndex * 2 + 2).map(seat => (
                    <div
                      key={seat.number}
                      className={`places__choosePlace_luxSeat ${selectedSeatThere === seat.number+400 ? 'places__choosePlace_activeSeat' : ''}`}
                      onClick={() => handleSeatThereClick(seat.number+400)}>
                        {seat.number}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='choose__place__placesBack'>
          <div className='places__direction_back'>
            <div className='places__directionPic'>
              <svg viewBox='-43 -26 150 150'><path d='m60 23.5h-35.64v-7.83a1.5 1.5 0 0 0 -2.48-1.13l-18.88 16.33a1.49 1.49 0 0 0 0 2.26l18.88 16.33a1.51 1.51 0 0 0 2.48-1.13v-7.83h35.64a1.5 1.5 0 0 0 1.5-1.5v-14a1.5 1.5 0 0 0 -1.5-1.5z'/></svg>
            </div>
            <button className='places__btnChangeTrain' onClick={() => handleReturnToTrains()}>Выбрать другой поезд</button>
          </div>

          <div className='places__trainInfo'>
            <div className='places__trainInfo__numberBlok'>
              <div className='places__trainInfo__numberBlokPic'>
                <svg viewBox='70 50 400 400' fill='#ffffff'><path d='M130.088,545.062l78.891-114.75h127.105l78.891,114.75h42.734l-79.502-115.63c26.87-4.6,47.334-27.932,47.334-56.104 V95.233c0-31.47-25.513-56.983-56.983-56.983h-48.204V19.125C320.354,8.559,311.795,0,301.229,0s-19.125,8.559-19.125,19.125 V38.25h-28.688V19.125C253.416,8.559,244.857,0,234.291,0s-19.125,8.559-19.125,19.125V38.25h-48.205 c-31.47,0-56.983,25.513-56.983,56.983v278.106c0,31.241,25.149,56.572,56.294,56.945L87.354,545.062H130.088z M346.058,380.54 c-16.381,0-29.663-13.282-29.663-29.663s13.282-29.663,29.663-29.663s29.663,13.282,29.663,29.663S362.438,380.54,346.058,380.54z M186.479,267.75h162.562c5.278,0,9.562,4.284,9.562,9.562s-4.284,9.562-9.562,9.562H186.479c-5.278,0-9.562-4.284-9.562-9.562 S181.2,267.75,186.479,267.75z M176.916,248.625c0-5.278,4.284-9.562,9.562-9.562h162.562c5.278,0,9.562,4.284,9.562,9.562 s-4.284,9.562-9.562,9.562H186.479C181.2,258.188,176.916,253.903,176.916,248.625z M148.229,104.987 c0-15.73,12.756-28.487,28.487-28.487h57.576h66.938h57.576c15.729,0,28.486,12.756,28.486,28.487v67.33 c0,15.74-12.757,28.496-28.486,28.496H176.715c-15.73,0-28.487-12.756-28.487-28.487V104.987z M152.675,350.877 c0-16.381,13.282-29.663,29.663-29.663c16.381,0,29.663,13.282,29.663,29.663s-13.282,29.663-29.663,29.663 C165.958,380.54,152.675,367.258,152.675,350.877z'/></svg>
              </div>
              <div className='places__trainInfo__numberBlokNumber'>
                <TrainCard__trainNumber trainNumber={currentTrain.trainNumber} trainTrackFrom={currentTrain.departureCityBack} trainTrackTo={currentTrain.arrivalCityBack} />
              </div>
            </div>

            <div className='places__trainInfo_line'></div>

            <div className='places__trainInfo__directionBlok'>
              <div className='trainInfo-there'>
                <div className='trainInfo-there-departure'>
                  <div className='trainInfo-Time'>
                    {moment(currentTrain.departureTimeBack).format('LT')}
                  </div>

                  <div className='trainInfo-City'>
                    {currentTrain.departureCityBack}
                  </div>

                  <div className='trainInfo-Station'>
                    {currentTrain.departureStationBack}
                  </div>
                </div>

                <div className='trainInfo-there-time'>
                  <div className='trainInfo-direction'>
                    <svg viewBox='0 0 64 64' fill='#FFA800C9'><path d='m61 30.87-18.88-16.33a1.5 1.5 0 0 0 -2.48 1.13v7.83h-35.64a1.5 1.5 0 0 0 -1.5 1.5v14a1.5 1.5 0 0 0 1.5 1.5h35.64v7.83a1.51 1.51 0 0 0 2.48 1.13l18.88-16.33a1.49 1.49 0 0 0 0-2.26z'/></svg>
                  </div>
                </div>

                <div className='trainInfo-there-arrival'>
                  <div className='trainInfo-Time'>
                    {moment(currentTrain.arrivalTimeBack).format('LT')}
                  </div>

                  <div className='trainInfo-City'>
                    {currentTrain.arrivalCityBack}
                  </div>

                  <div className='trainInfo-Station'>
                    {currentTrain.arrivalStationBack}
                  </div>
                </div>
              </div>
            </div>

            <div className='places__trainInfo_line'></div>

            <div className='places__trainInfo__timeBlock'>
              <div className='places__trainInfo__timeBlockPic'>
                <svg viewBox='70 50 400 400' fill='#ffffff'><path d='M130.088,545.062l78.891-114.75h127.105l78.891,114.75h42.734l-79.502-115.63c26.87-4.6,47.334-27.932,47.334-56.104 V95.233c0-31.47-25.513-56.983-56.983-56.983h-48.204V19.125C320.354,8.559,311.795,0,301.229,0s-19.125,8.559-19.125,19.125 V38.25h-28.688V19.125C253.416,8.559,244.857,0,234.291,0s-19.125,8.559-19.125,19.125V38.25h-48.205 c-31.47,0-56.983,25.513-56.983,56.983v278.106c0,31.241,25.149,56.572,56.294,56.945L87.354,545.062H130.088z M346.058,380.54 c-16.381,0-29.663-13.282-29.663-29.663s13.282-29.663,29.663-29.663s29.663,13.282,29.663,29.663S362.438,380.54,346.058,380.54z M186.479,267.75h162.562c5.278,0,9.562,4.284,9.562,9.562s-4.284,9.562-9.562,9.562H186.479c-5.278,0-9.562-4.284-9.562-9.562 S181.2,267.75,186.479,267.75z M176.916,248.625c0-5.278,4.284-9.562,9.562-9.562h162.562c5.278,0,9.562,4.284,9.562,9.562 s-4.284,9.562-9.562,9.562H186.479C181.2,258.188,176.916,253.903,176.916,248.625z M148.229,104.987 c0-15.73,12.756-28.487,28.487-28.487h57.576h66.938h57.576c15.729,0,28.486,12.756,28.486,28.487v67.33 c0,15.74-12.757,28.496-28.486,28.496H176.715c-15.73,0-28.487-12.756-28.487-28.487V104.987z M152.675,350.877 c0-16.381,13.282-29.663,29.663-29.663c16.381,0,29.663,13.282,29.663,29.663s-13.282,29.663-29.663,29.663 C165.958,380.54,152.675,367.258,152.675,350.877z'/></svg>
              </div>
              <div className='places__trainInfo__timeBlockInfo'>
              <p>{currentTrain.timeTrackBack.slice(0, 2)} часов</p>
              <p>{currentTrain.timeTrackBack.slice(3, 5)} минут</p>
              </div>
            </div>
          </div>

          <div className='places__amountTickets'>
            <div className='places__amountTickets_title'>
              Количество билетов
            </div>

            <div className='places__amountTickets_blocks'>
              <div className='places__amountTickets_block places__amountTickets_blockActive'>
                <div className='places__amountTickets_blockTitle'>
                  Взрослых — {amountAdultTickets}
                </div>
                <div className='places__amountTickets_blockText'>
                  Можно добавить еще 3 пассажиров
                </div>
              </div>

              <div className='places__amountTickets_block'>
                <div className='places__amountTickets_blockTitle'>
                  Детских — 1
                </div>
                <div className='places__amountTickets_blockText'>
                Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%
                </div>
              </div>

              <div className='places__amountTickets_block'>
                <div className='places__amountTickets_blockTitle'>
                  Детских «без места» — 0
                </div>
                <div className='places__amountTickets_blockText'>
                   
                </div>
              </div>
            </div>
          </div>

          <div className='places__line'></div>

          <div className='places__typeWagon'>
            <div className='places__typeWagon_title'>
              Тип вагона
            </div>

            <div className='places__typeWagon__pictures'>
              <div className='places__typeWagon__pictureElm_Back' id='0' onClick={() => handleChangeTypeWagonBack()}>
                <div className='places__typeWagon__pictureSvg_Back'>
                  <svg className='places__typeWagon__svg_Back' viewBox='0 0 413 413' ><path d='M390.271,337.66l-39.809-112.445c-3.06-8.641-12.637-15.41-21.803-15.41h-50.723c-4.361,0-7.91-3.549-7.91-7.91v-79.293 c0-9.813-7.983-17.797-17.797-17.797h-2.369c18.737-8.773,31.753-27.801,31.753-49.82C281.615,24.666,256.948,0,226.63,0 c-30.32,0-54.986,24.666-54.986,54.985c0,22.171,13.197,41.305,32.142,49.996c-8.698,1.162-15.434,8.611-15.434,17.621v138.733 c0,9.789,7.963,17.753,17.813,17.752l86.149-0.296c5.348,0,12.46,4.004,15.221,8.569l33.63,55.624 c4.539,7.505,14.964,13.384,23.734,13.384h12.148c4.996,0,9.317-2.059,11.854-5.649C391.439,347.13,391.938,342.37,390.271,337.66z ' ></path></svg>
                </div>
                <div className='places__typeWagon__pictureText_Back'>
                  Сидячий
                </div>
              </div>

              <div className='places__typeWagon__pictureElm_Back' id='1' onClick={() => handleChangeTypeWagonBack()}>
                <div className='places__typeWagon__pictureSvg_Back'>
                  <svg className='places__typeWagon__svg_Back' viewBox='0 0 24 24'><path d='M12 17V21M8 21H16M6.2 17H17.8C18.9201 17 19.4802 17 19.908 16.782C20.2843 16.5903 20.5903 16.2843 20.782 15.908C21 15.4802 21 14.9201 21 13.8V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.71569 20.2843 3.40973 19.908 3.21799C19.4802 3 18.9201 3 17.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.07989 3 6.2V13.8C3 14.9201 3 15.4802 3.21799 15.908C3.40973 16.2843 3.71569 16.5903 4.09202 16.782C4.51984 17 5.07989 17 6.2 17Z' ></path></svg>
                </div>
                <div className='places__typeWagon__pictureText_Back'>
                  Плацкарт
                </div>
              </div>

              <div className='places__typeWagon__pictureElm_Back' id='2' onClick={() => handleChangeTypeWagonBack()}>
                <div className='places__typeWagon__pictureSvg_Back'>
                  <svg className='places__typeWagon__svg_Back' viewBox='0 0 24 24'><path d='M12 17V21M8 21H16M6.2 17H17.8C18.9201 17 19.4802 17 19.908 16.782C20.2843 16.5903 20.5903 16.2843 20.782 15.908C21 15.4802 21 14.9201 21 13.8V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.71569 20.2843 3.40973 19.908 3.21799C19.4802 3 18.9201 3 17.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.07989 3 6.2V13.8C3 14.9201 3 15.4802 3.21799 15.908C3.40973 16.2843 3.71569 16.5903 4.09202 16.782C4.51984 17 5.07989 17 6.2 17Z' ></path></svg>
                </div>
                <div className='places__typeWagon__pictureText_Back'>
                  Купе
                </div>
              </div>

              <div className='places__typeWagon__pictureElm_Back' id='3' onClick={() => handleChangeTypeWagonBack()}>
                <div className='places__typeWagon__pictureSvg_Back'>
                  <svg className='places__typeWagon__svg_Back' viewBox='0 2 32 32' ><path d='m29.64063 12.84277a.99975.99975 0 0 0 -.80713-.68066l-8.248-1.19922-3.6885-7.47363a1.041 1.041 0 0 0 -1.79394 0l-3.68848 7.47363-8.248 1.19922a.99972.99972 0 0 0 -.5542 1.70508l5.96827 5.81836-1.40877 8.21386a1.00012 1.00012 0 0 0 1.45112 1.05372l7.377-3.87793 7.377 3.87793a1.00013 1.00013 0 0 0 1.45118-1.05372l-1.4087-8.21386 5.96827-5.81836a.99924.99924 0 0 0 .25288-1.02442z'></path></svg>
                </div>
                <div className='places__typeWagon__pictureText_Back'>
                  Люкс
                </div>
              </div>
            </div>
          </div>
          <div className='places__viewBlock viewBlock__seat_Back hidden'>
            <div className='places__wagonInfo'>
            <div className='places__wagonInfo__wagonNumber'>
                <div className='places__wagonNumber__numbers'>
                  <span className='places__wagonNumber__spantext'>Вагоны</span>
                  <span className='places__wagonNumber__spanNumber wagonNumberActive'>15</span>
                  <span className='places__wagonNumber__spanNumber'>16</span>
                </div>
                <div className='places__wagonNumber__text'>
                  Нумерация вагонов начинается с головы поезда
                </div>
              </div>

              <div className='places__wagonInfo__detailedInfo'>
                <div className='places__detailedInfo__wagonNumber'>
                  <div className='wagonNumber__number'>16</div>
                  <div className='wagonNumber__text'>вагон</div>
                </div>

                <div className='places__detailedInfo__wagonPlaces'>
                  <div className='places__wagonPlaces__amountPlaces'>
                    Места {idSeatType?.trainAmount}
                  </div>
                </div>

                <div className='places__detailedInfo__wagonCosts'>
                  <div className='places__wagonCosts__text'>
                    Стоимость
                  </div>
                  <div className='places__wagonCosts__upperlowerCost'>
                    {idSeatType?.trainPrice} Р
                  </div>
                </div>

                <div className='places__detailedInfo__wagonOptions'>
                  <div className='places__wagonOptions__text'>
                    Обслуживание ФПК
                  </div>
                  <div className='places__wagonOptions__icons'>
                    <div className='places__wagonOptions__icon'>
                      <svg viewBox='-20 -20 180 180'><path d='M117.88,73.85l-22.42,6L68,64,95.46,48.15l22.42,6a2,2,0,0,0,1-3.86l-18.56-5,15.74-9.09a2,2,0,0,0-2-3.46L98.36,41.85l5-18.56a2,2,0,0,0-3.86-1l-6,22.42L69.65,58.43,96.14,14H108a2,2,0,0,0,0-4H95a2,2,0,0,0-1.72,1L80.43,32.54a35.57,35.57,0,0,0-14.43-4V4a2,2,0,0,0-4,0V28.56a35.2,35.2,0,0,0-14,3.76L35.73,11a2,2,0,1,0-3.46,2L44.56,34.32A35.68,35.68,0,0,0,34.32,44.56L13,32.27a2,2,0,1,0-2,3.46L32.32,48a35.2,35.2,0,0,0-3.76,14H4a2,2,0,0,0,0,4H28.56a35.38,35.38,0,0,0,3.75,14L11.08,92.34a2,2,0,1,0,2,3.46L34.3,83.51a35.52,35.52,0,0,0,9.84,9.9L31.86,114H20a2,2,0,0,0,0,4H33a2,2,0,0,0,1.72-1L62,71.26V99.17L45.59,115.59a2,2,0,0,0,2.82,2.82L62,104.83V123a2,2,0,0,0,4,0V104.83l13.59,13.58a2,2,0,0,0,2.82-2.82L66,99.17V67.46L93.46,83.32l6,22.42a2,2,0,0,0,3.86-1l-5-18.56,15.74,9.08a2,2,0,0,0,2-3.46l-15.74-9.09,18.56-5a2,2,0,0,0-1-3.86ZM32.5,64A31.49,31.49,0,0,1,78.38,36L62.27,63h0L46.19,90A31.28,31.28,0,0,1,32.5,64Z'></path></svg>
                      <span className='places__wagonOptions__tooltip'>кондиционер</span>
                    </div>
                    <div className='places__wagonOptions__icon'>
                      <svg viewBox='-130 -130 900 900'><path d='M306,51C191.25,51,84.15,89.25,0,153l306,408l306-408C527.85,89.25,420.75,51,306,51z M306,186.15 c-66.3,0-127.5,17.85-181.05,48.45l-51-68.85C142.8,124.95,221.85,102,306,102c84.15,0,163.2,22.95,232.05,63.75l-51,68.85 C433.5,204,372.3,186.15,306,186.15z'></path></svg>
                      <span className='places__wagonOptions__tooltip'>Wi-Fi</span>
                    </div>
                    <div className='places__wagonOptions__icon'>
                      <svg viewBox='-100 -100 700 700'><path d='m452 0h-392c-33.084 0-60 26.916-60 60v347c0 57.897 47.103 105 105 105h362c24.813 0 45-20.187 45-45 0-11.517-4.353-22.032-11.495-30 7.141-7.968 11.495-18.483 11.495-30s-4.353-22.032-11.495-30c7.141-7.968 11.495-18.483 11.495-30v-287c0-33.084-26.916-60-60-60zm-120 77.574 102.426 102.426h-102.426zm150-17.574v125.148l-155.148-155.148h125.148c16.542 0 30 13.458 30 30zm0 347c0 8.271-6.729 15-15 15h-362c-8.271 0-15-6.729-15-15s6.729-15 15-15h362c8.271 0 15 6.729 15 15zm-15-45h-362c-24.813 0-45 20.187-45 45s20.187 45 45 45h362c8.271 0 15 6.729 15 15s-6.729 15-15 15h-362c-41.355 0-75-33.645-75-75s33.645-75 75-75h362c8.271 0 15 6.729 15 15s-6.729 15-15 15zm15-57.42c-4.695-1.665-9.742-2.58-15-2.58h-362c-29.354 0-55.927 12.113-75 31.596v-273.596c0-16.542 13.458-30 30-30h212c16.542 0 30 13.458 30 30v150h150c16.542 0 30 13.458 30 30z'></path></svg>
                      <span className='places__wagonOptions__tooltip'>белье</span>
                    </div>
                    <div className='places__wagonOptions__icon'>
                      <svg viewBox='-70 70 612 612'><path d='M386.5,163h-341v285c0,19.556,12.539,36.239,30,42.43V512h270v-21.57c17.461-6.191,30-22.873,30-42.43v-16h11 c44.183,0,80-35.817,80-80V243C466.5,198.817,430.683,163,386.5,163z M415.5,353c0,16.541-13.459,29.989-30,29.99h-10V213.01h10 c16.541,0.001,30,13.449,30,29.99V353z'></path></svg>
                      <span className='places__wagonOptions__tooltip'>завтрак</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='places__choosePlace'>
              {Array.from({ length: 2 }, (_, seatIndex) => (
                <div key={seatIndex} className='places__choosePlace_seat'>
                  {seatSeats.slice(seatIndex * 32, seatIndex * 32 + 32).map(seat => (
                    <div
                      key={seat.number}
                      className={`places__choosePlace_seatSeat ${selectedSeatBack === seat.number+100 ? 'places__choosePlace_activeSeat' : ''}`}
                      onClick={() => handleSeatBackClick(seat.number+100)}>
                        {seat.number}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className='places__viewBlock viewBlock__plazcart_Back hidden'>
            <div className='places__wagonInfo'>
            <div className='places__wagonInfo__wagonNumber'>
                <div className='places__wagonNumber__numbers'>
                  <span className='places__wagonNumber__spantext'>Вагоны</span>
                  <span className='places__wagonNumber__spanNumber wagonNumberActive'>10</span>
                  <span className='places__wagonNumber__spanNumber'>11</span>
                </div>
                <div className='places__wagonNumber__text'>
                  Нумерация вагонов начинается с головы поезда
                </div>
              </div>

              <div className='places__wagonInfo__detailedInfo'>
                <div className='places__detailedInfo__wagonNumber'>
                  <div className='wagonNumber__number'>10</div>
                  <div className='wagonNumber__text'>вагон</div>
                </div>

                <div className='places__detailedInfo__wagonPlaces'>
                  <div className='places__wagonPlaces__amountPlaces'>
                    Места {idPlazcartType?.trainAmount}
                  </div>
                  <div className='places__wagonPlaces__upperlowerPlaces'>
                    Верхние 3
                  </div>
                  <div className='places__wagonPlaces__upperlowerPlaces'>
                    Нижние 8
                  </div>
                </div>

                <div className='places__detailedInfo__wagonCosts'>
                  <div className='places__wagonCosts__text'>
                    Стоимость
                  </div>
                  <div className='places__wagonCosts__upperlowerCost'>
                    {idPlazcartType?.trainPrice} Р
                  </div>
                  <div className='places__wagonCosts__upperlowerCost'>
                    {idPlazcartType?.trainPrice} Р
                  </div>
                </div>

                <div className='places__detailedInfo__wagonOptions'>
                  <div className='places__wagonOptions__text'>
                    Обслуживание ФПК
                  </div>
                  <div className='places__wagonOptions__icons'>
                    <div className='places__wagonOptions__icon'>
                      <svg viewBox='-20 -20 180 180'><path d='M117.88,73.85l-22.42,6L68,64,95.46,48.15l22.42,6a2,2,0,0,0,1-3.86l-18.56-5,15.74-9.09a2,2,0,0,0-2-3.46L98.36,41.85l5-18.56a2,2,0,0,0-3.86-1l-6,22.42L69.65,58.43,96.14,14H108a2,2,0,0,0,0-4H95a2,2,0,0,0-1.72,1L80.43,32.54a35.57,35.57,0,0,0-14.43-4V4a2,2,0,0,0-4,0V28.56a35.2,35.2,0,0,0-14,3.76L35.73,11a2,2,0,1,0-3.46,2L44.56,34.32A35.68,35.68,0,0,0,34.32,44.56L13,32.27a2,2,0,1,0-2,3.46L32.32,48a35.2,35.2,0,0,0-3.76,14H4a2,2,0,0,0,0,4H28.56a35.38,35.38,0,0,0,3.75,14L11.08,92.34a2,2,0,1,0,2,3.46L34.3,83.51a35.52,35.52,0,0,0,9.84,9.9L31.86,114H20a2,2,0,0,0,0,4H33a2,2,0,0,0,1.72-1L62,71.26V99.17L45.59,115.59a2,2,0,0,0,2.82,2.82L62,104.83V123a2,2,0,0,0,4,0V104.83l13.59,13.58a2,2,0,0,0,2.82-2.82L66,99.17V67.46L93.46,83.32l6,22.42a2,2,0,0,0,3.86-1l-5-18.56,15.74,9.08a2,2,0,0,0,2-3.46l-15.74-9.09,18.56-5a2,2,0,0,0-1-3.86ZM32.5,64A31.49,31.49,0,0,1,78.38,36L62.27,63h0L46.19,90A31.28,31.28,0,0,1,32.5,64Z'></path></svg>
                      <span className='places__wagonOptions__tooltip'>кондиционер</span>
                    </div>
                    <div className='places__wagonOptions__icon'>
                      <svg viewBox='-130 -130 900 900'><path d='M306,51C191.25,51,84.15,89.25,0,153l306,408l306-408C527.85,89.25,420.75,51,306,51z M306,186.15 c-66.3,0-127.5,17.85-181.05,48.45l-51-68.85C142.8,124.95,221.85,102,306,102c84.15,0,163.2,22.95,232.05,63.75l-51,68.85 C433.5,204,372.3,186.15,306,186.15z'></path></svg>
                      <span className='places__wagonOptions__tooltip'>Wi-Fi</span>
                    </div>
                    <div className='places__wagonOptions__icon places__wagonOptions__iconActive'>
                      <svg viewBox='-100 -100 700 700'><path d='m452 0h-392c-33.084 0-60 26.916-60 60v347c0 57.897 47.103 105 105 105h362c24.813 0 45-20.187 45-45 0-11.517-4.353-22.032-11.495-30 7.141-7.968 11.495-18.483 11.495-30s-4.353-22.032-11.495-30c7.141-7.968 11.495-18.483 11.495-30v-287c0-33.084-26.916-60-60-60zm-120 77.574 102.426 102.426h-102.426zm150-17.574v125.148l-155.148-155.148h125.148c16.542 0 30 13.458 30 30zm0 347c0 8.271-6.729 15-15 15h-362c-8.271 0-15-6.729-15-15s6.729-15 15-15h362c8.271 0 15 6.729 15 15zm-15-45h-362c-24.813 0-45 20.187-45 45s20.187 45 45 45h362c8.271 0 15 6.729 15 15s-6.729 15-15 15h-362c-41.355 0-75-33.645-75-75s33.645-75 75-75h362c8.271 0 15 6.729 15 15s-6.729 15-15 15zm15-57.42c-4.695-1.665-9.742-2.58-15-2.58h-362c-29.354 0-55.927 12.113-75 31.596v-273.596c0-16.542 13.458-30 30-30h212c16.542 0 30 13.458 30 30v150h150c16.542 0 30 13.458 30 30z'></path></svg>
                      <span className='places__wagonOptions__tooltip'>белье</span>
                    </div>
                    <div className='places__wagonOptions__icon'>
                      <svg viewBox='-70 70 612 612'><path d='M386.5,163h-341v285c0,19.556,12.539,36.239,30,42.43V512h270v-21.57c17.461-6.191,30-22.873,30-42.43v-16h11 c44.183,0,80-35.817,80-80V243C466.5,198.817,430.683,163,386.5,163z M415.5,353c0,16.541-13.459,29.989-30,29.99h-10V213.01h10 c16.541,0.001,30,13.449,30,29.99V353z'></path></svg>
                      <span className='places__wagonOptions__tooltip'>завтрак</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='places__choosePlace'>
              {Array.from({ length: 8 }, (_, plazcartIndex) => (
                <div key={plazcartIndex} className='places__choosePlace_plazcart'>
                  {plazcartSeats.slice(plazcartIndex * 4, plazcartIndex * 4 + 4).map(seat => (
                    <div
                      key={seat.number}
                      className={`places__choosePlace_plazcartSeat ${selectedSeatBack === seat.number+200 ? 'places__choosePlace_activeSeat' : ''}`}
                      onClick={() => handleSeatBackClick(seat.number+200)}>
                        {seat.number}
                    </div>
                  ))}
                </div>
              ))}
              {Array.from({ length: 8 }, (_, plazcartIndex) => (
                <div key={plazcartIndex + 32} className='places__choosePlace_plazcartSide'>
                  {plazcartSeats.slice(plazcartIndex * 2, plazcartIndex * 2 + 2).map(seat => (
                    <div
                      key={seat.number + 32}
                      className={`places__choosePlace_plazcartSeat ${selectedSeatBack === seat.number + 232 ? 'places__choosePlace_activeSeat' : ''}`}
                      onClick={() => handleSeatBackClick(seat.number + 232)}>
                        {seat.number + 32}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className='places__viewBlock viewBlock__coupe_Back hidden'>
            <div className='places__wagonInfo'>
              <div className='places__wagonInfo__wagonNumber'>
                <div className='places__wagonNumber__numbers'>
                  <span className='places__wagonNumber__spantext'>Вагоны</span>
                  <span className='places__wagonNumber__spanNumber wagonNumberActive'>07</span>
                  <span className='places__wagonNumber__spanNumber'>09</span>
                </div>
                <div className='places__wagonNumber__text'>
                  Нумерация вагонов начинается с головы поезда
                </div>
              </div>

              <div className='places__wagonInfo__detailedInfo'>
                <div className='places__detailedInfo__wagonNumber'>
                  <div className='wagonNumber__number'>07</div>
                  <div className='wagonNumber__text'>вагон</div>
                </div>

                <div className='places__detailedInfo__wagonPlaces'>
                  <div className='places__wagonPlaces__amountPlaces'>
                    Места {idCoupeType?.trainAmount}
                  </div>
                  <div className='places__wagonPlaces__upperlowerPlaces'>
                    Верхние 3
                  </div>
                  <div className='places__wagonPlaces__upperlowerPlaces'>
                    Нижние 8
                  </div>
                </div>

                <div className='places__detailedInfo__wagonCosts'>
                  <div className='places__wagonCosts__text'>
                    Стоимость
                  </div>
                  <div className='places__wagonCosts__upperlowerCost'>
                    {idCoupeType?.trainPrice} Р
                  </div>
                  <div className='places__wagonCosts__upperlowerCost'>
                    {idCoupeType?.trainPrice} Р
                  </div>
                </div>

                <div className='places__detailedInfo__wagonOptions'>
                  <div className='places__wagonOptions__text'>
                    Обслуживание ФПК
                  </div>
                  <div className='places__wagonOptions__icons'>
                    <div className='places__wagonOptions__icon'>
                      <svg viewBox='-20 -20 180 180'><path d='M117.88,73.85l-22.42,6L68,64,95.46,48.15l22.42,6a2,2,0,0,0,1-3.86l-18.56-5,15.74-9.09a2,2,0,0,0-2-3.46L98.36,41.85l5-18.56a2,2,0,0,0-3.86-1l-6,22.42L69.65,58.43,96.14,14H108a2,2,0,0,0,0-4H95a2,2,0,0,0-1.72,1L80.43,32.54a35.57,35.57,0,0,0-14.43-4V4a2,2,0,0,0-4,0V28.56a35.2,35.2,0,0,0-14,3.76L35.73,11a2,2,0,1,0-3.46,2L44.56,34.32A35.68,35.68,0,0,0,34.32,44.56L13,32.27a2,2,0,1,0-2,3.46L32.32,48a35.2,35.2,0,0,0-3.76,14H4a2,2,0,0,0,0,4H28.56a35.38,35.38,0,0,0,3.75,14L11.08,92.34a2,2,0,1,0,2,3.46L34.3,83.51a35.52,35.52,0,0,0,9.84,9.9L31.86,114H20a2,2,0,0,0,0,4H33a2,2,0,0,0,1.72-1L62,71.26V99.17L45.59,115.59a2,2,0,0,0,2.82,2.82L62,104.83V123a2,2,0,0,0,4,0V104.83l13.59,13.58a2,2,0,0,0,2.82-2.82L66,99.17V67.46L93.46,83.32l6,22.42a2,2,0,0,0,3.86-1l-5-18.56,15.74,9.08a2,2,0,0,0,2-3.46l-15.74-9.09,18.56-5a2,2,0,0,0-1-3.86ZM32.5,64A31.49,31.49,0,0,1,78.38,36L62.27,63h0L46.19,90A31.28,31.28,0,0,1,32.5,64Z'></path></svg>
                      <span className='places__wagonOptions__tooltip'>кондиционер</span>
                    </div>
                    <div className='places__wagonOptions__icon'>
                      <svg viewBox='-130 -130 900 900'><path d='M306,51C191.25,51,84.15,89.25,0,153l306,408l306-408C527.85,89.25,420.75,51,306,51z M306,186.15 c-66.3,0-127.5,17.85-181.05,48.45l-51-68.85C142.8,124.95,221.85,102,306,102c84.15,0,163.2,22.95,232.05,63.75l-51,68.85 C433.5,204,372.3,186.15,306,186.15z'></path></svg>
                      <span className='places__wagonOptions__tooltip'>Wi-Fi</span>
                    </div>
                    <div className='places__wagonOptions__icon places__wagonOptions__iconActive'>
                      <svg viewBox='-100 -100 700 700'><path d='m452 0h-392c-33.084 0-60 26.916-60 60v347c0 57.897 47.103 105 105 105h362c24.813 0 45-20.187 45-45 0-11.517-4.353-22.032-11.495-30 7.141-7.968 11.495-18.483 11.495-30s-4.353-22.032-11.495-30c7.141-7.968 11.495-18.483 11.495-30v-287c0-33.084-26.916-60-60-60zm-120 77.574 102.426 102.426h-102.426zm150-17.574v125.148l-155.148-155.148h125.148c16.542 0 30 13.458 30 30zm0 347c0 8.271-6.729 15-15 15h-362c-8.271 0-15-6.729-15-15s6.729-15 15-15h362c8.271 0 15 6.729 15 15zm-15-45h-362c-24.813 0-45 20.187-45 45s20.187 45 45 45h362c8.271 0 15 6.729 15 15s-6.729 15-15 15h-362c-41.355 0-75-33.645-75-75s33.645-75 75-75h362c8.271 0 15 6.729 15 15s-6.729 15-15 15zm15-57.42c-4.695-1.665-9.742-2.58-15-2.58h-362c-29.354 0-55.927 12.113-75 31.596v-273.596c0-16.542 13.458-30 30-30h212c16.542 0 30 13.458 30 30v150h150c16.542 0 30 13.458 30 30z'></path></svg>
                      <span className='places__wagonOptions__tooltip'>белье</span>
                    </div>
                    <div className='places__wagonOptions__icon places__wagonOptions__iconActive'>
                      <svg viewBox='-70 70 612 612'><path d='M386.5,163h-341v285c0,19.556,12.539,36.239,30,42.43V512h270v-21.57c17.461-6.191,30-22.873,30-42.43v-16h11 c44.183,0,80-35.817,80-80V243C466.5,198.817,430.683,163,386.5,163z M415.5,353c0,16.541-13.459,29.989-30,29.99h-10V213.01h10 c16.541,0.001,30,13.449,30,29.99V353z'></path></svg>
                      <span className='places__wagonOptions__tooltip'>завтрак</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='places__choosePlace'>
              {Array.from({ length: 8 }, (_, coupeIndex) => (
                <div key={coupeIndex} className='places__choosePlace_coupe'>
                  {coupeSeats.slice(coupeIndex * 4, coupeIndex * 4 + 4).map(seat => (
                    <div
                      key={seat.number}
                      className={`places__choosePlace_coupeSeat ${selectedSeatBack === seat.number+300 ? 'places__choosePlace_activeSeat' : ''}`}
                      onClick={() => handleSeatBackClick(seat.number+300)}>
                        {seat.number}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className='places__viewBlock viewBlock__lux_Back hidden'>
            <div className='places__wagonInfo'>
            <div className='places__wagonInfo__wagonNumber'>
                <div className='places__wagonNumber__numbers'>
                  <span className='places__wagonNumber__spantext'>Вагоны</span>
                  <span className='places__wagonNumber__spanNumber wagonNumberActive'>02</span>
                  <span className='places__wagonNumber__spanNumber'>03</span>
                </div>
                <div className='places__wagonNumber__text'>
                  Нумерация вагонов начинается с головы поезда
                </div>
              </div>

              <div className='places__wagonInfo__detailedInfo'>
                <div className='places__detailedInfo__wagonNumber'>
                  <div className='wagonNumber__number'>02</div>
                  <div className='wagonNumber__text'>вагон</div>
                </div>

                <div className='places__detailedInfo__wagonPlaces'>
                  <div className='places__wagonPlaces__amountPlaces'>
                    Места {idLuxType?.trainAmount}
                  </div>
                </div>

                <div className='places__detailedInfo__wagonCosts'>
                  <div className='places__wagonCosts__text'>
                    Стоимость
                  </div>
                  <div className='places__wagonCosts__upperlowerCost'>
                    {idLuxType?.trainPrice} Р
                  </div>
                </div>

                <div className='places__detailedInfo__wagonOptions'>
                  <div className='places__wagonOptions__text'>
                    Обслуживание ФПК
                  </div>
                  <div className='places__wagonOptions__icons'>
                    <div className='places__wagonOptions__icon places__wagonOptions__iconActive'>
                      <svg viewBox='-20 -20 180 180'><path d='M117.88,73.85l-22.42,6L68,64,95.46,48.15l22.42,6a2,2,0,0,0,1-3.86l-18.56-5,15.74-9.09a2,2,0,0,0-2-3.46L98.36,41.85l5-18.56a2,2,0,0,0-3.86-1l-6,22.42L69.65,58.43,96.14,14H108a2,2,0,0,0,0-4H95a2,2,0,0,0-1.72,1L80.43,32.54a35.57,35.57,0,0,0-14.43-4V4a2,2,0,0,0-4,0V28.56a35.2,35.2,0,0,0-14,3.76L35.73,11a2,2,0,1,0-3.46,2L44.56,34.32A35.68,35.68,0,0,0,34.32,44.56L13,32.27a2,2,0,1,0-2,3.46L32.32,48a35.2,35.2,0,0,0-3.76,14H4a2,2,0,0,0,0,4H28.56a35.38,35.38,0,0,0,3.75,14L11.08,92.34a2,2,0,1,0,2,3.46L34.3,83.51a35.52,35.52,0,0,0,9.84,9.9L31.86,114H20a2,2,0,0,0,0,4H33a2,2,0,0,0,1.72-1L62,71.26V99.17L45.59,115.59a2,2,0,0,0,2.82,2.82L62,104.83V123a2,2,0,0,0,4,0V104.83l13.59,13.58a2,2,0,0,0,2.82-2.82L66,99.17V67.46L93.46,83.32l6,22.42a2,2,0,0,0,3.86-1l-5-18.56,15.74,9.08a2,2,0,0,0,2-3.46l-15.74-9.09,18.56-5a2,2,0,0,0-1-3.86ZM32.5,64A31.49,31.49,0,0,1,78.38,36L62.27,63h0L46.19,90A31.28,31.28,0,0,1,32.5,64Z'></path></svg>
                      <span className='places__wagonOptions__tooltip'>кондиционер</span>
                    </div>
                    <div className='places__wagonOptions__icon places__wagonOptions__iconActive'>
                      <svg viewBox='-130 -130 900 900'><path d='M306,51C191.25,51,84.15,89.25,0,153l306,408l306-408C527.85,89.25,420.75,51,306,51z M306,186.15 c-66.3,0-127.5,17.85-181.05,48.45l-51-68.85C142.8,124.95,221.85,102,306,102c84.15,0,163.2,22.95,232.05,63.75l-51,68.85 C433.5,204,372.3,186.15,306,186.15z'></path></svg>
                      <span className='places__wagonOptions__tooltip'>Wi-Fi</span>
                    </div>
                    <div className='places__wagonOptions__icon places__wagonOptions__iconActive'>
                      <svg viewBox='-100 -100 700 700'><path d='m452 0h-392c-33.084 0-60 26.916-60 60v347c0 57.897 47.103 105 105 105h362c24.813 0 45-20.187 45-45 0-11.517-4.353-22.032-11.495-30 7.141-7.968 11.495-18.483 11.495-30s-4.353-22.032-11.495-30c7.141-7.968 11.495-18.483 11.495-30v-287c0-33.084-26.916-60-60-60zm-120 77.574 102.426 102.426h-102.426zm150-17.574v125.148l-155.148-155.148h125.148c16.542 0 30 13.458 30 30zm0 347c0 8.271-6.729 15-15 15h-362c-8.271 0-15-6.729-15-15s6.729-15 15-15h362c8.271 0 15 6.729 15 15zm-15-45h-362c-24.813 0-45 20.187-45 45s20.187 45 45 45h362c8.271 0 15 6.729 15 15s-6.729 15-15 15h-362c-41.355 0-75-33.645-75-75s33.645-75 75-75h362c8.271 0 15 6.729 15 15s-6.729 15-15 15zm15-57.42c-4.695-1.665-9.742-2.58-15-2.58h-362c-29.354 0-55.927 12.113-75 31.596v-273.596c0-16.542 13.458-30 30-30h212c16.542 0 30 13.458 30 30v150h150c16.542 0 30 13.458 30 30z'></path></svg>
                      <span className='places__wagonOptions__tooltip'>белье</span>
                    </div>
                    <div className='places__wagonOptions__icon places__wagonOptions__iconActive'>
                      <svg viewBox='-70 70 612 612'><path d='M386.5,163h-341v285c0,19.556,12.539,36.239,30,42.43V512h270v-21.57c17.461-6.191,30-22.873,30-42.43v-16h11 c44.183,0,80-35.817,80-80V243C466.5,198.817,430.683,163,386.5,163z M415.5,353c0,16.541-13.459,29.989-30,29.99h-10V213.01h10 c16.541,0.001,30,13.449,30,29.99V353z'></path></svg>
                      <span className='places__wagonOptions__tooltip'>завтрак</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='places__choosePlace'>
              {Array.from({ length: 8 }, (_, luxIndex) => (
                <div key={luxIndex} className='places__choosePlace_lux'>
                  {luxSeats.slice(luxIndex * 2, luxIndex * 2 + 2).map(seat => (
                    <div
                      key={seat.number}
                      className={`places__choosePlace_luxSeat ${selectedSeatBack === seat.number+400 ? 'places__choosePlace_activeSeat' : ''}`}
                      onClick={() => handleSeatBackClick(seat.number+400)}>
                        {seat.number}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='choose__place__confirm'>
          <button className='choose__place__btnConfirm' onClick={() => handleSelectPassanger(selectedSeatThere, selectedSeatBack)}>Далее</button>
        </div>

      </div>
    </>
  )
}