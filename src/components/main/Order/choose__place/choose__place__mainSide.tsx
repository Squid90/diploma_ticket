// import { Link } from "react-router-dom"
// to="/choosetrain/chooseplace/choosepassangers"
import './Choose_place.css'
import { useLocation } from "react-router-dom";
import { data_trainCard } from "../choose__train/data__train/data__trainCard";
import { TrainCard__trainNumber } from '../choose__train/TrainList/trainCard__trainNumber';
import moment from 'moment';


export const Choose__place__mainSide: React.FC = () => {

  const location = useLocation();
  const id = location.state;
  const currentTrain = data_trainCard[id-1];
  return (
    <>
      <div className='choose__place__mainSide'>
        <div className='choose__place__title'>
          Выбор мест
        </div>

        <div className='choose__place__placesThere'>
          <div className='placesThere__direction'>
            <div className='placesThere__directionPic'>
              <svg viewBox="-43 -26 150 150"><path d="m61 30.87-18.88-16.33a1.5 1.5 0 0 0 -2.48 1.13v7.83h-35.64a1.5 1.5 0 0 0 -1.5 1.5v14a1.5 1.5 0 0 0 1.5 1.5h35.64v7.83a1.51 1.51 0 0 0 2.48 1.13l18.88-16.33a1.49 1.49 0 0 0 0-2.26z"/></svg>
            </div>
            <button className='placesThere__btnChangeTrain'>Выбрать другой поезд</button>
          </div>

          <div className='placesThere__trainInfo'>
            <div className='placesThere__trainInfo__numberBlok'>
              <div className='placesThere__trainInfo__numberBlokPic'>
                <svg viewBox="70 50 400 400" fill="#ffffff"><path d="M130.088,545.062l78.891-114.75h127.105l78.891,114.75h42.734l-79.502-115.63c26.87-4.6,47.334-27.932,47.334-56.104 V95.233c0-31.47-25.513-56.983-56.983-56.983h-48.204V19.125C320.354,8.559,311.795,0,301.229,0s-19.125,8.559-19.125,19.125 V38.25h-28.688V19.125C253.416,8.559,244.857,0,234.291,0s-19.125,8.559-19.125,19.125V38.25h-48.205 c-31.47,0-56.983,25.513-56.983,56.983v278.106c0,31.241,25.149,56.572,56.294,56.945L87.354,545.062H130.088z M346.058,380.54 c-16.381,0-29.663-13.282-29.663-29.663s13.282-29.663,29.663-29.663s29.663,13.282,29.663,29.663S362.438,380.54,346.058,380.54z M186.479,267.75h162.562c5.278,0,9.562,4.284,9.562,9.562s-4.284,9.562-9.562,9.562H186.479c-5.278,0-9.562-4.284-9.562-9.562 S181.2,267.75,186.479,267.75z M176.916,248.625c0-5.278,4.284-9.562,9.562-9.562h162.562c5.278,0,9.562,4.284,9.562,9.562 s-4.284,9.562-9.562,9.562H186.479C181.2,258.188,176.916,253.903,176.916,248.625z M148.229,104.987 c0-15.73,12.756-28.487,28.487-28.487h57.576h66.938h57.576c15.729,0,28.486,12.756,28.486,28.487v67.33 c0,15.74-12.757,28.496-28.486,28.496H176.715c-15.73,0-28.487-12.756-28.487-28.487V104.987z M152.675,350.877 c0-16.381,13.282-29.663,29.663-29.663c16.381,0,29.663,13.282,29.663,29.663s-13.282,29.663-29.663,29.663 C165.958,380.54,152.675,367.258,152.675,350.877z"/></svg>
              </div>
              <div className='placesThere__trainInfo__numberBlokNumber'>
                <TrainCard__trainNumber trainNumber={currentTrain.trainNumber} trainTrackFrom={currentTrain.departureCityThere} trainTrackTo={currentTrain.arrivalCityThere} />
              </div>
            </div>

            <div className='placesThere__trainInfo_line'></div>

            <div className='placesThere__trainInfo__directionBlok'>
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
                    <svg viewBox="0 0 64 64" fill="#FFA800C9"><path d="m61 30.87-18.88-16.33a1.5 1.5 0 0 0 -2.48 1.13v7.83h-35.64a1.5 1.5 0 0 0 -1.5 1.5v14a1.5 1.5 0 0 0 1.5 1.5h35.64v7.83a1.51 1.51 0 0 0 2.48 1.13l18.88-16.33a1.49 1.49 0 0 0 0-2.26z"/></svg>
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

            <div className='placesThere__trainInfo_line'></div>

            <div className='placesThere__trainInfo__timeBlock'>
              <div className='placesThere__trainInfo__timeBlockPic'>
                <svg viewBox="70 50 400 400" fill="#ffffff"><path d="M130.088,545.062l78.891-114.75h127.105l78.891,114.75h42.734l-79.502-115.63c26.87-4.6,47.334-27.932,47.334-56.104 V95.233c0-31.47-25.513-56.983-56.983-56.983h-48.204V19.125C320.354,8.559,311.795,0,301.229,0s-19.125,8.559-19.125,19.125 V38.25h-28.688V19.125C253.416,8.559,244.857,0,234.291,0s-19.125,8.559-19.125,19.125V38.25h-48.205 c-31.47,0-56.983,25.513-56.983,56.983v278.106c0,31.241,25.149,56.572,56.294,56.945L87.354,545.062H130.088z M346.058,380.54 c-16.381,0-29.663-13.282-29.663-29.663s13.282-29.663,29.663-29.663s29.663,13.282,29.663,29.663S362.438,380.54,346.058,380.54z M186.479,267.75h162.562c5.278,0,9.562,4.284,9.562,9.562s-4.284,9.562-9.562,9.562H186.479c-5.278,0-9.562-4.284-9.562-9.562 S181.2,267.75,186.479,267.75z M176.916,248.625c0-5.278,4.284-9.562,9.562-9.562h162.562c5.278,0,9.562,4.284,9.562,9.562 s-4.284,9.562-9.562,9.562H186.479C181.2,258.188,176.916,253.903,176.916,248.625z M148.229,104.987 c0-15.73,12.756-28.487,28.487-28.487h57.576h66.938h57.576c15.729,0,28.486,12.756,28.486,28.487v67.33 c0,15.74-12.757,28.496-28.486,28.496H176.715c-15.73,0-28.487-12.756-28.487-28.487V104.987z M152.675,350.877 c0-16.381,13.282-29.663,29.663-29.663c16.381,0,29.663,13.282,29.663,29.663s-13.282,29.663-29.663,29.663 C165.958,380.54,152.675,367.258,152.675,350.877z"/></svg>
              </div>
              <div className='placesThere__trainInfo__timeBlockInfo'>
                {currentTrain.timeTrackThere}
              </div>
            </div>
          </div>

          <div className='placesThere__amountTickets'>

          </div>

          <div className='placesThere__line'></div>

          <div className='placesThere__typeWagon'>

          </div>

          <div className='placesThere__wagonInfo'>

          </div>

          <div className='placesThere__choosePlace'>

          </div>
        </div>

        <div className='choose__place__placesBack'>

        </div>

        <div className='choose__place__confirm'>
          <button className='choose__place__btnConfirm'>Далее</button>
        </div>

      </div>
    </>
  )
}






{/* <div>
<h1>Выбор места для поезда</h1>
{id ? (
    <div>
        <h2>Номер поезда: {currentTrain.trainNumber}</h2>
        
        <h3>Типы вагонов</h3>
        <ul>
            {currentTrain.dataTrainType.map((wagon, index) => (
                <li key={index}>
                    {wagon.trainType} - {wagon.trainPrice} ₽
                </li>
            ))}
        </ul>


    </div>
) : (
    <p>Данные о поезде не найдены.</p>
)}
</div> */}