import React from "react";
function Buttton(props) {
  return <button class="btn btn-primary" type={props.type} onClick={props.onClick}>
      {props.msg}
    </button>
  
}
export default Buttton;
