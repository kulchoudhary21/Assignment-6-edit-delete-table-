import React from "react";
function Select(props) {
  return <option value={props.value}>{props.inner}</option>;
}
export default Select;
