import './Choose_passanger.css'
import { useLocation } from "react-router-dom";
import { data_trainCard } from "../choose__train/data__train/data__trainCard";
import { data_ticket } from "../data_order/data_order";
import { useState } from 'react';
import { Passanger__Block } from './Passanger__Block';

export const Choose__passangers__mainSide: React.FC = () => {

  const location = useLocation();
  const id = location.state;
  const currentTrain = data_trainCard[id-1];
  const selectedSeat = data_ticket[0];

  

  const [passangerBlocks, setpassangerBlocks] = useState([{ value: '' }]);

  const addNewPassanger = () => {
    setpassangerBlocks([...passangerBlocks, { value: '' }]);
  };


  
  
  return (
    <>
    {passangerBlocks.map((_block, index) => (
        <Passanger__Block index={index}/>
      ))}

    <div className='passangers_passangerBlock_addNewPassangerBlock'>
      <div className='passangers_passangerBlock_addNewPassangerText'>Добавить пассажира</div>
      <div
        className='passangers_passangerBlock_addNewPassangerBtn'
        onClick={addNewPassanger}>+</div>
    </div>
    </>
  )
}
