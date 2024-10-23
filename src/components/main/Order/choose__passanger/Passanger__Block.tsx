import React, { useState } from 'react'

export interface BlockProp {
    index: number,
}

export const Passanger__Block: React.FC<BlockProp> = ({ index }) => {
    const [isCollapsedPassanger, setIsCollapsedPassanger] = useState<boolean>(false);
    const toggleCollapseThere = () => {
    setIsCollapsedPassanger(!isCollapsedPassanger);
    };

    const handleChangeGender = () => {
    const chooseGender = document.querySelectorAll('.passangers__chooseGender')
        chooseGender.forEach(e => {
            e.classList.toggle('passangerBlock_activeGender');
        });
    };

    const [isChecked, setIsChecked] = useState(false);
    const handleChange = () => {
        setIsChecked(!isChecked);
    };

    const nextPassanger = () => {

    }

    const deletePassanger = () => {
        document.getElementById(`Пассажир_${index}`)?.remove();
    }


  return (
    <div id={`Пассажир_${index}`} className='choose_passangers_passangerBlock'>
      <div className='passangers_passangerBlock_title'>
        <div className='passangers_passangerBlock_title_left'>
          <div
            className='passangers_passangerBlock_title_collapse'
            onClick={toggleCollapseThere}>
            {isCollapsedPassanger ? '-' : '+'}
          </div>
          <div className='passangers_passangerBlock_title_text'>
            Пассажир {index + 1}
          </div>
        </div>
        <div
            className='passangers_passangerBlock_title_right'
            onClick={deletePassanger}>
          x
        </div>
      </div>
      <div className='passangers_passangerBlock_line'></div>

      <div className='passangers_passangerBlock_collapseBlock'style={{maxHeight: isCollapsedPassanger ? '' : '0px'}}>

        <form id='FirstPassanger' className='passangers_passangerBlock_mainInfo'>
          <select className='passangers_passangerBlock_select'>
            <option>Взрослый</option>
            <option>Детский</option>
          </select>

          <div className='passangers_passangerBlock_labelInput'>
            <div className='passangers_passangerBlock_label label_Surname'>Фамилия</div>
            <div className='passangers_passangerBlock_label label_Name'>Имя</div>
            <div className='passangers_passangerBlock_label label_Middlename'>Отчество</div>
            <input className='passangers_passangerBlock_input input_Surname' placeholder='Фамилия'></input>
            <input className='passangers_passangerBlock_input input_Name' placeholder='Имя'></input>
            <input className='passangers_passangerBlock_input input_Middlename' placeholder='Отчество'></input>
          </div>

          <div className='passangers_passangerBlock_gender'>
            <div className='passangers_passangerBlock_choose'>
              <div className='passangers_passangerBlock_gender_label'>
                Пол
              </div>
              <div className='passangers_passangerBlock_chooseGender'>
                <div
                  className='passangers__chooseGender chooseGender_male passangerBlock_activeGender' 
                  onClick={handleChangeGender}>
                  М
                </div>
                <div
                  className='passangers__chooseGender chooseGender_female'
                  onClick={handleChangeGender}>
                  Ж
                </div>
              </div>
            </div>
            <div className='passangers_passangerBlock_choose'>
              <div className='passangers_passangerBlock_gender_label'>
                Дата рождения
              </div>
              <input type='date' className='passangers_passangerBlock_birthday_input'></input>
            </div>
          </div>
          
          <div className='passangers_passangerBlock_invalid'>
            <input
              type='checkbox'
              className={`passangers_passangerBlock_CheckBox ${isChecked ? 'checked' : ''}`}
              onChange={handleChange}>
            </input>
            <div className='passangers_passangerBlock_invalidText'>
              ограниченная подвижность
            </div>
          </div>
        </form>
        <div className='passangers_passangerBlock_line'></div>

        <div className='passangers_passangerBlock_document'>
          <div className='passangers_passangerBlock_document_labelInput'>
            <div className='passangers_passangerBlock_document_label label_type'>Тип документа</div>
            <div className='passangers_passangerBlock_document_label label_Serial'>Серия</div>
            <div className='passangers_passangerBlock_document_label label_Number'>Номер</div>
            <select className='passangers_passangerBlock_document_input input_type'>
              <option>Паспорт РФ</option>
              <option>Заграничный паспорт</option>
            </select>
            <input className='passangers_passangerBlock_document_input input_Serial'></input>
            <input className='passangers_passangerBlock_document_input input_Number'></input>
          </div>
        </div>
        <div className='passangers_passangerBlock_line'></div>

        <div className='passangers_passangerBlock_nextPassanger'>
          <button
            className='passangers_passangerBlock_nextPassanger_btn'
            form='FirstPassanger'
            onClick={nextPassanger}>Следующий пассажир</button>
        </div>

      </div>
    </div>
  )
}


