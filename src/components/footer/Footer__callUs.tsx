import { FC } from 'react'
import { CallUsItemProp, CallUs__item } from './CallUs__item'


interface CallUsDataProp {
    items: CallUsItemProp[]
}

export const Footer__callUs: FC<CallUsDataProp> = (data) => {
    const { items } =data
   
  return (
    <>
      <div className='callUs__info'>
        {items.map(item => <CallUs__item key={item.id} {...item} />)}
      </div>
    </>
  )
}