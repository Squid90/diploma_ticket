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
            <svg viewBox={viewBox} fill="none" ><path d={img} stroke="#E5E5E5"></path></svg>
        </a>
    </>

  )
}

