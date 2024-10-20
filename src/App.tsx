import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Main } from './components/main/Main'
import { Choose__train } from './components/main/Order/choose__train/Choose__train';
import { Header__order } from './components/header/header__order/Header__order';


const App: React.FC = () => {
  return ( 
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/choosetrain/*" element={<Header__order />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/choosetrain/*" element={<Choose__train />} />
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
