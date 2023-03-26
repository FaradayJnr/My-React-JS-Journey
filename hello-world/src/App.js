
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello';
import Counter from './components/counter';

//functional component
function App() {
  return (
    //usage of self-closed tags
    <div className="App">
     {/* <Greet />
     <Welcome /> */}
     <Greet name="Danny">
     <p>This is Danny</p>
     </Greet>
     <Greet name="Eben">
      <button>Click here</button>
      </Greet>
     <Greet name="Emma" />
     <Counter /> 
    </div>
  );
}
//export
export default App;
