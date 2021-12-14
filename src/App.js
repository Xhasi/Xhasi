import './App.css';
import React from 'react';
 
class App extends React.Component{
  constructor(props){
    //State initialization
    super(props);
    this.state = {
      items : []
    }
    
    //Function Binding
    this.addITM = this.addItem;
    this.deleteITM = this.deleteItem;
  }
  addItem = () =>{
    let newItem = document.getElementById("input-field").value;
     if (newItem.length <= 0){
       alert("no information")
     }
     else{
      let timeStamp = new Date();
      this.setState({
        items: [...this.state.items, [newItem, timeStamp.toLocaleString()]]
      });
      document.getElementById("input-field").value = "";
     }
  }

  deleteItem(indexElement){
    let listOfthings = this.state.items;
    listOfthings.splice(indexElement, 1);
    this.setState({
      items: [...listOfthings]
    })
  }

  render(){
    return (<div className="container">
      <div className = "caption-section">
        <h1>To Do List</h1>
        <input type = "text" id = "input-field"/>
        <button id = "commit" onClick = {() => this.addItem()}>Enter</button>
      </div>
      <table id = "list-wrapper">
        <thead>
          <tr>
            <th>Index</th>
            <th>Decription</th>
            <th>Time Stamp</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {this.state.items.map((item) => {
            return (<tr>
              <td>{this.state.items.indexOf(item)}</td>
              <td>{item[0]}</td>
              <td>{item[1]}</td>
              <td><button onClick = {() => this.deleteITM(this.state.items.indexOf(item))}>X</button></td>
            </tr>)
          })}
        </tbody>
      </table>
    </div>)
  }
}

export default App;
