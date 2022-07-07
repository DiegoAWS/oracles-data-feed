
import './App.scss';
import BasicTable from './components/BasicTable/BasicTable';
import ChartBasic from './components/ChartBasic/ChartBasic';
import { useMainContext } from './context/MainContext';

function App() {
  const { turnOffSuscription } = useMainContext()
  return (
    <div className="App">


      <button onClick={() => turnOffSuscription()}> STOP FEED</button>



      <ChartBasic />
      <BasicTable />
    </div>
  );
}

export default App;
