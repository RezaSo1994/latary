import React,{useState} from 'react';
import BuyTickets from './components/buy-tickets/comp';
import ConnectWallet from './components/connect-wallet/comp';
import FinishedRounds from './components/finished-rounds/comp';
import GetTickets from './components/get-tickets/comp';
import Pupup from './components/pupup-buy-ticket/comp'
import './App.css';


function App() {
  const [buyTicket,setBuyTicket] =useState(false)
  return (
    <div className="app">
      <BuyTickets />
      <GetTickets />
      <ConnectWallet />
      <FinishedRounds />
      <div className={ buyTicket ? 'pupup-show':'pupup-hide'} >
           <Pupup />
      </div>
    </div>
  );
}

export default App;
