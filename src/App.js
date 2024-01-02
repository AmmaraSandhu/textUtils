import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { Alert } from './components/Alert';
import About from './components/About';
import  { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //Wether dark mode is enabled or not
  const [alert, setAlert] = useState({});

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert({})
    }, 2000);


  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(15 41 68)';
      showAlert("Dark mode has beeen enabled", "success");
      document.title = 'TexTutils - dark mode';
      // setTimeout(() => {
      //   document.title = 'TexTutils - is Amazing' ;
      // }, 2000);
      // setTimeout(() => {
      //   document.title= 'TextUtils - Install Now';
      // }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light mode';

    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container" my-8>

          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode} />}></Route>
          </Routes>

        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

{/* <Router>
      <Navbar title="TextUtils" mode={mode} onChangeMode={handleChangeMode}/>
      <Alert alert = {alert}/>  
      <div className="container my-3">
        <Routes>   
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm heading="Enter the text to analyze below" onShowAlert={showAlert}/>} />
        </Routes>
      </div>
   </Router> */}

//    <BrowserRouter>
// 	<Routes>
// 		<Route path='Path You want to use' element={<What you want to render >}/> 
// 		// Example-->  <Route path="/about" element={<About />}></Route>	
// 	</Routes>
// </BrowserRouter>
