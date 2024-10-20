import { FC } from 'react'
import { TrainOptionItemProp, Option__item } from './option__item'


interface TrainOptionDataProp {
    items: TrainOptionItemProp[]
}

export const Train__options: FC<TrainOptionDataProp> = (data) => {
    const { items } = data
   
  return (
    <>
        {items.map(item => <Option__item key={item.id} {...item} />)}

    </>
  )
}