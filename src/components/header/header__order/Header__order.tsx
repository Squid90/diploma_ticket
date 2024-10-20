import './Header__order.css'
import { dataMenu } from '../data_header/data_header'
import { Logo } from '../logo'
import { Toolbar } from '../toolbar'
import { Search__form__order } from './search-form__order'



export const Header__order = () => {
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
          <div className='order__search'> < Search__form__order /> </div>
        </div>
        <div className='header__progress'>
          <div className='progress__bar bar1 active__bar'>
            <div className='progress__number'>1</div>
            Билеты
          </div>
          <div className='progress__bar bar2'>
            <div className='progress__number'>2</div>
            Пассажиры
          </div>
          <div className='progress__bar bar3'>
            <div className='progress__number'>3</div>
            Оплата
          </div>
          <div className='progress__bar bar4'>
            <div className='progress__number'>4</div>
            Проверка
          </div>
        </div>
      </div>
    </>
  )
}

