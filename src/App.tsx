import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashBoard from './pages/DashBoard';
import Product from './pages/product/Product';
import Inbox from './pages/inbox/Inbox';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path='/product' element={<Product/>}/>
        <Route path='/inbox' element={<Inbox/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
