import { useNavigate } from "react-router-dom";


export const Search__form = () => {
    
    const navigate = useNavigate();
    const handleFindTickets = () => {
        navigate('/choosetrain', {});
        
        window.scrollTo({
          top: 592,
          left: 0,
          behavior: 'smooth',
        });
      }



  return (
    <>
    <form className='search__form_main'>
        <div>
            <label className='header__label_main'>Направление</label>
            <div className='form-row_main'>
                <select className='city-select_main'>
                    <option>Москва</option>
                    <option>Санкт-Петербург</option>
                    <option>Новосибирск</option>
                    <option>Екатеринбург</option>
                    <option>Нижний Новгород</option>
                    <option>Сочи</option>
                    <option>Казань</option>
                    <option>Челябинск</option>
                    <option>Омск</option>
                    <option>Самара</option>
                </select>
                <div className='switch-btn-city_main'></div>
                <select className='city-select_main'>
                    <option>Москва</option>
                    <option>Санкт-Петербург</option>
                    <option>Новосибирск</option>
                    <option>Екатеринбург</option>
                    <option>Нижний Новгород</option>
                    <option>Сочи</option>
                    <option>Казань</option>
                    <option>Челябинск</option>
                    <option>Омск</option>
                    <option>Самара</option>
                </select>
            </div>
        </div>
        <div>
            <label className='header__label_main'>Дата</label>
            <div className='form-row_main'>
                <input type='date' className='date-input_main'/>
                <div className='switch-btn-date'></div>
                <input type='date' className='date-input_main'/>
            </div>
        </div>
        <div className="routlink_main">
            <button
                className='search-btn_main'
                onClick={handleFindTickets}>Найти билеты</button>
        </div>
    </form>
    </>
  )
}
