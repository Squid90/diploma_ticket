import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Main } from './components/main/Main'
import { Choose__train } from './components/main/Order/choose__train/Choose__train';
import { Header__order } from './components/header/header__order/Header__order';
import { Header__success } from './components/header/header__order/Header__success';
import { Main__success } from './components/main/Main__success';


const App: React.FC = () => {
  return ( 
    <>
    <BrowserRouter basename='/diploma_ticket'>
    {/* <BrowserRouter> */}
      <Routes >
        <Route path="/" element={<Header />} />
        <Route path="/choosetrain/*" element={<Header__order />} />
        <Route path="/choosetrain/chooseplace/choosepassangers/choosepay/checkinfo/success" element={<Header__success />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/choosetrain/*" element={<Choose__train />} />
        <Route path="/choosetrain/chooseplace/choosepassangers/choosepay/checkinfo/success" element={<Main__success />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
};





// function App() {
//   return (
//     <>
//       <Header />
//       <Main />
//       <Footer />
//     </>
//   )
// }

export default App
