import './App.css';
import ClassComponent from './components/ClassComponents';
import FunctionalComponent from './components/FunctionalComponent';
import { useState } from 'react';

function App() {

const company = "BWS";
const [name, setName] = useState('Komal');

  return (
  <div className="App"> 
  <h1>Class Component</h1>
  <ClassComponent />
  <br/>
  <h1>Functional Component</h1>
  <FunctionalComponent name= {name} age={18} company={company} 
  setName={setName}
  />
  
  </div>
  );
}

export default App;
