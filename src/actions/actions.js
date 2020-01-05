import { addValueToCalculation, calculation } from "../calculation";

export const NUMBER_PRESSED = "NUMBER_PRESSED";
export const CLEAR_PRESSED = "CLEAR_PRESSED";
// export const EQUAL_PREESED = "EQUAL_PREESED";

// export const equalPressed = eq => buttonPressed(EQUAL_PREESED, eq);

export const numberPressed = (inputValue, currentState, currentResult) => {
  let updateCalculationArray = addValueToCalculation(inputValue, currentState);
  let calculationResult = calculation(updateCalculationArray, currentResult);
  return {
    type: NUMBER_PRESSED,
    payload: {
      calculation: updateCalculationArray,
      result: calculationResult
    }
  };
};

export const clearPressed = () => {
  return {
    type: CLEAR_PRESSED,
    payload: {
      calculation: [],
      result: 0
    }
  };
};
