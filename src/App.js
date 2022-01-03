
import './App.css';
 import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch ,
  Route
} from 'react-router-dom';

function App() {
  const[mode,setMode]=  useState('light');
  const [alert, setAlert] = useState(null);



  const showAlert=(message,type)=>{
    setAlert({msg:message,type:type})
    setTimeout(() => {
      setAlert(null);
      
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled",'success');
      document.title='TextUtils-DarkMode'
    }else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled",'success');
      document.title='TextUtils-LightMode'
    
    }
  }
  return (
    

<>
<Router>
<Navbar title="sudheer" aboutText="About1sudheer" mode={mode} toggleMode={toggleMode}/>
<div className="container">
<Alert alert={alert}/>
<Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
          </Route>
          
  </Switch>
</div>
</Router>
</>

  );
}

export default App;
