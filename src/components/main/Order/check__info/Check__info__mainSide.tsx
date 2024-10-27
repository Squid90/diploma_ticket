import './Check__info.css'

import React from 'react'

export const Check__info__mainSide: React.FC = () => {
    document.querySelector('.bar2')?.classList.add('active__bar');
    document.querySelector('.bar3')?.classList.add('active__bar');
    document.querySelector('.bar4')?.classList.add('active__bar');

  return (
    <div className='Check__info__mainSide'>Check__info__mainSide</div>
  )
}
