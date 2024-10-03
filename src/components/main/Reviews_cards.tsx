import { FC } from 'react'
import { ReviewCardProp, Review_card } from './Review_card'

interface ReviewDataProp {
    items: ReviewCardProp[]
}

export const Reviews_cards: FC<ReviewDataProp> = (data) => {
    const { items } = data
   
  return (
    <>
        {items.map(item => <Review_card key={item.id} {...item} />)}
    </>
  )
}