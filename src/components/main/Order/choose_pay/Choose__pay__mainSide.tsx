import { Field, Form, Formik } from 'formik';
import './Choose__pay.css'
import React, { useState } from 'react'
import * as Yup from 'yup';

export const Choose__pay__mainSide: React.FC = () => {
    document.querySelector('.bar2')?.classList.add('active__bar');
    document.querySelector('.bar3')?.classList.add('active__bar');

    const SignupSchema = Yup.object().shape({
      // surname: Yup.string()
      //   .min(2, 'Фамилия должна содержать минимум 2 буквы')
      //   .max(50, 'Фамилия должна содержать максимум 50 букв')
      //   .required('Фамилия - Обязательное поле'),
    })

    const [isCheckedOnline, setIsCheckedOnline] = useState(false);
    const [isCheckedCash, setIsCheckedCash] = useState(false);
    const changeColorTextOnline = () => {
      setIsCheckedOnline(prevState => !prevState);
    }
    const changeColorTextCash = () => {
      setIsCheckedCash(prevState => !prevState);
    }

  return (
    <div className='choose_pay_mainSide'>
      <div className='choose_pay_mainSide_formData'>
        <Formik 
          initialValues={{ surname: '', name: '', birthday: '', documentSeries: '', documentNumber: '' }}
          validationSchema={SignupSchema}
          onSubmit={ (values) => {
            console.log(values);
          }}>
          <Form>
            <div className='choose_pay_mainSide_title'>
              Персональные данные
            </div>
            <div className='choose_pay_mainSide_line'></div>

            <div className='choose_pay_mainSide_personalData'>
              <div className='choose_pay_mainSide_personalData_fio'>
                <div className='choose_pay_mainSide_personalData_label label_surname'>
                  Фамилия
                </div>
                <div className='choose_pay_mainSide_personalData_label label_name'>
                  Имя
                </div>
                <div className='choose_pay_mainSide_personalData_label label_middlename'>
                  Отчество
                </div>
                <Field
                  className='choose_pay_mainSide_personalData_input input_surname'
                  value='Фамилия'
                  name='surname'
                  type='text' />
                <Field
                  className='choose_pay_mainSide_personalData_input input_name'
                  value='Имя'
                  name='name'
                  type='text' />
                <Field
                  className='choose_pay_mainSide_personalData_input input_middlename'
                  value='Отчество'
                  name='middlename'
                  type='text' />
              </div>
              <div className='choose_pay_mainSide_personalData_phoneemailBlock phone_Block'>
                <div className='choose_pay_mainSide_personalData_label label_phone'>
                  Контактный телефон
                </div>
                <Field
                  className='choose_pay_mainSide_personalData_input input_phone'
                  placeholder='+7 ___ ___ __ __'
                  name='phone'
                  type='text' />
              </div>
              <div className='choose_pay_mainSide_personalData_phoneemailBlock email_Block'>
                <div className='choose_pay_mainSide_personalData_label label_email'>
                  E-mail
                </div>
                <Field
                  className='choose_pay_mainSide_personalData_input input_email'
                  placeholder='inbox@example.ru'
                  name='email'
                  type='text' />
              </div>
            </div>
            <div className='choose_pay_mainSide_line'></div>

            <div className='choose_pay_mainSide_title'>
              Способ оплаты
            </div>
            <div className='choose_pay_mainSide_line'></div>

            <div className='choose_pay_mainSide_onlinePay'>
              <div className='choose_pay_mainSide_checkboxBlock'>
                <label className='choose_pay_mainSide_labelCheckbox'>
                  <input
                    className='choose_pay_mainSide_checkbox'
                    type='checkbox'
                    onChange={changeColorTextOnline} />
                  <span className="choose_pay_mainSide_checkboxMask"></span>
                </label>
                <div
                  className='choose_pay_mainSide_checkboxText'
                  style={{ color: isCheckedOnline ? '#FFA800' : '#928F94' }}>Онлайн</div>
              </div>
              <div className='choose_pay_mainSide_onlinePay_methods'>
                <div className='choose_pay_mainSide_onlinePay_method'>
                  Банковской картой
                </div>
                <div className='choose_pay_mainSide_onlinePay_method'>
                  PayPal
                </div>
                <div className='choose_pay_mainSide_onlinePay_method'>
                  Visa QIWI Wallet
                </div>
              </div>
            </div>
            <div className='choose_pay_mainSide_line'></div>

            <div className='choose_pay_mainSide_cashPay'>
              <div className='choose_pay_mainSide_checkboxBlock'>
                <label className='choose_pay_mainSide_labelCheckbox'>
                  <input
                    className='choose_pay_mainSide_checkbox'
                    type='checkbox'
                    onChange={changeColorTextCash} />
                  <span className="choose_pay_mainSide_checkboxMask"></span>
                </label>
                <div
                  className='choose_pay_mainSide_checkboxText'
                  style={{ color: isCheckedCash ? '#FFA800' : '#928F94' }}>Наличными</div>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
      <div className='choose_pay_mainSide_nextPage'>
            <button className='choose_pay_mainSide_nextPagebtn'>Купить билеты</button>
      </div>
    </div>
  )
}
