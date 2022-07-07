
import './App.scss';
import Dashboard from './components/Dashboard/Dashboard';
import { useMainContext } from './context/MainContext';

function App() {
  const { turnOffSuscription } = useMainContext()
  return (
    <div className="App">


      <button style={{display:'none'}} onClick={() => turnOffSuscription()}> STOP FEED</button>



      <Dashboard />
    </div>
  );
}

export default App;
