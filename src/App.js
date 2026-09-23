import { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import { Calculator, Container, DisplayWrapper, ButtonGrid, ButtonRow } from './styles';

const BUTTON_ROWS = [
  ['7', '8', '9', '÷'],
  ['4', '5', '6', '×'],
  ['1', '2', '3', '-'],
  ['0', 'C', '+', '='],
];

const calculate = (firstValue, secondValue, operator) => {
  switch (operator) {
    case '+':
      return firstValue + secondValue;
    case '-':
      return firstValue - secondValue;
    case '×':
      return firstValue * secondValue;
    case '÷':
      return firstValue / secondValue;
    default:
      return secondValue;
  }
};

const App = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [storedValue, setStoredValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondValue, setWaitingForSecondValue] = useState(false);

  const clearCalculator = () => {
    setDisplayValue('0');
    setStoredValue(null);
    setOperator(null);
    setWaitingForSecondValue(false);
  };

  const handleDigit = (digit) => {
    if (waitingForSecondValue) {
      setDisplayValue(digit);
      setWaitingForSecondValue(false);
      return;
    }

    setDisplayValue((previousValue) =>
      previousValue === '0' ? digit : previousValue + digit
    );
  };

  const handleOperator = (nextOperator) => {
    const inputValue = Number(displayValue);

    if (storedValue === null) {
      setStoredValue(inputValue);
    } else if (operator) {
      const result = calculate(storedValue, inputValue, operator);
      setStoredValue(result);
      setDisplayValue(String(result));
    }

    setOperator(nextOperator);
    setWaitingForSecondValue(true);
  };

  const handleEquals = () => {
    if (!operator || storedValue === null) {
      return;
    }

    const result = calculate(storedValue, Number(displayValue), operator);
    setDisplayValue(String(result));
    setStoredValue(null);
    setOperator(null);
    setWaitingForSecondValue(false);
  };

  const handleButtonClick = (value) => {
    if (/\d/.test(value)) {
      handleDigit(value);
      return;
    }

    if (value === 'C') {
      clearCalculator();
      return;
    }

    if (['+', '-', '×', '÷'].includes(value)) {
      handleOperator(value);
      return;
    }

    if (value === '=') {
      handleEquals();
    }
  };

  return (
    <Container>
      <Calculator>
        <DisplayWrapper>
          <Input value={displayValue} />
        </DisplayWrapper>

        <ButtonGrid>
          {BUTTON_ROWS.map((row, rowIndex) => (
            <ButtonRow key={`row-${rowIndex}`}>
              {row.map((label) => {
                const isOperator = ['+', '-', '×', '÷'].includes(label);
                const isEqual = label === '=';
                const isClear = label === 'C';

                return (
                  <Button
                    key={label}
                    label={label}
                    variant={isEqual ? 'equal' : isOperator ? 'operator' : isClear ? 'clear' : 'default'}
                    onClick={handleButtonClick}
                  />
                );
              })}
            </ButtonRow>
          ))}
        </ButtonGrid>
      </Calculator>
    </Container>
  );
};

export default App;
