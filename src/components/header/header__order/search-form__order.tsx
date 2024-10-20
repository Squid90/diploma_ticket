import { Link } from "react-router-dom"

export const Search__form__order = () => {
  return (
    <>
    <form className='search__form'>
        <div className='form-line'>
            <div>
                <label className='header__label'>Направление</label>
                <div className='form-row'>
                    <select className='city-select'>
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
                    <div className='switch-btn-city'></div>
                    <select className='city-select'>
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
                <label className='header__label'>Дата</label>
                <div className='form-row'>
                    <input type='date' className='date-input'/>
                    <div className='switch-btn-date'></div>
                    <input type='date' className='date-input'/>
                </div>
            </div>
        </div>
        <Link to="" className="routlink">
            <button className='search-btn'>Найти билеты</button>
        </Link>
    </form>
    </>
  )
}
