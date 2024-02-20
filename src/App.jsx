import styles from "./App.module.css";
import Display from "./Components/Display";
import ButtonsContaniner from "./Components/ButtonsContainer";
import { useState } from "react";

function App() {
  let [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonName) => {
    if (buttonName === "C") {
      setCalVal("");
    } else if (buttonName === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonName;
      setCalVal(newDisplayValue);
    }
    console.log(buttonName);
  };

  return (
    <>
      <div className={styles.calculator}>
        <Display displayValue={calVal}></Display>
        <ButtonsContaniner onButtonClick={onButtonClick}></ButtonsContaniner>
      </div>
    </>
  );
}

export default App;
