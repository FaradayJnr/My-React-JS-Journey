
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello';

function App() {
  return (
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
    </div>
  );
}

export default App;
