import React from 'react'

export interface CallUsItemProp {
    id: string;
    img: string;
    text: string;
    link: string;
    viewBox: string;
}

export const CallUs__item: React.FC<CallUsItemProp> = (item) => {
    const {img, text, link, viewBox} = item
  return (
    
    <>
        <a className='callUs__group' href={link}>
            <div className='callUs__pic'>
                <svg viewBox={viewBox} fill="none" ><path d={img} stroke="#E5E5E5"></path></svg>
            </div>
            <div className='callUs__text'>
                {text}
            </div>
        </a>
    </>

  )
}

