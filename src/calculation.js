export const handleNumber = (state, num) => {
  // console.log("handleNumber", state, num);
  let { result, waitting } = state;
  if (waitting === true)
    return {
      resultNum: num,
      waittingNum: false
    };
  if (waitting === false)
    return {
      resultNum: result === "0" ? num : result + num
    };
};

export const handdleDot = (state, dot) => {
  // console.log("handdleDot", state, dot);
  let { result, firstOperand } = state;
  if (result === "0" && firstOperand === null) {
    return { resultDot: result };
  } else {
    if (!result.includes(dot)) return { resultDot: (result += dot) };
  }
};

const performCalculation = {
  "/": (firstOperand, secondOperand) => firstOperand / secondOperand,
  "*": (firstOperand, secondOperand) => firstOperand * secondOperand,
  "+": (firstOperand, secondOperand) => firstOperand + secondOperand,
  "-": (firstOperand, secondOperand) => firstOperand - secondOperand,
  "=": (firstOperand, secondOperand) => secondOperand
};

export const handleOperand = state => {
  // console.log("handleOperand", state);
  let { result, firstOperand, operator } = state;
  const inputValue = parseFloat(result);
  if (firstOperand == null) {
    return inputValue;
  } else if (operator) {
    const currentValue = firstOperand || 0;
    const result = performCalculation[operator](currentValue, inputValue);
    // console.log("result", result);
    return result;
  }
};
