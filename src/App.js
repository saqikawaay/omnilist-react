import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      newItem:"",
      list:[]
    }
  }

updateInput(key, value){
  //update react state
  this.setState({
    [key]: value 
  });
}


  addItem(){
    //create item with unique id
    const newItem={
      id: 1+ Math.random(),
      value: this.state.newItem.slice()
    };

    //copy of current list of items
    const list = [...this.state.list];
    // add new item to list
    list.push(newItem);

    //update the state with new list and reset
    this.setState({
      list,
      newItem:""
    });
  }

deleteItem(id){
  //copy current list of items
  const list = [...this.state.list];


  // filter out item being deleted
  const updatedList = list.filter(item => item.id !== id);

  this.setState({list: updatedList});
}

  render () { 
    return (
      <div className="App">
        <div class="app-title">
          Your To-do List
          <br/>
          <input
            type="text"
            placeholder='new item...'
            class="new-item-input"
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
            />
            <button
              type="submit"
              class="add-btn"
              onSubmit={() => {
                return this.addItem();
              }}
              >
              +
              </button>
              <br/>
              <ul>
                {this.state.list.map(item => {
                  return (
                    <li key={item.id}>
                      {item.value}
                      <button
                        onClick={() => this.deleteItem(item.id)}
                        class="delete-btn"
                        >
                          x
                      </button>
                    </li>
                  )
                })}
              </ul>
        </div>
      </div>
    );
  }
} 

export default App;