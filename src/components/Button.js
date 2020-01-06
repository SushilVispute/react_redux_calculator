import React, { Component } from "react";
import { connect } from "react-redux";
import {
  numberPressed,
  clearPressed,
  operationPressed,
  dotPressed
} from "../actions/actions";
import PropTypes from "prop-types";
import { keyPad } from "../constant";

class Button extends Component {
  render() {
    const { getNumber, getOperation, getDot, getClear } = this.props;
    const keyPadList = keyPad.map(btn => {
      if (btn === ".") {
        return (
          <button key={btn} onClick={() => getDot(btn)}>
            {btn}
          </button>
        );
      } else if (btn === "AC") {
        return (
          <button key={btn} className="ac" onClick={() => getClear()}>
            {btn}
          </button>
        );
      } else {
        return isNaN(btn) && btn !== "." ? (
          <button key={btn} onClick={() => getOperation(btn)}>
            {btn}
          </button>
        ) : (
          <button key={btn} onClick={() => getNumber(btn)}>
            {btn}
          </button>
        );
      }
    });
    return <div className="keyPad">{keyPadList}</div>;
  }
}
Button.propTypes = {
  getNumber: PropTypes.func,
  getOperation: PropTypes.func,
  getDot: PropTypes.func,
  getClear: PropTypes.func
};
const mapDispatchToProps = dispatch => {
  return {
    getNumber: num => dispatch(numberPressed(num.toString())),
    getOperation: op => dispatch(operationPressed(op)),
    getDot: dot => dispatch(dotPressed(dot)),
    getClear: cl => dispatch(clearPressed())
  };
};
export default connect(null, mapDispatchToProps)(Button);
