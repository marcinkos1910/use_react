import './App.css';
import CallbackComponent from './components/Callback';
import ContextComponent from './components/Context';
import EffectComponent from './components/Effect';
import ImperativeHandleComponent from './components/ImperativeHandle';
import LayoutEffectComponent from './components/LayoutEffect';
import MemoComponent from './components/Memo';
import ReducerComponent from './components/Reducer';
import RefComponent from './components/Ref';
import StateComponent from './components/State';

function App() {
  return (
    <div className="App">
      <StateComponent/>
      <hr/>
      <EffectComponent/>
      <hr/>
      <ContextComponent/>
      <hr/>
      <RefComponent/>
      <hr/>
      <ReducerComponent/>
      <hr/>
      <MemoComponent/>
      <hr/>
      <CallbackComponent/>
      <hr/>
      <LayoutEffectComponent/>
      <hr/>
      <ImperativeHandleComponent/>
    </div>
  );
}

export default App;
