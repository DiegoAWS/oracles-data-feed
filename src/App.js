
import './App.scss';
import Dashboard from './components/Dashboard/Dashboard';
import ExchangeSelector from './components/ExchangeSelector/ExchangeSelector';
import { useMainContext } from './context/MainContext';

function App() {
  const { closeConnection } = useMainContext()
  return (
    <div className="App">

      <div className='headerSection'>
        <button className='stopFeedButton' onClick={() => closeConnection()}> STOP FEED</button>

        <ExchangeSelector />
      </div>

      <div className='bodySection'>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
