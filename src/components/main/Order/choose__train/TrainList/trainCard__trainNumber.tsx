
export const TrainCard__trainNumber: React.FC<{
  trainNumber: string;
  trainTrackFrom: string;
  trainTrackTo: string;
}> = ({ trainNumber, trainTrackFrom, trainTrackTo }) => {

  return (
    <>
        <div className='trainNumber-number'>
          {trainNumber}
        </div>
        <div className='trainNumber-track'>
          <p>{trainTrackFrom} → </p>
          <p>{trainTrackTo}</p>
        </div>
        </>
  )
}
