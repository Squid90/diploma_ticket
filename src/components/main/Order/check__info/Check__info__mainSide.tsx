import { useNavigate } from 'react-router-dom';
import './Check__info.css'

import React from 'react'
import { TrainsList__trainCard } from '../choose__train/TrainList/trainsList__trainCard';

export const Check__info__mainSide: React.FC = () => {
  document.querySelector('.bar2')?.classList.add('active__bar');
  document.querySelector('.bar3')?.classList.add('active__bar');
  document.querySelector('.bar4')?.classList.add('active__bar');

  const navigate = useNavigate();
  const handleSelectConfirmData = () => {
    // navigate('/choosetrain/chooseplace/choosepassangers/choosepay/checkinfo', {});
    
    // window.scrollTo({
    //   top: 592,
    //   left: 0,
    //   behavior: 'smooth',
    // });
    console.log("Good")
  }
  const handleReturnToTrain = () => {
    navigate('/choosetrain', {});
    
    window.scrollTo({
      top: 592,
      left: 0,
      behavior: 'smooth',
    });
  }

  const handleReturnToPassanger = () => {
    navigate('/choosetrain/chooseplace/choosepassangers', {});
    
    window.scrollTo({
      top: 592,
      left: 0,
      behavior: 'smooth',
    });
  }

  const handleReturnToPayMethod = () => {
    navigate('/choosetrain/chooseplace/choosepassangers/choosepay', {});
    
    window.scrollTo({
      top: 592,
      left: 0,
      behavior: 'smooth',
    });

  }

  return (
    <div className='check__info__mainSide'>
      <div className='check__info__mainSide__checkBlok'>
        <div className='check__info__mainSide__checkTrain'>
          <div className='check__info__mainSide__title'>
            Поезд
          </div>
          <div className='check__info__mainSide__line'></div>
          <div className='check__info__mainSide__trainCard'>
            Тут будет карточка поезда
            {/* <TrainsList__trainCard key={} train={} /> */}
          </div>
        </div>

        <div className='check__info__mainSide__checkPassanger'>
          <div className='check__info__mainSide__title'>
            Пассажиры
          </div>
          <div className='check__info__mainSide__line'></div>
          <div className='check__info__mainSide__passangerBlock'>
            <div className='check__info__mainSide__passangers'>
              Тут будут карточки пассажиров
            </div>
            <div className='check__info__mainSide__costBlock'>
              <div className='check__info__mainSide__cost'>
                <div className='check__info__mainSide__costTitle'>
                  Всего
                </div>
                <div className='check__info__mainSide__costPrice'>
                  5 840 <span>P</span>
                </div>
              </div>
              <button
                className='check__info__mainSide__changeBtn'
                onClick={handleReturnToPassanger}>Изменить</button>
            </div>
          </div>
        </div>

        <div className='check__info__mainSide__checkPay'>
          <div className='check__info__mainSide__title'>
            Способ оплаты
          </div>
          <div className='check__info__mainSide__line'></div>
          <div className='check__info__mainSide__payMethodBlock'>
            <div className='check__info__mainSide__payMethodText'>
              Наличные
            </div>
            <div className='check__info__mainSide__payMethodbtnBlock'>
              <button
                className='check__info__mainSide__changeBtn'
                onClick={handleReturnToPayMethod}>Изменить</button>
            </div>
          </div>
        </div>
      </div>
      <div className='check__info__mainSide__nextPage'>
        <button
          className='check__info__mainSide__nextPagebtn'
          onClick={handleSelectConfirmData}>Купить билеты</button>
      </div>
    </div>
  )
}
