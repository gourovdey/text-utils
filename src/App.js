import './App.css';
import React, {useState} from 'react'

import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  const [mode, setMode] = useState('light')

  const[alert, setAlert] = useState(null)

  const showAlert =(message, type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#05213d'
      showAlert("Dark mode has been enabled", "success")
     /*  document.title = "TextUtils - Dark Mode" */
      
      // setInterval(() => {
      //   document.title = "TextUtils is amazing"
      // }, 2000);
      
      // setInterval(() => {
      //   document.title = "Install TextUtils now"
      // }, 1500);
    }

    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      /* document.title = "TextUtils - Light Mode" */
    }
  }

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      {/* <Navbar/> */}

      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert= {alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element ={<TextForm heading="Try TextUtils - Word Counter, Character Counter, Capitalize" mode={mode} showAlert = {showAlert} />} />

            <Route exact path="/about" element= {<About mode={mode} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
