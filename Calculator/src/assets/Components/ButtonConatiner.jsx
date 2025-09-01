import styles from './ButtonContainer.module.css'

function ButtonContainer({onCalButtonClick}){
  const buttonNames=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
  return(
    <div className={styles.btnContainer} >
      {buttonNames.map((buttonName)=>
         <button key={buttonName} className={styles.btn}
         onClick={()=>onCalButtonClick(buttonName)}
         >{buttonName} </button>
         )}
      </div>

  );
}
export default ButtonContainer;