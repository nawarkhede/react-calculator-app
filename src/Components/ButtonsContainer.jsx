import styles from "./ButtonsContainer.module.css";

const ButtonsContaniner = ({ onButtonClick }) => {
  const buttonList = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    ".",
    "=",
  ];

  return (
    <div className={styles.buttonContaniner}>
      {buttonList.map((buttonName) => {
        return (
          <button
            className={styles.button}
            onClick={() => onButtonClick(buttonName)}
          >
            {buttonName}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonsContaniner;
