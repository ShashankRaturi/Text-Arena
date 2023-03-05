import './App.css';
import React ,{ useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert'
// import {
//   BrowserRouter as Router,
//   Route,

// } from "react-router-dom";

//var name = "Shashank Raturi Ji";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message , type) => {
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode  = () => {
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled" , "success")
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(51 68 82)'
      showAlert("Dark Mode has been enabled" , "success")
    }
      
  }
  const toogleModeRed = () => {
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled" , "success")
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = '#bd2929'
      showAlert("Red Mode has been enabled" , "success")
    }
  }
  const toogleModePink = () => {
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled" , "success")
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = '#c769a7'
      showAlert("Pink Mode has been enabled" , "success")
    }
  }

  return (
    <>
      
      {/* <Router> */}
        <Navbar title="TextArena" about="About us" mode={mode} toggleMode = {toggleMode} toogleModePink = {toogleModePink}  toogleModeRed={toogleModeRed}/>
        <Alert alert={alert}/>
        <div className="container">
          {/* <Routes> */}
            {/* <Route   exact path="/about"  element={<About/>}  /> */}
            {/* <Route eaxct path="/" element = {*/}
            <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
          {/* </Routes>  */}
        </div>
      {/* </Router> */}
    </>
  ); 
}

export default App;
