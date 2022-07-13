
import './App.scss';
import Dashboard from './components/Dashboard/Dashboard';
import ExchangeSelector from './components/ExchangeSelector/ExchangeSelector';
import { useMainContext } from './context/MainContext';

function App() {
  const { closeConnection } = useMainContext() 
  return (
    <div className="App">


      <button style={{ display: 'flex' }} onClick={() => closeConnection()}> STOP FEED</button>

      <ExchangeSelector />

      <Dashboard />
    </div>
  );
}

export default App;
