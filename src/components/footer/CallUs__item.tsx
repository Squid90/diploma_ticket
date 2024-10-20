import React from 'react'

export interface CallUsItemProp {
    id: string;
    img: string;
    text: string;
    viewBox: string;
}

export const CallUs__item: React.FC<CallUsItemProp> = (item) => {
    const {img, text, viewBox} = item
  return (
    
    <>
        <div className='callUs__group'>
            <div className='callUs__pic'>
                <svg viewBox={viewBox} fill="#E5E5E5" stroke="#E5E5E5"><path d={img} ></path></svg>
            </div>
            <div className='callUs__text'>
                {text}
            </div>
        </div>
    </>

  )
}

