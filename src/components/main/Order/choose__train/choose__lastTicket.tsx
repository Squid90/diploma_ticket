import { dataLastTicket } from "./data__train/data__tickets"
import { LastTicket__tickets } from "./lastTicket__tickets"


export const Choose__lastTicket = () => {
  return (
    <>
        <div className='lastTicket__title'>последние билеты</div>
        <div className='lastTicket__tickets'>
            <LastTicket__tickets items = {dataLastTicket}/>
        </div>
    </>
  )
}
