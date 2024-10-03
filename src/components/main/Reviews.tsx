import { Reviews_cards } from "./Reviews_cards"
import { dataReviews } from "./data_main/data_reviews"

export const Reviews = () => {
  return (
    <>
        <div className='reviews_title'>ОТЗЫВЫ</div>
        <div className='reviews_cards'>
          <Reviews_cards items = {dataReviews} />
        </div>
        <div className='reviews_dots'>
          <div className='dots_line'>
            <div className='dot dot_active'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
          </div>
        </div>
    </>
  )
}
