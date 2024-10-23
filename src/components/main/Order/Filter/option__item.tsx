import React from 'react'

export interface TrainOptionItemProp {
    id: string;
    img: string;
    viewBox: string;
    title: string;
}



export const Option__item: React.FC<TrainOptionItemProp> = (item) => {
    const { id, img, viewBox, title } = item
  return (
    
    <>
        <div className='option-selection'>
            <div className='option-pic'>
                <svg viewBox={viewBox} fill='#E5E5E5' ><path d={img} stroke='#E5E5E5'></path></svg> 
            </div>
            <div className='option-name'>{title}</div>
            <div className='option-checkbox'>
                <label  className='switch'>
                    <input id={id} type='checkbox'/>
                    <span className='slider'></span>
                </label>
            </div>
        </div>
    </>

  )
}



