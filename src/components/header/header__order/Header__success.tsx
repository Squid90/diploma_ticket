import './Header__order.css'
import { dataMenu } from '../data_header/data_header'
import { Logo } from '../logo'
import { Toolbar } from '../toolbar'



export const Header__success = () => {
  return (
    
    <>
      <div className='header'>
        <div className='header_background_success'>
          <div id='headerLogo'>
            < Logo />
            <div className='header__toolbar'>
              <Toolbar items = {dataMenu} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

