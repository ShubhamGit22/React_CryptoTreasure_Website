import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import DashboardPage from './pages/Dashboard';
import CoinPage from './pages/CoinPage';

const App = () => {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/dashboard' element={<DashboardPage/>}/>
                    <Route path='/coin/:id' element={<CoinPage/>}/>
                </Routes>
            </BrowserRouter>
         
        </div>
    );
}

export default App;
