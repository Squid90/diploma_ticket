import { dataTrainOptions } from "../choose__train/data__train/data__options"
import { Filter__date } from "./filter__date"
import { Filter__direction__back } from "./filter__direction__back"
import { Filter__direction__there } from "./filter__direction__there"
import { Filter__price } from "./filter__price"
import { Train__options } from "./train__options"


export const minTime = "00:00"
export const maxTime = "24:00"
export const timeToMinutes = (time: string): number => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
};
export const minutesToTime = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
};


export const Choose__filter = () => {
  return (
    <>
        <div className='filter__date'>
            <Filter__date />
        </div>
        <div className='filter__line'></div>
        <div className='filter__type'>
            <Train__options items = {dataTrainOptions} />
        </div>
        <div className='filter__line'></div>
        <div className='filter__price'>
            <Filter__price />
        </div>
        <div className='filter__line'></div>
        <div className='direction-there'>
            <Filter__direction__there />
        </div>
        <div className='filter__line'></div>
        <div className='direction-back'>
            <Filter__direction__back />
        </div>
    </>
  )
}
