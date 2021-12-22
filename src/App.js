
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import Alert from './components/Alert';



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
<Navbar title="sudheer" aboutText="About1" mode={mode} toggleMode={toggleMode}/>
<div className="container">
  <Alert alert={alert}/>
<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
{/* <About></About> */}
</div>


</>
  );
}

export default App;
