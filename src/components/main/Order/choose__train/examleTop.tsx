import React from 'react'
import CardSorter from './example'
import { TrainCardItemProp } from './data__train/data__trainCard';

interface TrainCardProps {
    train: TrainCardItemProp;
  }


export const ExamleTop: React.FC<TrainCardProps> = ({ train }) => {

  return (
    <CardSorter 
    departureTimeThere={train.departureTimeThere}
    timeTrackThere={train.timeTrackThere}
    arrivalTimeThere={train.arrivalTimeThere}
       />
  )
}
