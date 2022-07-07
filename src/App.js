
import './App.scss';
import ChartBasic from './components/ChartBasic';
import { useMainContext } from './context/MainContext';

function App() {
  const {  turnOffSuscription } = useMainContext()
  return (
    <div className="App">


      <button onClick={() => turnOffSuscription()}> STOP FEED</button>



      <ChartBasic />
    </div>
  );
}

export default App;
