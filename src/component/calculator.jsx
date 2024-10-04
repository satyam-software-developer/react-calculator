import styles from "./calculator.module.css"; // Importing CSS module to apply scoped styles to the calculator component

const Calculator = ({
  calculate,
  handleClear,
  handleClick,
  result,
  handleMinus,
}) => {
  return (
    <>
      <div className={styles.main}>
        {/* Toggle buttons for design only - these are UI elements that don't have functionality, added for aesthetic purposes */}
        <span className={styles.toggle}></span>
        <span className={styles.toggle}></span>
        <span className={styles.toggle}></span>

        {/* Title section - displays the heading "Calculator" */}
        <div className={styles.title}>
          <h1>Calculator</h1>
        </div>

        {/* Screen input - displays the current result or input being typed by the user */}
        <div className={styles.inputCont}>
          <input type="text" value={result} />{" "}
          {/* Input field showing the result value */}
        </div>

        {/* Keypad section containing all calculator buttons */}
        <div className={styles.keypad}>
          {/* Clear button - triggers the handleClear function to reset the input */}
          <button onClick={handleClear}>C</button>

          {/* Plus/Minus toggle button - triggers the handleMinus function to toggle the value between positive and negative */}
          <button onClick={handleMinus}>+/-</button>

          {/* Percentage button - triggers handleClick with the "%" value */}
          <button value="%" onClick={handleClick}>
            %
          </button>

          {/* Division button - triggers handleClick with the division symbol; styled as an operator */}
          <button className={styles.operator} value="/" onClick={handleClick}>
            &divide;
          </button>

          {/* Number buttons - trigger handleClick with the respective numbers (7, 8, 9) */}
          <button value="7" onClick={handleClick}>
            7
          </button>
          <button value="8" onClick={handleClick}>
            8
          </button>
          <button value="9" onClick={handleClick}>
            9
          </button>

          {/* Multiplication button - triggers handleClick with the multiplication symbol; styled as an operator */}
          <button className={styles.operator} value="*" onClick={handleClick}>
            &times;
          </button>

          {/* Number buttons - trigger handleClick with the respective numbers (4, 5, 6) */}
          <button value="4" onClick={handleClick}>
            4
          </button>
          <button value="5" onClick={handleClick}>
            5
          </button>
          <button value="6" onClick={handleClick}>
            6
          </button>

          {/* Addition button - triggers handleClick with the addition symbol; styled as an operator */}
          <button className={styles.operator} value="+" onClick={handleClick}>
            +
          </button>

          {/* Number buttons - trigger handleClick with the respective numbers (1, 2, 3) */}
          <button value="1" onClick={handleClick}>
            1
          </button>
          <button value="2" onClick={handleClick}>
            2
          </button>
          <button value="3" onClick={handleClick}>
            3
          </button>

          {/* Subtraction button - triggers handleClick with the subtraction symbol; styled as an operator */}
          <button className={styles.operator} value="-" onClick={handleClick}>
            -
          </button>

          {/* Zero button - styled to take up more space on the keypad */}
          <button className={styles.zero} value="0" onClick={handleClick}>
            0
          </button>

          {/* Decimal button - allows decimal input, triggers handleClick with the value "." */}
          <button value="." onClick={handleClick}>
            .
          </button>

          {/* Equal button - triggers the calculate function to perform the calculation and return the result */}
          <button className={styles.operator} onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </>
  );
};
export default Calculator; // Exporting the Calculator component for use in other parts of the app
