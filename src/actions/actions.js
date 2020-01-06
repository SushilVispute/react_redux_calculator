import { resetState } from "../constant";

export const NUMBER_PRESSED = "NUMBER_PRESSED";
export const OPERACTION_PRESSED = "OPERACTION_PRESSED";
export const CLEAR_PRESSED = "CLEAR_PRESSED";
export const DOT_PREESED = "DOT_PREESED";

const buttonPressed = (type, payload) => ({
  type,
  payload
});

export const numberPressed = num => buttonPressed(NUMBER_PRESSED, num);
export const operationPressed = op => buttonPressed(OPERACTION_PRESSED, op);
export const dotPressed = dot => buttonPressed(DOT_PREESED, dot);
export const clearPressed = () =>
  buttonPressed(CLEAR_PRESSED, { ...resetState });
