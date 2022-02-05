// import logo from './logo.svg';
// import './App.css';
import { useEffect, useState } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Task from './components/Task/Task';
import Test from './components/Task/test';

function App() {
  const [name, setName] = useState('mon prénom');

  useEffect(() => {
    setName(prompt('mon prénom'))}
  , []);
  return (
    <div className="App">
      <Header title={name}/>
      {/* <Task /> */}
      <Test />
      <Footer />
    </div>
      
    
    
  );

}

export default App;
