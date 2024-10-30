import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react'
import * as Yup from 'yup';
import { data_ticket } from '../data_order/data_order';

export interface BlockProp {
  index: number,
}



export const Passanger__Block: React.FC<BlockProp> = ({ index }) => {

  const [isCollapsedPassanger, setIsCollapsedPassanger] = useState<boolean>(true);
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

  const nextPassanger = (surname: any, name: any, middlename: any, birthday: any, documentSeries: any, documentNumber: any) => {
    
    const updatedDataTicket = data_ticket.map(ticket => ({
      ...ticket,
      surnameSelect: surname,
      nameSelect: name,
      middlenameSelect: middlename,
      birthdaySelect: birthday,
      documentTypeSelect: documentType,
      documentSeriesSelect: documentSeries,
      documentNumberSelect: documentNumber,
    }));
  
    data_ticket.splice(0, 1, updatedDataTicket[0]);
  }

  const deletePassanger = () => {
    document.getElementById(`Пассажир_${index}`)?.remove();
  }

  const deleteError = () => {
    // document.querySelector('.passangers_passangerBlock_error')?.remove();
  }

  const [passengerType, setPassengerType] = useState('adult');
  const [documentType, setDocumentType] = useState('Паспорт РФ');

  const SignupSchema = Yup.object().shape({
    surname: Yup.string()
      .min(2, 'Фамилия должна содержать минимум 2 буквы')
      .max(50, 'Фамилия должна содержать максимум 50 букв')
      .required('Фамилия - Обязательное поле'),
    name: Yup.string()
      .min(2, 'Имя должна содержать минимум 2 буквы')
      .max(50, 'Имя должна содержать максимум 50 букв')
      .required('Имя - Обязательное поле'),
    birthday: Yup.date()
      .required('Дата рождения - Обязательное поле')
      .test(
        "dates-test",
        "Вам должно быть больше 18 лет",
        (value) => {
          const today = new Date();
          const endDate = value;
          const yearsOld18 = new Date();
          let check = true

          if (passengerType === 'adult') {
            yearsOld18.setFullYear(today.getFullYear() - 18)
            check = yearsOld18 > endDate;
          } else {
            check = true
          }
          return check;
        }
      )
      .test(
        "dates-test",
        "Вам должно быть меньше 18 лет",
        (value) => {
          const today = new Date();
          const endDate = value;
          const yearsOld18 = new Date();
          let check = true
          if (passengerType === 'child') {
            yearsOld18.setFullYear(today.getFullYear() - 18)
            check = yearsOld18 < endDate;
          } else {
            check = true
          }
          return check;
        }
      )
      ,
    documentSeries: Yup.string()
      .required('Серия документа - Обязательное поле')
      .test(
        "dates-test",
        "Серия паспорта должна содержать только цифры от 0 до 9",
        (value) => {
          return /[0-9][0-9][0-9][0-9]/.test(value)
        }
      )
      .max(4, 'Серия паспорта должна содержать 4 цифры'),
    documentNumber: Yup.string()
      .required('Номер документа - Обязательное поле')
      .test(
        "dates-test",
        "Номер паспорта должн содержать только цифры от 0 до 9",
        (value) => {
          return /[0-9][0-9][0-9][0-9][0-9][0-9]/.test(value)
        }
      )
      .max(6, 'Номер паспорта должн содержать 6 цифр')
  });



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
        <Formik
          initialValues={{ surname: '', name: '', middlename: '', birthday: '', documentSeries: '', documentNumber: '' }}
          validationSchema={SignupSchema}
          onSubmit={ () => {
            const parrent = document.getElementById(`Пассажир_${index}`)
            parrent?.querySelector('.passangers_passangerBlock_nextPassanger')?.classList.add('nextPassangerAccess');
            document.querySelector('.passangers_passangerBlock__nextPageBtn')?.removeAttribute('disabled');
          }}
          > 
          {({ errors, touched, values }) => (
          <Form className='passangers_passangerBlock_form'>
            <div id='FirstPassanger' className='passangers_passangerBlock_mainInfo'>
              <select
                value={passengerType}
                onChange={(e) => setPassengerType(e.target.value)}
                className='passangers_passangerBlock_select'>
                  <option value="adult">Взрослый</option>
                  <option value="child">Детский</option>
              </select>

              <div className='passangers_passangerBlock_labelInput'>
                <div className='passangers_passangerBlock_label label_Surname'>Фамилия</div>
                <div className='passangers_passangerBlock_label label_Name'>Имя</div>
                <div className='passangers_passangerBlock_label label_Middlename'>Отчество</div>
                <Field
                  className='passangers_passangerBlock_input input_Surname'
                  placeholder='Фамилия'
                  type="text"
                  name='surname' /> 
                <Field
                  className='passangers_passangerBlock_input input_Name'
                  placeholder='Имя'
                  type="text"
                  name='name' />
                <Field
                  className='passangers_passangerBlock_input input_Middlename'
                  placeholder='Отчество'
                  type="text"
                  name='middlename' />
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
                  <Field
                    className='passangers_passangerBlock_birthday_input'
                    type="date"
                    name='birthday' />
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
                  value={documentType}
                  onChange={(e) => setDocumentType(e.target.value)}>
                    <option value="Паспорт РФ">Паспорт РФ</option>
                    <option value="Заграничный паспорт">Заграничный паспорт</option>
                </select>
                <Field
                  className='passangers_passangerBlock_document_input input_Serial'
                  type="text"
                  name='documentSeries'/>
                <Field
                  className='passangers_passangerBlock_document_input input_Number'
                  type="text"
                  name='documentNumber'/>
              </div>
            </div>
            <div className='passangers_passangerBlock_line'></div>
                <div className='passangers_passangerBlock_nextPassanger'>
                  {(errors.surname && touched.surname) ? (
                    <div className='passangers_passangerBlock_error'>
                      <div className='passangers_passangerBlock_closeError' onClick={deleteError}>X</div>
                      <div className='passangers_passangerBlock_errorMassege'>{errors.surname}</div>
                    </div>
                  ) : (errors.name && touched.name) ? (
                    <div className='passangers_passangerBlock_error'>
                      <div className='passangers_passangerBlock_closeError' onClick={deleteError}>X</div>
                      <div className='passangers_passangerBlock_errorMassege'>{errors.name}</div>
                    </div>
                  ) : (errors.birthday && touched.birthday) ? (
                    <div className='passangers_passangerBlock_error'>
                      <div className='passangers_passangerBlock_closeError' onClick={deleteError}>X</div>
                      <div className='passangers_passangerBlock_errorMassege'>{errors.birthday}</div>
                    </div>
                  ) : (errors.documentSeries && touched.documentSeries) ? (
                    <div className='passangers_passangerBlock_error'>
                      <div className='passangers_passangerBlock_closeError' onClick={deleteError}>X</div>
                      <div className='passangers_passangerBlock_errorMassege'>{errors.documentSeries}</div>
                    </div>
                  ) : (errors.documentNumber && touched.documentNumber) ? (
                    <div className='passangers_passangerBlock_error'>
                      <div className='passangers_passangerBlock_closeError' onClick={deleteError}>X</div>
                      <div className='passangers_passangerBlock_errorMassege'>{errors.documentNumber}</div>
                    </div>
                  ) : null}

                  <button
                    className='passangers_passangerBlock_nextPassanger_btn'
                    onClick={() =>
                      nextPassanger(
                        values.surname,
                        values.name,
                        values.middlename,
                        values.birthday,
                        values.documentSeries,
                        values.documentNumber)}
                    type="submit">Следующий пассажир
                  </button>
                </div>
          </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
