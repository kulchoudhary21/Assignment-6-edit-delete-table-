import React from "react";
import "./App.css";
import Buttton from "./Componenet/Button";
import Form from "./Componenet/Form";
import Input from "./Componenet/Input";
import Label from "./Componenet/Label";
import View from "./Componenet/View";
import { handleValidation } from "./utils";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      date: "",
      option: "",
      select: "",
      passwd: "",
      file: "",
      list: [],
      count:1
    };
  }

  addList() {
    
    let list = this.state.list;
    list.push({
      name: this.state.name,
      email: this.state.email,
      select: this.state.select,
      option: this.state.option,
      date: this.state.date,
      file: this.state.file,
    });
    this.setState({ list: list });
  }
 
  render() {
    return (
      <div class="border border-5" class="container">
        <Form 
          name={this.state.name}
          email={this.state.email}
          date={this.state.date}
          option={this.state.option}
          select={this.state.select}
          passwd={this.state.passwd}
          file={this.state.file}
          onChangeName={(e) => this.setState({ name: e.target.value })}
          onChangeFile={(e) => this.setState({ file: e.target.value })}
          onChangeEmail={(e) => this.setState({ email: e.target.value })}
          onChangeDate={(e) => this.setState({ date: e.target.value })}
          onChangeSelect={(e) => this.setState({ select: e.target.value })}
          onChangePasswd={(e) => this.setState({ passwd: e.target.value })}
          onChangeOption={(e) => this.setState({ option: e.target.value })}
          onClick={() => {
            const error = handleValidation(this.state);
            if (Object.keys(error).length === 0) {
              this.addList();
            }
          }}
        />
        <br />
        <View
          list={this.state.list}
         
          onClick={() => {
            let list = this.state.list;
            list.pop();
            this.setState({ list: list });
          }}
          
          
        />
        <br />
        <div class="container">
        <Label msg="Which row you want to edit"/>
        <Input type="number" onChange={(e)=>{this.setState({count:e.target.value})}}/><br/>
        <Buttton msg="Edit" onClick={()=>
        {
          let list=this.state.list;
          let count=this.state.count;
          let editRow=list[count-1]
          console.log(editRow);
          let name=this.state.name;
          let email=this.state.email;
          let date=this.state.date;
          let option=this.state.option;
          let select=this.state.select;
          editRow.name=name;
          editRow.email=email;
          editRow.date=date;
          editRow.option=option;
          editRow.select=select;
          this.setState({list:list});
        }}/>

        {" "}
        <Buttton msg="Delete" onClick={()=>
        {
          let list=this.state.list;
          let count=this.state.count;
          list.splice(count-1,1);
          //delete list(count);
          
          
          this.setState({list:list});
        }}/>

        </div>
        <br />
        <br/>
        <br />
      </div>
    );
  }
}
export default App;
