import './Header.css'
import { dataMenu } from './data_header/data_header'
import { Logo } from './logo'
import { Search__form } from './search-form'
import { Slogan } from './slogan'
import { Toolbar } from './toolbar'

export const Header = () => {
  return (
    
    <>
      <div className='header'>
        <div className='header_background'>
          <div id='headerLogo'>
            < Logo />
            <div className='header__toolbar'>
              <Toolbar items = {dataMenu} />
            </div>
          </div>
          <div className='header__forms'>
            <div className='header__slogan'> < Slogan /> </div>
            <div className='header__search'> < Search__form /> </div>
          </div>
          
          
        </div>
      </div>
    </>
  )
}

