import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [alert, setAlert] = useState(null)
  const [mode, setMode] = useState(false)
  // let name="Ronak"
  const showAlert=(msg,type)=>{
      setAlert({
        msg:msg,
        type:type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
  }
  const removeClasses=()=>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');

  }
  const toggleMode=(cls)=>{
    removeClasses()
    if(cls==='primary' || cls==='success' || cls==='danger' || cls==='warning')
    document.body.classList.add('bg-'+cls)
    else if(mode===false)
     { setMode(true)
       document.body.style.backgroundColor='#042743';
       showAlert("dark mode has been enabled ","success")
     }
     else
    { setMode(false)
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled ","success")
    }
  }
  return (
    <>
     <BrowserRouter>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    {/* <h1 className="App">Hello {name}</h1> */}
    <Alert alert={alert}/>
    {/* <TextForm showAlert={showAlert} mode={mode}/> */}
     {/* <About/> */}   
    
      <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode}/>}>  </Route>
          <Route exact path="/about" element={<About mode={mode}/>} >   </Route>
      </Routes>
    </BrowserRouter>    
    </>
  );
}

export default App;   
