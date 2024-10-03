import './Footer.css'
import { Footer__callUs } from './Footer__callUs'
import { Footer__sub } from './Footer__sub'
import { dataCallUs } from './data_footer/data_callUs'
import { dataSub } from './data_footer/data_sub'

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__info' id='footerInfo'>
        <div className='footer__callUs'>
          <div className='callUs__title'>Свяжитесь с нами</div>
          < Footer__callUs items = {dataCallUs} />
        </div>
        <div className='footer__subscription'>
          <div className='subscription__title'>Подписка</div>
          <div className='subscription__underTitle'>Будьте в курсе событий</div>
          <form className='subscription__form'>
            <input className='subscription__input' placeholder='e-mail'></input>
            <button className='subscription__btn'>Отправить</button>
          </form>
          <div className='subscription__social'>Подписывайтесь на нас</div>
            < Footer__sub items = {dataSub} />
          </div>
      </div>
      <div className='footer__line'></div>
      <div className='footer__logo'>
        <div className='logo__name'>Лого</div>
        <a className='footer__return' href='#headerLogo'>
          <svg id='footer__svg' viewBox="-100 -100 500 500"><g><path d="M282.082,195.285L149.028,62.24c-1.901-1.903-4.088-2.856-6.562-2.856s-4.665,0.953-6.567,2.856L2.856,195.285 C0.95,197.191,0,199.378,0,201.853c0,2.474,0.953,4.664,2.856,6.566l14.272,14.271c1.903,1.903,4.093,2.854,6.567,2.854 c2.474,0,4.664-0.951,6.567-2.854l112.204-112.202l112.208,112.209c1.902,1.903,4.093,2.848,6.563,2.848 c2.478,0,4.668-0.951,6.57-2.848l14.274-14.277c1.902-1.902,2.847-4.093,2.847-6.566 C284.929,199.378,283.984,197.188,282.082,195.285z" fill="#E5E5E5"></path></g></svg>
        </a>
        <div className='footer__license'>2018 WEB</div>
      </div>
    </div>
  )
}
