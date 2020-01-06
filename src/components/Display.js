import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Display extends Component {
  render() {
    const { result } = this.props;
    return (
      <input className="display" type="text" disabled={true} value={result} />
    );
  }
}
Display.propTypes = {
  result: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
const mapStateToProps = state => {
  //   console.log("mapStateToProps", state.CalculationReducer);
  return {
    calculation: state.CalculationReducer.calculation,
    result: state.CalculationReducer.result
  };
};
export default connect(mapStateToProps, null)(Display);
