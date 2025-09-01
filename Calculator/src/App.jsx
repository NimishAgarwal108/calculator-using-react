import styles from './App.module.css'
import Display from './assets/Components/Display';
import ButtonContainer from './assets/Components/ButtonConatiner';
import { useState } from 'react';

function App() {
  const [calVal,setCalVal]=useState("");
  const onButtonClick=(buttonText)=>
  {
    if(buttonText==='C'){
      setCalVal("");

    }
    else if(buttonText==='='){
      const result=eval(calVal);
      setCalVal(result);

    }
    else{
      const newDisplayValue=calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  }
  

  return (
    <div className={styles.calculator}>
       <h1 className={styles.title}>CASIO</h1>
        <Display displayValue={calVal}/>
        <ButtonContainer onCalButtonClick={onButtonClick}/>
    </div>
   
  );
}

export default App;
