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

      <div className='passangers_passangerBlock_collapseBlock'style={{maxHeight: isCollapsedPassanger ? '1500px' : '0px'}}>
<form className='passangers_passangerBlock_form'>
        <div id='FirstPassanger' className='passangers_passangerBlock_mainInfo'>
          <select
            className='passangers_passangerBlock_select'
            //value={passengerType}
            //</div>onChange={(e) => setPassengerType(e.target.value)}
            >
              <option value="adult">Взрослый</option>
              <option value="child">Детский</option>
          </select>

          <div className='passangers_passangerBlock_labelInput'>
            <div className='passangers_passangerBlock_label label_Surname'>Фамилия</div>
            <div className='passangers_passangerBlock_label label_Name'>Имя</div>
            <div className='passangers_passangerBlock_label label_Middlename'>Отчество</div>
            <input
              className='passangers_passangerBlock_input input_Surname'
              placeholder='Фамилия'
              type="text"
              //value={surname}
              //onChange={onSurnameChange(e)} 
              /> 
            <input
              className='passangers_passangerBlock_input input_Name'
              placeholder='Имя'
              type="text"
              // value={name}
              // onChange={(e) => setName(e.target.value)} /> {errors.name && <span>{errors.name}</span>}
              />
            <input
              className='passangers_passangerBlock_input input_Middlename'
              placeholder='Отчество'
              type="text"
              // value={middlename} onChange={(e) => setMiddlename(e.target.value)} /> {errors.middlename && <span>{errors.middlename}</span>}
              />
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
              <input
                className='passangers_passangerBlock_birthday_input'
                type="date"
                // value={birthDate}
                // onChange={(e) => setBirthDate(e.target.value)} />
                />
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
        </div>
        <div className='passangers_passangerBlock_line'></div>

        <div className='passangers_passangerBlock_document'>
          <div className='passangers_passangerBlock_document_labelInput'>
            <div className='passangers_passangerBlock_document_label label_type'>Тип документа</div>
            <div className='passangers_passangerBlock_document_label label_Serial'>Серия</div>
            <div className='passangers_passangerBlock_document_label label_Number'>Номер</div>
            <select
              className='passangers_passangerBlock_document_input input_type'
              // value={documentType}
              // onChange={(e) => setDocumentType(e.target.value)}>
              >
              <option value="passport">Паспорт РФ</option>
              <option value="foreignPassport">Заграничный паспорт</option>
            </select>
            <input
              className='passangers_passangerBlock_document_input input_Serial'
              type="text"
              // value={documentSeries}
              // onChange={(e) => setDocumentSeries(e.target.value)} /> {errors.documentSeries && <span>{errors.documentSeries}</span>}
              />
            <input
              className='passangers_passangerBlock_document_input input_Number'
              type="text"
              // value={documentNumber}
              // onChange={(e) => setDocumentNumber(e.target.value)}  /> {errors.documentNumber && <span>{errors.documentNumber}</span>}
              />
          </div>
        </div>
        <div className='passangers_passangerBlock_line'></div>

        <div
          className='passangers_passangerBlock_nextPassanger'
          style={{
            width: '100%',
            //backgroundColor: Object.keys(errors).length > 0 ? 'red' : 'transparent',
          }}>
          <button
            className='passangers_passangerBlock_nextPassanger_btn'
            // form='FirstPassanger'
            // onClick={nextPassanger}
            type="submit"
            //</div>disabled={!isFormValid}
            >Следующий пассажир
          </button>

          {/* {Object.keys(errors).length > 0 && <span style={{ color: 'white' }}>{Object.values(errors).join(', ')}</span>} */}
        </div>
        </form>
      </div>
    </div>
  )
}

