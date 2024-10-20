import './Header.css'
import { dataMenu } from './data_header/data_header'
import { Logo } from './logo'
import { Search__form } from './search-form'
import { Slogan } from './slogan'
import { Toolbar } from './toolbar'

export const Header = () => {
  return (
    
    <>
      <div className='header_main'>
        <div className='header_background_main'>
          <div id='headerLogo_main'>
            < Logo />
            <div className='header__toolbar_main'>
              <Toolbar items = {dataMenu} />
            </div>
          </div>
          <div className='header__forms_main'>
            <div className='header__slogan_main'> < Slogan /> </div>
            <div className='header__search_main'> < Search__form /> </div>
          </div>
        </div>
      </div>
    </>
  )
}

