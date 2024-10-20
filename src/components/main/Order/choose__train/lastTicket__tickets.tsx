import { FC } from 'react'
import { LastTicketItemProp, LastTicket__item } from './lastTicket__item'


interface LastTicketDataProp {
    items: LastTicketItemProp[]
}

export const LastTicket__tickets: FC<LastTicketDataProp> = (data) => {
    const { items } = data
   
  return (
    <>
        {items.map(item => <LastTicket__item key={item.id} {...item} />)}

    </>
  )
}