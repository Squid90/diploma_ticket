import React from 'react'



export interface WidgetItemProp {
    title: string;
    link: string;
    viewBox: string;
    img: string;
}

export const Widget__item: React.FC<WidgetItemProp> = (item) => {
    const {title, link, viewBox, img} = item
  return (
    
    <>
      <a id='widget__link' href={link}>
        <div className='widget__circle'>
          <div className='widget__svg'>
          <svg viewBox={viewBox} fill="none" ><path d={img} stroke="#ffd600"></path></svg>
          
          </div>
        </div>
        <div className='widget__title'>{title}</div>
      </a>
    </>

  )
}

