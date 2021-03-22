import React from "react";
function Input(props) {
  return <div class="mb-3" class="color" >
  <div class="form-control"> 
  <input class="form-control"
    type={props.type}
    placeholder={props.placeholder}
    onChange={props.onChange}
    value={props.value}
    required
  />
  </div>
  </div>
}
export default Input;
