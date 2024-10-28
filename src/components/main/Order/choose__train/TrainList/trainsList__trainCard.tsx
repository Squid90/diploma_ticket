import React from 'react'
import { TrainCardItemProp } from '../data__train/data__trainCard';
import { TrainCard__trainInfo } from './trainCard__trainInfo';
import { TrainCard__trainNumber } from './trainCard__trainNumber';
import { TrainCard__trainPrice } from './trainCard__trainPrice';

interface TrainCardProps {
    train: TrainCardItemProp;
}


export const TrainsList__trainCard: React.FC<TrainCardProps> = ({ train }) => {

  return (
    <>
        <div className='trainsList-trainCard'>
            <div className='trainCard-trainNumber'>
                <div className='trainNumber-pic'>
                    <svg viewBox="70 50 400 400" fill="#ffffff"><path d="M130.088,545.062l78.891-114.75h127.105l78.891,114.75h42.734l-79.502-115.63c26.87-4.6,47.334-27.932,47.334-56.104 V95.233c0-31.47-25.513-56.983-56.983-56.983h-48.204V19.125C320.354,8.559,311.795,0,301.229,0s-19.125,8.559-19.125,19.125 V38.25h-28.688V19.125C253.416,8.559,244.857,0,234.291,0s-19.125,8.559-19.125,19.125V38.25h-48.205 c-31.47,0-56.983,25.513-56.983,56.983v278.106c0,31.241,25.149,56.572,56.294,56.945L87.354,545.062H130.088z M346.058,380.54 c-16.381,0-29.663-13.282-29.663-29.663s13.282-29.663,29.663-29.663s29.663,13.282,29.663,29.663S362.438,380.54,346.058,380.54z M186.479,267.75h162.562c5.278,0,9.562,4.284,9.562,9.562s-4.284,9.562-9.562,9.562H186.479c-5.278,0-9.562-4.284-9.562-9.562 S181.2,267.75,186.479,267.75z M176.916,248.625c0-5.278,4.284-9.562,9.562-9.562h162.562c5.278,0,9.562,4.284,9.562,9.562 s-4.284,9.562-9.562,9.562H186.479C181.2,258.188,176.916,253.903,176.916,248.625z M148.229,104.987 c0-15.73,12.756-28.487,28.487-28.487h57.576h66.938h57.576c15.729,0,28.486,12.756,28.486,28.487v67.33 c0,15.74-12.757,28.496-28.486,28.496H176.715c-15.73,0-28.487-12.756-28.487-28.487V104.987z M152.675,350.877 c0-16.381,13.282-29.663,29.663-29.663c16.381,0,29.663,13.282,29.663,29.663s-13.282,29.663-29.663,29.663 C165.958,380.54,152.675,367.258,152.675,350.877z"/></svg>
                </div>
                < TrainCard__trainNumber trainNumber={train.trainNumber} trainTrackFrom={train.trainTrackFrom} trainTrackTo={train.trainTrackTo} />
            </div>
            <div className='trainCard-trainInfo'>
                < TrainCard__trainInfo
                    departureTimeThere={train.departureTimeThere}
                    departureCityThere={train.departureCityThere}
                    departureStationThere={train.departureStationThere}
                    timeTrackThere={train.timeTrackThere}
                    arrivalTimeThere={train.arrivalTimeThere}
                    arrivalCityThere={train.arrivalCityThere}
                    arrivalStationThere={train.arrivalStationThere}
                    departureTimeBack={train.departureTimeBack}
                    departureCityBack={train.departureCityBack}
                    departureStationBack={train.departureStationBack}
                    timeTrackBack={train.timeTrackBack}
                    arrivalTimeBack={train.arrivalTimeBack}
                    arrivalCityBack={train.arrivalCityBack}
                    arrivalStationBack={train.arrivalStationBack} />
            </div>
            <div className='trainCard-trainPrice'>
                < TrainCard__trainPrice key={train.id} dataTrainType={train.dataTrainType} id={train.id} />
            </div>
        </div>
    </>
  )
}