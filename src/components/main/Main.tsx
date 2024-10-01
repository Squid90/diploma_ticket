import { About } from "./About"
import { HowItWorks } from "./HowItWorks"
import { Reviews } from "./Reviews"


export const Main = () => {
  return (
    <div className="main">
      <div className="main__about">
        <About />
      </div>
      <div className="main__howItWorks">
        <HowItWorks />
      </div>
      <div className="main__reviews">
        <Reviews />
      </div>
    </div>
  )
}
