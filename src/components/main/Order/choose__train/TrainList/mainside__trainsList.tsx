
import React, { useEffect, useState } from 'react';
import { data_trainCard } from "../data__train/data__trainCard"
import { TrainsList__trainCard } from "./trainsList__trainCard"

const itemsPerPageOptions = [5, 10, 20];
const sortOptions = [
  { value: 'time', label: 'по времени' },
  { value: 'duration', label: 'по длительности' },
  { value: 'price', label: 'по стоимости' }
];


export const Mainside__trainsList: React.FC = () => {
  const [sortOption, setSortOption] = useState<'time' | 'duration' | 'price'>('time');
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalItems = data_trainCard.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const allPageBtn = document.querySelectorAll('.pagesBlock-pageBtn');
    allPageBtn.forEach(elm => {
      elm.classList.remove('activePageBtn');
    });
  
    const pageBtn = document.getElementById(page.toString());
    pageBtn?.classList.add('activePageBtn');
  };

  
  const handlePageNext = () => {
    currentPage < totalPages ? handlePageChange(currentPage + 1) : handlePageChange(currentPage);
  };
  const handlePagePrev = () => {
    currentPage > 1 ? handlePageChange(currentPage - 1) : handlePageChange(currentPage);
  };

  const handleItemsPerPageChange = (count: number) => {
    setItemsPerPage(count);
    setCurrentPage(1);
    const calcShow = document.querySelectorAll('.calcShow-howMuch');
    calcShow.forEach(elm => {
      document.addEventListener('click',e => {
        elm === e.target ? elm.classList.add('howMuch-active') : elm.classList.remove('howMuch-active');
      });
    })
  };

  // Функция для сортировки карточек
  const sortCards = (cards: any[]) => {
    return cards.sort((a, b) => {
        if (sortOption === 'time') {
          return new Date(a.departureTimeThere).getTime() - new Date(b.departureTimeThere).getTime();
        } else {
        const durationA = new Date(a.arrivalTimeThere).getTime() - new Date(a.departureTimeThere).getTime();
        const durationB = new Date(b.arrivalTimeThere).getTime() - new Date(b.departureTimeThere).getTime();
        return durationA - durationB;
      }
    });
  };

  const sortedCards = sortCards(data_trainCard);

  const sliceStart = (currentPage - 1) * itemsPerPage;
  const currentItems = data_trainCard.slice(sliceStart, sliceStart + itemsPerPage);

  useEffect(() => {
  setTimeout(() => { 
    const coupeCheckbox = document.getElementById('КупеЧекБокс');
    coupeCheckbox?.addEventListener('change', ()=>{
      const hiddenfilter = document.querySelectorAll('#Купе');
      hiddenfilter.forEach(elm => {
        elm.classList.toggle('hidden');
      })
    })
    const plazcartCheckbox = document.getElementById('ПлацкартЧекБокс');
    plazcartCheckbox?.addEventListener('change', ()=>{
      const hiddenfilter = document.querySelectorAll('#Плацкарт');
      hiddenfilter.forEach(elm => {
        elm.classList.toggle('hidden');
      })
    })
    const seatCheckbox = document.getElementById('СидячийЧекБокс');
    seatCheckbox?.addEventListener('change', ()=>{
      const hiddenfilter = document.querySelectorAll('#Сидячий');
      hiddenfilter.forEach(elm => {
        elm.classList.toggle('hidden');
      })
    })
    const luxCheckbox = document.getElementById('ЛюксЧекБокс');
    luxCheckbox?.addEventListener('change', ()=>{
      const hiddenfilter = document.querySelectorAll('#Люкс');
      hiddenfilter.forEach(elm => {
        elm.classList.toggle('hidden');
      })
    })
    const wifiCheckbox = document.getElementById('WiFiЧекБокс');
    wifiCheckbox?.addEventListener('change', ()=>{
      const hiddenfilter = document.querySelectorAll('#WiFi');
      hiddenfilter.forEach(elm => {
        elm.classList.toggle('hidden');
      })
    })
    const expressCheckbox = document.getElementById('ЭкспрессЧекБокс');
    expressCheckbox?.addEventListener('change', ()=>{
      const hiddenfilter = document.querySelectorAll('#Экспресс');
      hiddenfilter.forEach(elm => {
        elm.classList.toggle('hidden');
      })
    })

  }, 500);
  return () => {
    const coupeCheckbox = document.getElementById('КупеЧекБокс');
    coupeCheckbox?.removeEventListener('change', () => {});
    const plazcartCheckbox = document.getElementById('ПлацкартЧекБокс');
    plazcartCheckbox?.removeEventListener('change', () => {});
    const seatCheckbox = document.getElementById('СидячийЧекБокс');
    seatCheckbox?.removeEventListener('change', () => {});
    const luxCheckbox = document.getElementById('ЛюксЧекБокс');
    luxCheckbox?.removeEventListener('change', () => {});
    const wifiCheckbox = document.getElementById('WiFiЧекБокс');
    wifiCheckbox?.removeEventListener('change', () => {});
    const expressCheckbox = document.getElementById('ЭкспрессЧекБокс');
    expressCheckbox?.removeEventListener('change', () => {});
};
},)
    

  return (
    <>
      <div className='mainside-sorting'>
        <div className='mainside-findCalc'>
          найдено {totalItems}
        </div>
        <div className='mainside-SortCalc'>
          <div className='mainside-howToSort'>
            сортировать по:
            <select
              id="sort"
              className='chooseSorting'
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value as 'time' | 'duration' | 'price')}>
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          <div className='mainside-calcShow'>
            показывать по:
            {itemsPerPageOptions.map((option) => (
              <div className='calcShow-howMuch'
                key={option}
                onClick={() => handleItemsPerPageChange(option)}>
                  {option}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='mainside-trainsList'>
        {currentItems.map(train => (
          <TrainsList__trainCard key={train.id} train={train} />
        ))}
      </div>

      <div className='mainside-pagesBlock'>
        <div className='pagesBlock-pageBtn PrevPage'
          onClick={() => handlePagePrev()}>
          <svg viewBox="-4 1.5 20 20"><path d="m7.25 15.75c-.192 0-.384-.073-.53-.22l-3-3c-.293-.293-.293-.768 0-1.061l3-3c.293-.293.768-.293 1.061 0s.293.768 0 1.061l-2.47 2.47 2.47 2.47c.293.293.293.768 0 1.061-.147.146-.339.219-.531.219z"/></svg>
        </div>
        {Array.from({ length: totalPages }, (_, index) => (
          <div id = {((index + 1)).toString()} className={'pagesBlock-pageBtn'}
            key={index}
            onClick={() => handlePageChange(index + 1)}>
              {index + 1}
          </div>
        ))}
        <div className='pagesBlock-pageBtn NextPage'
          onClick={() => handlePageNext()}>
          <svg viewBox="8 1.5 20 20"><path d="m16.75 15.75c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.061l2.47-2.47-2.47-2.47c-.293-.293-.293-.768 0-1.061s.768-.293 1.061 0l3 3c.293.293.293.768 0 1.061l-3 3c-.147.148-.339.221-.531.221z"/></svg>
        </div>
      </div>
    </>
  )
}