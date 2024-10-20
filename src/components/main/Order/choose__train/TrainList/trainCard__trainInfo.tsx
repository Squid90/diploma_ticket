import moment from "moment";


export const TrainCard__trainInfo: React.FC<{
    departureTimeThere: any; 
    departureCityThere: string; 
    departureStationThere: string; 
    timeTrackThere: string;
    arrivalTimeThere: any;
    arrivalCityThere: string;
    arrivalStationThere: string;
    departureTimeBack: string;
    departureCityBack: string;
    departureStationBack: string;
    timeTrackBack: string;
    arrivalTimeBack: string;
    arrivalCityBack: string;
    arrivalStationBack: string;
}> = ({
    departureTimeThere,
    departureCityThere,
    departureStationThere,
    timeTrackThere,
    arrivalTimeThere,
    arrivalCityThere,
    arrivalStationThere,
    departureTimeBack,
    departureCityBack,
    departureStationBack,
    timeTrackBack,
    arrivalTimeBack,
    arrivalCityBack,
    arrivalStationBack,
}) => {

    const there_differenceInMilliseconds = ((Date.parse(arrivalTimeThere) - Date.parse(departureTimeThere)))
    const there_totalSeconds = Math.floor(there_differenceInMilliseconds / 1000);
    const there_hours = Math.floor(there_totalSeconds / 3600);
    const there_minutes = Math.floor((there_totalSeconds % 3600) / 60);
    const there_formattedHours = String(there_hours).padStart(2, '0');
    const there_formattedMinutes = String(there_minutes).padStart(2, '0');
    timeTrackThere = `${there_formattedHours}:${there_formattedMinutes}`;

    const back_differenceInMilliseconds = ((Date.parse(arrivalTimeBack) - Date.parse(departureTimeBack)))
    const back_totalSeconds = Math.floor(back_differenceInMilliseconds / 1000);
    const back_hours = Math.floor(back_totalSeconds / 3600);
    const back_minutes = Math.floor((back_totalSeconds % 3600) / 60);
    const back_formattedHours = String(back_hours).padStart(2, '0');
    const back_formattedMinutes = String(back_minutes).padStart(2, '0');
    timeTrackBack = `${back_formattedHours}:${back_formattedMinutes}`;


  return (
    <>
      <div className='trainInfo-there'>
            <div className='trainInfo-there-departure'>
                <div className='trainInfo-Time'>
                    {moment(departureTimeThere).format('LT')}
                </div>

                <div className='trainInfo-City'>
                    {departureCityThere}
                </div>

                <div className='trainInfo-Station'>
                    {departureStationThere}
                </div>
            </div>

            <div className='trainInfo-there-time'>
                <div className='trainInfo-timeTrack'>
                    {timeTrackThere}
                </div>
                <div className='trainInfo-direction'>
                    <svg viewBox="0 0 64 64" fill="#FFA800C9"><path d="m61 30.87-18.88-16.33a1.5 1.5 0 0 0 -2.48 1.13v7.83h-35.64a1.5 1.5 0 0 0 -1.5 1.5v14a1.5 1.5 0 0 0 1.5 1.5h35.64v7.83a1.51 1.51 0 0 0 2.48 1.13l18.88-16.33a1.49 1.49 0 0 0 0-2.26z"/></svg>
                </div>
            </div>

            <div className='trainInfo-there-arrival'>
                <div className='trainInfo-Time'>
                    {moment(arrivalTimeThere).format('LT')}
                </div>

                <div className='trainInfo-City'>
                    {arrivalCityThere}
                </div>

                <div className='trainInfo-Station'>
                    {arrivalStationThere}
                </div>
            </div>
        </div>

        <div className='trainInfo-back'>
            <div className='trainInfo-there-departure'>
                <div className='trainInfo-Time'>
                    {moment(departureTimeBack).format('LT')}
                </div>

                <div className='trainInfo-City'>
                    {departureCityBack}
                </div>

                <div className='trainInfo-Station'>
                    {departureStationBack}
                </div>
            </div>

            <div className='trainInfo-there-time'>
                <div className='trainInfo-timeTrack'>
                    {timeTrackBack}
                </div>
                <div className='trainInfo-direction'>
                    <svg viewBox="0 0 64 64" fill="#FFA800C9"><path d="m60 23.5h-35.64v-7.83a1.5 1.5 0 0 0 -2.48-1.13l-18.88 16.33a1.49 1.49 0 0 0 0 2.26l18.88 16.33a1.51 1.51 0 0 0 2.48-1.13v-7.83h35.64a1.5 1.5 0 0 0 1.5-1.5v-14a1.5 1.5 0 0 0 -1.5-1.5z"/></svg>
                </div>
            </div>

            <div className='trainInfo-there-arrival'>
                <div className='trainInfo-Time'>
                    {moment(arrivalTimeBack).format('LT')}
                </div>

                <div className='trainInfo-City'>
                    {arrivalCityBack}
                </div>

                <div className='trainInfo-Station'>
                    {arrivalStationBack}
                </div>
            </div>
        </div>
      
    </>
  )
}
