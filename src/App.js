import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import MainPage from './pages/MainPage';
import BasketPage from './pages/BasketPage';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="*" element={< MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
