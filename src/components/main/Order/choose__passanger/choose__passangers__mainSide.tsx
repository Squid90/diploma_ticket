import './Choose_passanger.css'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { Passanger__Block } from './Passanger__Block';

export const Choose__passangers__mainSide: React.FC = () => {

  document.querySelector('.bar2')?.classList.add('active__bar');
  document.querySelector('.bar3')?.classList.remove('active__bar');
  document.querySelector('.bar4')?.classList.remove('active__bar');

  const navigate = useNavigate();
  const handleSelectPay = () => {
    navigate('/choosetrain/chooseplace/choosepassangers/choosepay', {});
    
    window.scrollTo({
      top: 592,
      left: 0,
      behavior: 'smooth',
    });
  };

  const [passangerBlocks, setpassangerBlocks] = useState([{ value: '' }]);

  const addNewPassanger = () => {
    setpassangerBlocks([...passangerBlocks, { value: '' }]);
  };

  setTimeout(() => {
    document.querySelector('.passangers_passangerBlock__nextPageBtn')?.setAttribute('disabled', '');
  }, 100);
  
  return (
    <>
    {passangerBlocks.map((_block, index) => (
        <Passanger__Block key={index} index={index}/>
      ))}

    <div className='passangers_passangerBlock_addNewPassangerBlock'>
      <div className='passangers_passangerBlock_addNewPassangerText'>Добавить пассажира</div>
      <div
        className='passangers_passangerBlock_addNewPassangerBtn'
        onClick={addNewPassanger}>+</div>
    </div>

    <div className='passangers_passangerBlock__nextPage'>
      <button 
        className='passangers_passangerBlock__nextPageBtn'
        onClick={handleSelectPay}
        >Далее</button>
    </div>
    </>
  )
}
