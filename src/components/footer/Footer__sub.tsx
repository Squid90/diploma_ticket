import { FC } from 'react'
import { SubItemProp, Sub__item } from './Sub__item'


interface SubDataProp {
    items: SubItemProp[]
}

export const Footer__sub: FC<SubDataProp> = (data) => {
    const { items } =data
   
  return (
    <>
      <div className='subscription__group'>
        {items.map(item => <Sub__item key={item.id} {...item} />)}
      </div>
    </>
  )
}