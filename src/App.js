import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About  from './components/About';
// import{
//   Route,
//   Routes
//   } from "react-router-dom";

function App() {

  const [mode ,setMode]=useState('light');
  const [alert ,setAlert]=useState(null);

const showAlert=(message,type)=>{
setAlert({
  msg:message,
  type:type
})
setTimeout(()=>{
  setAlert(null)
},1500)
}
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success")
      document.title='Textutils-Dark Mode';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success")
      document.title='Textutils-Light Mode'

    }
  }
  return (
    <>
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
    <Alert  alert={alert}/>
    {/* <Routes> */}
      {/* <Route exact path="/" element={<Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>} /> */}
      

      {/* <Route exact path="/" element={<Alert  alert={alert}/>} /> */}
      <TextForm showAlert={showAlert}  heading="Enter the text to analyze"  mode={mode}/>
      {/* <Route exact path="/" element={} /> */}
  

{/* <Navbar/> */}
  {/* <Switch> */}
    {/* <Route exact path="/about" element={<About />} /> */}
      

  {/* </Switch> */}
 
{/* </Routes> */}
  </>
  );
}

export default App;
