import React from 'react'

export interface ReviewCardProp {
    id: string;
    img: string;
    title: string;
    text: string;
}

export const Review_card: React.FC<ReviewCardProp> = (item) => {
    const {img, title, text} = item
  return (
    
    <>
        <div className='review__block'>
            <div className='review__img'>
                <img className='img__owner' src={img} alt="Photo"></img>
            </div>
            <div className='review__textBlock'>
                <h1 id='review__title'>{title}</h1>
                <q className='review__text'>{text}</q>
            </div>
        </div>
    </>

  )
}

