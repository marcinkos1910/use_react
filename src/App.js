import './App.css';
import ContextComponent from './components/Context';
import EffectComponent from './components/Effect';
import ReducerComponent from './components/Reducer';
import RefComponent from './components/Ref';
import StateComponent from './components/State';

function App() {
  return (
    <div className="App">
      <StateComponent/>
      <hr/>
      {/* <EffectComponent/> */}
      <hr/>
      <ContextComponent/>
      <hr/>
      <RefComponent/>
      <hr/>
      <ReducerComponent/>
    </div>
  );
}

export default App;
