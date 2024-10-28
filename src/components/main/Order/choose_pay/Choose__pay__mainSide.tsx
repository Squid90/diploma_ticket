import './Choose__pay.css'
import React from 'react'
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { data_ticket } from '../data_order/data_order';

export const Choose__pay__mainSide: React.FC = () => {

  const selectedInfo = data_ticket[0];
  
  document.querySelector('.bar2')?.classList.add('active__bar');
  document.querySelector('.bar3')?.classList.add('active__bar');
  document.querySelector('.bar4')?.classList.remove('active__bar');

  const navigate = useNavigate();
  const handleSelectPersData = (phone: any, email: any) => {
    navigate('/choosetrain/chooseplace/choosepassangers/choosepay/checkinfo', {});
    
    window.scrollTo({
      top: 592,
      left: 0,
      behavior: 'smooth',
    });

    const updatedDataTicket = data_ticket.map(ticket => ({
      ...ticket,
      phoneSelect: phone,
      emailSelect: email,
    }));
  
    data_ticket.splice(0, 1, updatedDataTicket[0]);
    console.log(data_ticket)
  }

    const SignupSchema = Yup.object().shape({
      // surname: Yup.string()
      //   .min(2, 'Фамилия должна содержать минимум 2 буквы')
      //   .max(50, 'Фамилия должна содержать максимум 50 букв')
      //   .required('Фамилия - Обязательное поле'),
      // name: Yup.string()
      //   .min(2, 'Имя должна содержать минимум 2 буквы')
      //   .max(50, 'Имя должна содержать максимум 50 букв')
      //   .required('Имя - Обязательное поле'),
      phone: Yup.string()
        .matches(/^[+][1-9]{1}[-][0-9]{3}[-][0-9]{3}[-][0-9]{4}$/, 'Номер телефона указан неверно. Пример: +7-987-654-3210')
        .required('Телефон - Обязательное поле'),
      email: Yup.string()
        .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Email должен содержать @ и домен. Пример: inbox@example.ru')
        .required('Email - Обязательное поле'),
    })

    const changeColorTextOnline = () => {
      document.getElementById('radioOnline')?.classList.add('checkboxText_active');
      document.getElementById('radioCash')?.classList.remove('checkboxText_active');
    }
    const changeColorTextCash = () => {
      document.getElementById('radioOnline')?.classList.remove('checkboxText_active');
      document.getElementById('radioCash')?.classList.add('checkboxText_active');
    }

  return (
    <div className='choose_pay_mainSide'>
      <Formik 
          initialValues={{ surname: '', name: '', phone: '', email: '' }}
          validationSchema={SignupSchema}
          onSubmit={ () => {
            
          }}>
            {({ errors, touched, values }) => (<>
              <div className='choose_pay_mainSide_formData'>
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
                        value={selectedInfo.surnameSelect}
                        name='surname'
                        type='text' />
                      <Field
                        className='choose_pay_mainSide_personalData_input input_name'
                        value={selectedInfo.nameSelect}
                        name='name'
                        type='text' />
                      <Field
                        className='choose_pay_mainSide_personalData_input input_middlename'
                        value={selectedInfo.middlenameSelect}
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
                    {(errors.surname && touched.surname) ? (
                      <div className='choose_pay_mainSide_error'>
                        <div className='choose_pay_mainSide_errorMassege'>{errors.surname}</div>
                      </div>
                    ) : (errors.name && touched.name) ? (
                      <div className='choose_pay_mainSide_error'>
                        <div className='choose_pay_mainSide_errorMassege'>{errors.name}</div>
                      </div>
                    ) : (errors.phone && touched.phone) ? (
                      <div className='choose_pay_mainSide_error'>
                        <div className='choose_pay_mainSide_errorMassege'>{errors.phone}</div>
                      </div>
                    ) : (errors.email && touched.email) ? (
                      <div className='choose_pay_mainSide_error'>
                        <div className='choose_pay_mainSide_errorMassege'>{errors.email}</div>
                      </div>
                    ) : null}
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
                          type='radio'
                          name='radio'
                          onChange={changeColorTextOnline} />
                        <span className="choose_pay_mainSide_checkboxMask"></span>
                      </label>
                      <div
                        className='choose_pay_mainSide_checkboxText'
                        id='radioOnline'>Онлайн</div>
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
                          type='radio'
                          name='radio'
                          onChange={changeColorTextCash} />
                        <span className="choose_pay_mainSide_checkboxMask"></span>
                      </label>
                      <div
                        className='choose_pay_mainSide_checkboxText'
                        id='radioCash'>Наличными</div>
                    </div>
                  </div>
                </Form>
              </div>
              <div className='choose_pay_mainSide_nextPage'>
                    <button
                      className='choose_pay_mainSide_nextPagebtn'
                      onClick={() =>
                        handleSelectPersData (values.phone, values.email)}>Купить билеты</button>
              </div></>
            )}
      </Formik>
    </div>
  )
}
