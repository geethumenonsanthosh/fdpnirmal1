import logo from './logo.svg';
import './App.css';
import View from './components/View';
import Home from './components/Home';
import Addemployee from './components/Addemployee';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Viewemp from './components/Viewemp';
import Add from './components/Add';

function App() {
  return (
    <div className="App">
      {/* <h1> EMPLOYEES</h1> */}
      {/* <View/> */}
     
      {/* <Addemployee/> */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Viewemp/> }/>
        <Route path='/add' element={<Add data={{sname:'',age:'',pos:'',salary:''}} method='post' />}/>
    
        <Route path='/view' element={<Viewemp/>}/>
      </Routes>
    </div>
  );
}

export default App;
