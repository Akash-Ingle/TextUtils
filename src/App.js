import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar'
import Alert from './components/Alert';
import React,{useState} from 'react'
// import About from './components/About';
// import{
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light') // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert= (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert("Dark mode enabled!","success");
      document.title='TextUtils - Dark Mode'
      // setInterval(() => {
      //   document.title='TextUtils is amazing';
      // },2000);
      // setInterval(() => {
      //   document.title='Install TextUtils now!'
      // },1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode enabled!","success");
      document.title='TextUtils - Light Mode'
    }
  }
  return (
   <>
  {/* <Router> */}
  {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  {/* <Navbar/> */}
  <div className="container my-3">
  {/* <Routes>
          <Route path="/about" element={<About/>}>
          </Route> */}
          {/* <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}>
          </Route>
        </Routes> */}
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
  </div>
  {/* </Router> */}
   </>
  );
}

export default App;
