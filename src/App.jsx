
import './App.css';
import { useState } from 'react';
import NewOrderPage from './pages/NewOrderPage/NewOrderPage';
import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistoryPage';
import AuthPage from './pages/Authpage/AuthPage';
import { Routes , Route } from 'react-router-dom';
import NavBar from './components/NavBar'



export default function  App() {
  const [user,setUser]= useState(null) // set up state
  return (
    <main className="App">
      { user ?
        <>
          <NavBar />
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
        :
        <AuthPage />
      }
    </main>
  );

    }
