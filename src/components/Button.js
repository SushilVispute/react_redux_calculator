import React, { Component } from "react";
import { connect } from "react-redux";
import { numberPressed, clearPressed } from "../actions/actions";
import PropTypes from "prop-types";

const keyPad = [
  "AC",
  "/",
  "*",
  "-",
  7,
  8,
  9,
  "+",
  4,
  5,
  6,
  "=",
  1,
  2,
  3,
  ".",
  0
];

class Button extends Component {
  render() {
    const { result, calculation, getNumber, getEqual, getClear } = this.props;
    const keyPadList = keyPad.map(btn => {
      if (btn === "=") {
        return (
          <button key={btn} className="keyPad" onClick={() => getEqual()}>
            {btn}
          </button>
        );
      } else if (btn === "AC") {
        return (
          <button key={btn} className="keyPad" onClick={() => getClear()}>
            {btn}
          </button>
        );
      } else {
        // return isNaN(btn) && btn !== "." ? (
        //   <button
        //     key={btn}
        //     className="keyPad"
        //     onClick={() => getOperation(btn)}
        //   >
        //     {btn}
        //   </button>
        // ) : (
        return (
          <button
            key={btn}
            className="keyPad"
            onClick={() => getNumber(btn, calculation, result)}
          >
            {btn}
          </button>
        );
        // );
      }
    });
    return <div className="keyPad">{keyPadList}</div>;
  }
}
Button.propTypes = {
  result: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  calculation: PropTypes.array,
  getNumber: PropTypes.func,
  getEqual: PropTypes.func,
  getClear: PropTypes.func
};
const mapStateToProps = state => {
  //   console.log("mapStateToProps", state.CalculationReducer);
  return {
    calculation: state.CalculationReducer.calculation,
    result: state.CalculationReducer.result
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getNumber: (inputValue, currentState, currentResult) => {
      dispatch(numberPressed(inputValue, currentState, currentResult));
    },
    getEqual: eq => {},
    getClear: cl => dispatch(clearPressed())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Button);
