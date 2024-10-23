import './Choose__train.css'
import React from 'react';
import { Choose__filter } from '../Filter/choose__filter';
import { Choose__lastTicket } from './choose__lastTicket';
import { Choose__train__mainSide } from './choose__train__mainSide';
import { Choose__place__mainSide } from '../choose__place/choose__place__mainSide';
import { Routes, Route } from 'react-router-dom';
import { Choose__passangers__mainSide } from '../choose__passanger/choose__passangers__mainSide';
import { Passanger__LeftBlock } from '../choose__passanger/Passanger__LeftBlock';

export const Choose__train: React.FC = () => {
  
  return (
    <div className='choose__train'>
      <div className='choose__train__leftSide'>
        <div className='choose__filter'>
        <Routes>
            <Route path="/" element={<Choose__filter />} />
            <Route path="/chooseplace" element={<Choose__filter />} />
            <Route path="/chooseplace/choosepassangers" element={<Passanger__LeftBlock />} />
        </Routes>
        </div>
        <div className='choose__lastTicket'>
          <Routes>
            <Route path="/" element={<Choose__lastTicket />} />
            <Route path="/chooseplace" element={<Choose__lastTicket />} />
            <Route path="/chooseplace/choosepassangers/*" element={''} />
        </Routes>
        </div>
      </div>
      <div className='choose__train__mainSide' id='chooseTrainMainSide'>
      <Routes>
        <Route path="/" element={<Choose__train__mainSide />} />
        <Route path="/chooseplace" element={<Choose__place__mainSide />} />
        <Route path="/chooseplace/choosepassangers" element={<Choose__passangers__mainSide />} />
      </Routes>
      </div>
    </div>
  )
}
