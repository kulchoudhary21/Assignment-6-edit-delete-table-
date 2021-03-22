import React from "react";
import Buttton from "./Button";
import Input from "./Input";
import Label from "./Label";
import Radio from "./Radio";
import Select from "./Select";

function Form(props) {
  return (
    <div class="container">
      <div class="text-center">
        <h2 class="text-center" class="font-monospace">
          Registration form
        </h2>
      </div>
      <br />
      <Input
        type="text"
        placeholder="Your Name"
        
        onChange={props.onChangeName}
      />
      <br />
      <Input
        type="email"
        placeholder="Your Email"
        onChange={props.onChangeEmail}
      />
      <br />
      <Input type="date" placeholder="Your DOB" onChange={props.onChangeDate} />
      <br />
      <Label msg="Select Gender" />
      <Label msg="Male" />
      <Radio
        value="male"
        checked={props.option==="male"}
        onChange={props.onChangeOption}
        
      />
      <Label msg="female" />
      <Radio
        value="female"
        checked={props.option==="female"}
        onChange={props.onChangeOption}
        
      />
      <br />
      <Label msg="Select Your Pic" />
      <Input type="file" placeholder="Pic" onChange={props.onChangeFile} />
      <br />
      <Label msg="Select Education Level" />
      <select 
        class="form-select form-select-mb mb-3"
        onChange={props.onChangeSelect}
      >
        <Select inner="Graduate" />
        <Select inner="Post Graduate" />
        <Select inner="Under Graduate"/>
      </select>
      <br />
      <Input
        type="password"
        placeholder="Password"
        onChange={props.onChangePasswd}
      />
      <br />
      <Buttton type="submit" msg="Display" onClick={props.onClick}/>
    </div>
  );
}
export default Form;
