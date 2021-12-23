import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/pages/MainPage';
import Basket from './components/pages/BasketPage';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="*" element={< Main />} />
      </Routes>
    </Router>
  );
}

export default App;
