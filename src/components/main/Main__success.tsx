import { useNavigate } from 'react-router-dom';
import './Main.css'
import { data_ticket } from './Order/data_order/data_order';
import { useState } from 'react';


export const Main__success = () => {
    const selectedInfo = data_ticket[0];

    const navigate = useNavigate();
    const handleReturnHome = () => {
      navigate('/', {});
      
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }

    const [rating, setRating] = useState<number>(0); // Хранит текущий рейтинг
    const [hoveredRating, setHoveredRating] = useState<number>(0); // Хранит рейтинг при наведении
  
    const handleMouseEnter = (star: number) => {
      setHoveredRating(star);
    };
  
    const handleMouseLeave = () => {
      setHoveredRating(0);
    };
  
    const handleClick = (star: number) => {
      setRating(star);
    };

    const orderNumber = Math.floor(Math.random() * 1000);
    const chrs = 'ABDEFGHKMNPQRSTWXZ';
    let orderSerial = '';
    for (let i = 0; i < 2; i++) {
            let pos = Math.floor(Math.random() * chrs.length);
            orderSerial += chrs.substring(pos,pos+1);
        }

  return (
    <div className='main__success'>
        <div className='main__success_title'>Благодарим Вас за заказ!</div>
        <div className='main__success__mainBlock'>
            <div className='main__success__mainBlock__trainInfo'>
                <div className='main__success__trainInfo_orderNumber'>
                    №Заказа {orderNumber}{orderSerial}
                </div>
                <div className='main__success__trainInfo_price'>
                    сумма  <span>{selectedInfo.ticketPriceSelect}</span> Р
                </div>
            </div>
            <div className='main__success__mainBlock__servises'>
                <div className='main__success__mainBlock__servise first_servise'>
                    <div className='main__success__mainBlock__servisePic'>
                        <svg viewBox="-80 -100 450 450" ><path d="M269.935,15H20.732C9.704,15,0,23.788,0,34.816v178.96C0,224.805,9.704,234,20.732,234H117v13H80.739 C75.226,247,70,251.193,70,256.707v8.477c0,5.514,5.226,9.816,10.739,9.816h129.189c5.514,0,10.072-4.303,10.072-9.816v-8.477 c0-5.514-4.559-9.707-10.072-9.707H173v-13h96.935c11.028,0,20.065-9.195,20.065-20.224V34.816C290,23.788,280.963,15,269.935,15z M259,192c0,8.284-6.716,15-15,15H46c-8.284,0-15-6.716-15-15V57c0-8.284,6.716-15,15-15h198c8.284,0,15,6.716,15,15V192z"/></svg>
                    </div>
                    <div className='main__success__mainBlock__serviseLbl'>
                        билеты будут отправлены на ваш <span>e-mail</span>
                    </div>
                </div>
                <div className='main__success__mainBlock__servise second_servise'>
                    <div className='main__success__mainBlock__servisePic'>
                    <svg viewBox="-9 -10 50 50"><path d="m0 10c0-1.65685 1.34315-3 3-3h15c.7684 0 1.4692.28885 2 .7639.5308-.47505 1.2316-.7639 2-.7639h7c1.6569 0 3 1.34315 3 3v12c0 1.6569-1.3431 3-3 3h-7c-.7684 0-1.4692-.2889-2-.7639-.5308.475-1.2316.7639-2 .7639h-15c-1.65685 0-3-1.3431-3-3zm24 9c-.5523 0-1 .4477-1 1s.4477 1 1 1h3c.5523 0 1-.4477 1-1s-.4477-1-1-1zm-1-3c0-.5523.4477-1 1-1h3c.5523 0 1 .4477 1 1s-.4477 1-1 1h-3c-.5523 0-1-.4477-1-1zm1-5c-.5523 0-1 .4477-1 1s.4477 1 1 1h1c.5523 0 1-.4477 1-1s-.4477-1-1-1zm-20 9c0-.5523.44772-1 1-1h10c.5523 0 1 .4477 1 1s-.4477 1-1 1h-10c-.55228 0-1-.4477-1-1zm1-5c-.55228 0-1 .4477-1 1s.44772 1 1 1h10c.5523 0 1-.4477 1-1s-.4477-1-1-1zm-1-3c0-.5523.44772-1 1-1h4c.55228 0 1 .4477 1 1s-.44772 1-1 1h-4c-.55228 0-1-.4477-1-1zm15-1c0 .5523.4477 1 1 1s1-.4477 1-1v-1c0-.55229-.4477-1-1-1s-1 .44771-1 1zm0 11c0 .5523.4477 1 1 1s1-.4477 1-1v-1c0-.5523-.4477-1-1-1s-1 .4477-1 1zm0-5c0 .5523.4477 1 1 1s1-.4477 1-1v-2c0-.5523-.4477-1-1-1s-1 .4477-1 1z"/></svg>
                    </div>
                    <div className='main__success__mainBlock__serviseLbl'>
                        <span>распечатайте</span> и сохраняйте билеты до даты поездки
                    </div>
                </div>
                <div className='main__success__mainBlock__servise third_servise'>
                    <div className='main__success__mainBlock__servisePic'>
                        <svg viewBox="-80 -70 450 450"><path d="M114.39,179.507c0.008,0.064,0.393,5.655-0.428,9.043c-1.315-0.351-2.719-0.365-4.076,0.001l-28.662,7.675 c-2.459,0.658-4.431,2.466-5.332,4.83c-0.71,0.258-1.419,0.499-2.131,0.776c-25.786,10.014-39.416,27.676-39.416,51.078v34.207 c0,5.457,4.426,9.883,9.884,9.883h208.543c5.458,0,9.884-4.426,9.884-9.883V252.91c0-23.402-13.63-41.064-39.416-51.078 c-0.714-0.277-1.429-0.542-2.141-0.8c-0.905-2.352-2.871-4.151-5.322-4.807l-28.662-7.675c-1.357-0.365-2.76-0.353-4.073-0.003 c-0.807-3.33-0.45-8.847-0.432-9.028c5.712-6.311,10.893-14.391,15.376-24.182c9.794-2.009,18.188-10.869,21.19-22.912 c1.759-7.047,1.388-14.299-1.042-20.422c-1.17-2.946-2.791-5.532-4.756-7.679c3.73-5.133,5.81-10.788,5.81-16.731 c0-2.596-1.009-4.949-2.645-6.713v-7.492c13.044-9.852,16.226-21.826,14.593-30.298c-1.405-7.295-6.572-12.718-13.157-13.815 c-22.433-3.746-32.931-9.918-41.606-24.456C174.589,1.83,171.365,0,167.885,0h-38.77c-3.48,0-6.703,1.83-8.487,4.818 c-8.677,14.539-19.175,20.71-41.602,24.456c-6.59,1.099-11.757,6.523-13.163,13.817c-1.633,8.473,1.548,20.447,14.594,30.299v7.49 c-1.636,1.764-2.645,4.117-2.645,6.713c0,5.943,2.079,11.599,5.811,16.731c-1.966,2.146-3.588,4.732-4.757,7.679 c-2.43,6.123-2.801,13.375-1.043,20.42c3.003,12.044,11.398,20.905,21.191,22.914C103.494,165.123,108.681,173.198,114.39,179.507z M187.329,204.979l12.668,3.393l-23.343,29.168l-11.077-11.674L187.329,204.979z M148.501,195.972 c5.349,0,10.469-0.984,15.335-2.909c0.744,3.101,1.921,6.207,3.645,9.052l-18.526,17.79c-0.162,0.154-0.31,0.317-0.454,0.481 c-0.145-0.164-0.292-0.327-0.454-0.481l-18.521-17.785c1.724-2.846,2.898-5.956,3.644-9.056 C138.033,194.987,143.153,195.972,148.501,195.972z M145.542,268.74c0.93,0.377,1.931,0.586,2.958,0.586s2.028-0.209,2.958-0.586 l2.376,8.493h-10.668L145.542,268.74z M148.5,249.457l-8.502-9.654l8.307-8.753c0.069-0.073,0.129-0.151,0.195-0.227 c0.066,0.075,0.126,0.153,0.195,0.227l8.307,8.753L148.5,249.457z M96.117,82.363v-8.971c0-1.08,1.203-1.971,2.672-1.971h99.422 c1.47,0,2.672,0.891,2.672,1.971v8.971c0,1.085-1.202,1.973-2.672,1.973H98.789C97.32,84.336,96.117,83.448,96.117,82.363z M104.106,97.478h88.787c-8.319,6.604-24.091,12.542-44.395,12.542C128.196,110.02,112.425,104.081,104.106,97.478z M134.508,19.768h27.984c10.92,15.762,25.336,24.039,49.204,28.472c-0.424,2.212-2.425,6.109-7.978,10.042H93.279 c-5.553-3.933-7.554-7.83-7.977-10.042C109.17,43.807,123.586,35.53,134.508,19.768z M105.521,135.735 c-0.757,0-1.523,0.087-2.284,0.267c-1.181,0-4.769-2.487-6.233-8.361c-0.754-3.024-0.668-6.065,0.236-8.344 c0.438-1.105,0.939-1.68,1.271-1.9c12.803,7.649,30.485,12.39,49.989,12.39c19.512,0,37.2-4.743,50.003-12.397 c0.299,0.205,0.813,0.78,1.259,1.908c0.904,2.278,0.99,5.319,0.236,8.346c-1.462,5.862-5.04,8.35-6.313,8.35h-0.007 c-4.759-1.119-9.61,1.395-11.435,5.924c-6.307,15.643-17.281,34.289-33.742,34.289c-16.462,0-27.437-18.646-33.744-34.289 C113.224,138.113,109.491,135.735,105.521,135.735z M109.671,204.979l21.752,20.887l-11.077,11.674l-23.343-29.168L109.671,204.979 z M54.112,252.91c0-19.366,15.983-29.17,30.982-34.11l28.57,35.7c1.428,1.783,3.558,2.863,5.841,2.959 c0.111,0.005,0.222,0.007,0.333,0.007c2.164,0,4.239-0.887,5.735-2.464l3.494-3.683l3.739,4.245l-6.059,21.669H54.112V252.91z M242.888,277.233h-72.635l-6.059-21.67l3.738-4.244l3.494,3.683c1.496,1.577,3.571,2.464,5.735,2.464 c0.111,0,0.222-0.002,0.333-0.007c2.283-0.096,4.413-1.176,5.841-2.959l28.571-35.702c14.998,4.94,30.98,14.747,30.98,34.112 V277.233z"/></svg>
                    </div>
                    <div className='main__success__mainBlock__serviseLbl'>
                        <span>предьявите</span> распечатанные билеты при посадке
                    </div>
                </div>
            </div>
            <div className='main__success__mainBlock_personalData'>
                <div className='main__success__personalData__title'>
                    {selectedInfo.nameSelect} {selectedInfo.middlenameSelect}!
                </div>
                <div className='main__success__personalData__info'>
                    Ваш заказ успешно оформлен. <p>В ближайшее время с вами свяжется наш оператор для подтверждения.</p>
                </div>
                <div className='main__success__personalData__thanks'>
                    Благодарим Вас за оказанное доверие и желаем приятного путешествия!
                </div>
            </div>
            <div className='main__success__mainBlock__feedback'>
                <div className='main__success__feedback_rating'>
                    <div className='main__success__feedback_ratingLabel'>
                        Оценить сервис
                    </div>
                    <div className='main__success__feedback_ratingStars'>
                        {[...Array(5)].map((_, index) => {
                            const starIndex = index + 1;
                            const isFilled = starIndex <= (hoveredRating || rating);
                            return (
                                <svg
                                key={starIndex}
                                className={`star ${isFilled ? 'filled' : ''}`}
                                onMouseEnter={() => handleMouseEnter(starIndex)}
                                onMouseLeave={handleMouseLeave}
                                onClick={() => handleClick(starIndex)}
                                viewBox="0 0 24 24"
                                width="48"
                                height="48"
                                >
                                <path d="M12 .587l3.668 7.431 8.268 1.205-5.989 5.98 1.417 8.265L12 18.896l-7.364 3.872 1.417-8.265-5.989-5.98 8.268-1.205z" />
                                </svg>
                            );
                        })}
                    </div>
                </div>
                <div
                    className='main__success__feedback_returnBtn'
                    onClick={handleReturnHome}>
                    вернуться на главную
                </div>
            </div>
        </div>
    </div>
  )
}
