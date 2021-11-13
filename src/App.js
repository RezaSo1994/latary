import BuyTickets from './components/buy-tickets/comp';
import ConnectWallet from './components/connect-wallet/comp';
import FinishedRounds from './components/finished-rounds/comp';
import GetTickets from './components/get-tickets/comp';



function App() {
  return (
    <div className="App">
      <BuyTickets />
      <GetTickets />
      <ConnectWallet />
      <FinishedRounds />
    </div>
  );
}

export default App;
