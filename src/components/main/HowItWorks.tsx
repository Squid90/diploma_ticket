import { Widgets } from "./Widgets"
import { dataWidgets } from "./data_main/data__widgets"


export const HowItWorks = () => {
  return (
    <>
        <div className='howItWorks'>Как это работает</div>
        <div className='howItWorks__knowMore'>
            <button className='howItWorks__btn'>Узнать больше</button>
        </div>
        <div className='howItWorks__widgets'>
            <Widgets items = {dataWidgets} />
        </div>
    </>
  )
}
