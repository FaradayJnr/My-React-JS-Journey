
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello';
import Counter from './components/counter';
import Counter1 from './components/counter1';
import FuncClick from './components/FuncClick';
import ClassClick from './components/ClassClick';
import AnonymousFunc from './components/AnonymousFunc';
import AddImage from './components/AddImage';
import Conditional from './components/Conditional';
//functional component
function App() {
  return (
    //usage of self-closed tags
    <div className="App">
    {/* //  <Welcome name = "Rans"/> 
    //  <Welcome name = "Oppong"/> 
    //  <Greet name="Danny">
    //  <p>This is Danny</p>
    //  </Greet>
    //  <Greet name="Eben">
    //   <button>Click here</button>
    //   </Greet>
    //  <Greet name="Emma" />
    //  <Counter /> 
    //  <Counter1 /> */}
     {/* <FuncClick />
     <ClassClick />
     <AnonymousFunc /> */}
    <Conditional />
    </div>
  );
}
//export
export default App;
