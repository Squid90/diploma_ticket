import './Main.css'
import { About } from "./About"
import { HowItWorks } from "./HowItWorks"
import { Reviews } from "./Reviews"


export const Main = () => {
  return (
    <div className="main">
      <div className="main__about" id='mainAbout'>
        <About />
      </div>
      <div className="main__howItWorks" id='mainHowItWorks'>
        <HowItWorks />
      </div>
      <div className="main__reviews" id='mainReviews'>
        <Reviews />
      </div>
    </div>
  )
}
