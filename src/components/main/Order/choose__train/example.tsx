import moment from 'moment';
import React, { useState } from 'react';
import { TrainCardItemProp, data_trainCard } from "./data__train/data__trainCard";

// Определяем тип карточки
// interface Card {
//     id: number;
//     timeStr1: string;
//     timeStr2: string;
// }

// Пример данных для карточек
// const initialCards: Card[] = [
//     { id: 1, timeStr1: '2024-10-16T05:00:00+03:00', timeStr2: '2024-10-16T15:00:00+03:00' },
//     { id: 2, timeStr1: '2024-10-16T04:00:00+03:00', timeStr2: '2024-10-16T15:00:00+03:00' },
//     { id: 3, timeStr1: '2024-10-16T03:00:00+03:00', timeStr2: '2024-10-16T15:00:00+03:00' },
//     { id: 4, timeStr1: '2024-10-16T02:00:00+03:00', timeStr2: '2024-10-16T15:00:00+03:00' },
//     { id: 5, timeStr1: '2024-10-16T01:00:00+03:00', timeStr2: '2024-10-16T15:00:00+03:00' },
// ];

// Функциональный компонент
const CardSorter: React.FC <{
    departureTimeThere: string; 
    timeTrackThere: string;
    arrivalTimeThere: string;
}> = ({
    departureTimeThere,
    timeTrackThere,
    arrivalTimeThere,
}) => {
    const [cards, setCards] = useState<TrainCardItemProp[]>(data_trainCard);
    const [sortType, setSortType] = useState<string>('time'); // Можно использовать 'time' или 'duration'

    // Функция для сортировки карточек
    const sortCards = (type: string) => {
        let sortedCards = [...cards];

        if (type === 'time') {
            sortedCards.sort((a, b) => new Date(a.departureTimeThere).getTime() - new Date(b.departureTimeThere).getTime());
        } else if (type === 'duration') {
            sortedCards.sort((a, b) => {
                const durationA = new Date(a.arrivalTimeThere).getTime() - new Date(a.departureTimeThere).getTime();
                const durationB = new Date(b.arrivalTimeThere).getTime() - new Date(b.departureTimeThere).getTime();
                return durationA - durationB;
            });
        }

        setCards(sortedCards);
    };

    // Обработчик изменения выпадающего списка
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedType = event.target.value;
        setSortType(selectedType);
        sortCards(selectedType);
    };

    const there_differenceInMilliseconds = ((Date.parse(arrivalTimeThere) - Date.parse(departureTimeThere)))
    const there_totalSeconds = Math.floor(there_differenceInMilliseconds / 1000);
    const there_hours = Math.floor(there_totalSeconds / 3600);
    const there_minutes = Math.floor((there_totalSeconds % 3600) / 60);
    const there_formattedHours = String(there_hours).padStart(2, '0');
    const there_formattedMinutes = String(there_minutes).padStart(2, '0');
    timeTrackThere = `${there_formattedHours}:${there_formattedMinutes}`;

    return (
        <div>
            <label htmlFor="sortSelect">Сортировать по: </label>
            <select id="sortSelect" value={sortType} onChange={handleChange}>
                <option value="time">По времени</option>
                <option value="duration">По длительности</option>
            </select>

            <div>
                {data_trainCard.map(card => (
                    <div key={card.id} className='trainsList-trainCard'>
                        <div className='trainCard-trainInfo'>
                            <div>Карточка {card.id}:</div>
                            <div className='trainInfo-Time'>Время 1: {moment(departureTimeThere).format('LT')}</div>
                            <div className='trainInfo-Time'>Время в пути: {timeTrackThere}</div>
                            <div className='trainInfo-Time'>Время 2: {moment(arrivalTimeThere).format('LT')}</div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardSorter;