import { useNavigate } from 'react-router-dom';
import './Check__info.css'
import React from 'react'
import { TrainsList__trainCard } from '../choose__train/TrainList/trainsList__trainCard';
import { data_ticket } from '../data_order/data_order';
import { data_trainCard } from '../choose__train/data__train/data__trainCard';
import moment from 'moment';

export const Check__info__mainSide: React.FC = () => {
  document.querySelector('.bar2')?.classList.add('active__bar');
  document.querySelector('.bar3')?.classList.add('active__bar');
  document.querySelector('.bar4')?.classList.add('active__bar');

  setTimeout(() => {
    document.querySelector('.trainPrice-btn')?.classList.add('hidden');
    const changeBtn = document.querySelectorAll('.check__info__mainSide__changeBtn');
    changeBtn.forEach( e => {
        e.classList.remove('hidden');
    });
  }, 100);

  const selectedInfo = data_ticket[0];
  const currentTrain = data_trainCard[Number(selectedInfo.trainIdSelect)]
  console.log(currentTrain)
  

  const navigate = useNavigate();
  const handleSelectConfirmData = () => {
    navigate('/choosetrain/chooseplace/choosepassangers/choosepay/checkinfo/success', {});
    
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
            <TrainsList__trainCard key={currentTrain.id} train={currentTrain} />
          </div>
        </div>

        <div className='check__info__mainSide__checkPassanger'>
          <div className='check__info__mainSide__title'>
            Пассажиры
          </div>
          <div className='check__info__mainSide__line'></div>
          <div className='check__info__mainSide__passangerBlock'>
            <div className='check__info__mainSide__passangers'>
              <div className='check__info__mainSide__passanger'>
                <div className='check__info__passanger__logo'>
                  <div className='check__info__passanger__logoPic'>
                  <svg viewBox="0 0 299.997 299.997"><path d="M149.996,0C67.157,0,0.001,67.158,0.001,149.997c0,82.837,67.156,150,149.995,150s150-67.163,150-150 C299.996,67.156,232.835,0,149.996,0z M150.453,220.763v-0.002h-0.916H85.465c0-46.856,41.152-46.845,50.284-59.097l1.045-5.587 c-12.83-6.502-21.887-22.178-21.887-40.512c0-24.154,15.712-43.738,35.089-43.738c19.377,0,35.089,19.584,35.089,43.738 c0,18.178-8.896,33.756-21.555,40.361l1.19,6.349c10.019,11.658,49.802,12.418,49.802,58.488H150.453z"/></svg>
                  </div>
                  <div className='check__info__passanger__logoTitle'>
                    Взрослый
                  </div>
                </div>
                <div className='check__info__passanger__info'>
                  <div className='check__info__passanger__infolabel infolabel_FIO'>
                    {selectedInfo.surnameSelect} {selectedInfo.nameSelect} {selectedInfo.middlenameSelect}
                  </div>
                  <div className='check__info__passanger__infolabel infolabel_Gender'>
                    Пол Мужской
                  </div>
                  <div className='check__info__passanger__infolabel infolabel_Birthday'>
                    Дата рождения {moment(selectedInfo.birthdaySelect).format('DD-MM-YYYY')}
                  </div>
                  <div className='check__info__passanger__infolabel infolabel_Document'>
                    {selectedInfo.documentTypeSelect} {selectedInfo.documentSeriesSelect} {selectedInfo.documentNumberSelect}
                  </div>
                </div>
              </div>
              
            </div>
            <div className='check__info__mainSide__costBlock'>
              <div className='check__info__mainSide__cost'>
                <div className='check__info__mainSide__costTitle'>
                  Всего
                </div>
                <div className='check__info__mainSide__costPrice'>
                  {selectedInfo.ticketPriceSelect} <span>P</span>
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
              {selectedInfo.payMethodSelect}
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
