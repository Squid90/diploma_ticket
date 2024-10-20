import React from 'react'

export interface SubItemProp {
    id: string;
    img: string;
    link: string;
    viewBox: string;
}

export const Sub__item: React.FC<SubItemProp> = (item) => {
    const {img, link, viewBox} = item
  return (
    
    <>
        <a className='subscription__pic' href={link}>
            <svg viewBox={viewBox} fill="#E5E5E5" stroke="#E5E5E5"><path d={img} ></path></svg>
        </a>
    </>

  )
}

