import {
  NUMBER_PRESSED,
  CLEAR_PRESSED,
  OPERACTION_PRESSED,
  DOT_PREESED
} from "../actions/actions";
import { handleOperand, handleNumber, handdleDot } from "../calculation";
import { resetState } from "../constant";

const initialState = {
  result: "0",
  firstOperand: null,
  waitting: false,
  operator: null
};

export const CalculationReducer = (state = initialState, action) => {
  switch (action.type) {
    case NUMBER_PRESSED:
      let { resultNum } = handleNumber(state, action.payload);
      // console.log("NUMBER_PRESSED", state, action.payload);
      return {
        ...state,
        result: resultNum,
        waitting: false
      };

    case OPERACTION_PRESSED:
      // console.log("OPERACTION_PRESSED", state, action.payload);
      return {
        ...state,
        waitting: true,
        operator: action.payload,
        firstOperand: handleOperand(state),
        result: String(handleOperand(state))
      };

    case DOT_PREESED:
      // console.log("DOT_PREESED", action.payload);
      let { resultDot } = handdleDot(state, action.payload);
      return {
        ...state,
        // waitting: true,
        result: resultDot
      };

    case CLEAR_PRESSED:
      return {
        ...resetState
      };

    default:
      return state;
  }
};
