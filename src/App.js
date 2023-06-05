import logo from './logo.svg';
import './App.css';
import View from './components/View';
import Home from './components/Home';
import Addemployee from './components/Addemployee';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <h1> EMPLOYEES</h1> */}
      {/* <View/> */}
     
      {/* <Addemployee/> */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/> }/>
        <Route path='/add' element={<Addemployee/>}/>
        <Route path='/view' element={<View/>}/>
      </Routes>
    </div>
  );
}

export default App;
