import { NUMBER_PRESSED, CLEAR_PRESSED } from "../actions/actions";

const initialState = {
  calculation: [],
  result: 0
};

export const CalculationReducer = (state = initialState, action) => {
  switch (action.type) {
    case NUMBER_PRESSED:
      console.log("NUMBER_PRESSED", action.payload.calculation);
      return {
        calculation: action.payload.calculation,
        result: action.payload.result
      };

    // case EQUAL_PREESED:
    //   console.log("EQUAL_PREESED", action.payload).toString());
    //   return math.evaluate(action.payload).toString();
    // return {
    //   ...state,
    //   value: math.evaluate(action.payload)
    // };

    case CLEAR_PRESSED:
      return {
        calculation: [],
        result: 0
      };

    default:
      return state;
  }
};
