import './App.css';
import { useState } from 'react';
import Dashboard from './component/Dashboard';
import SideNavbar from './component/SideNavbar';
import { Route, Routes } from 'react-router-dom';
import Product from './component/Product';
import Orders from './component/Orders';

function App() {
  const [sidenavbar, setSidenavbar] = useState(true);
  return (
    <>
      <SideNavbar sidenavbar={sidenavbar} setSidenavbar={setSidenavbar}/>
    <Routes>
      <Route path='/' element={<Dashboard sidenavbar={sidenavbar}/>}/>
      <Route path='/product' element={<Product sidenavbar={sidenavbar}/>}/>
      <Route path='/orders' element={<Orders sidenavbar={sidenavbar}/>}/>
    </Routes>
    </>
  );
}

export default App;
