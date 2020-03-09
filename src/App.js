import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './Components/List';
import GroceryForm from './Components/GroceryForm';
import Grocery from './Components/Grocery'


class App extends Component {
  // sets the original state for our grocery list items
  
  
  state = {
    groceries: [
      { id: 1, name: "arugula", complete: false, },
      { id: 2, name: "eggs", complete: false, },
      { id: 3, name: "broccoli", complete: false, },
    ]
  };

  // prints the groceries to the page from our App class
  // renderGroceries = () => {
  //   const { groceries } = this.state;
  //   return groceries.map( item =>
  //     <li key={item.id}>{item.name}</li>
  //     )
  // };
  // moved this to the logic of List's own .js
  // this keeps our App.js cleaner

  // helper method from notes for getting a unique id for new grocery items
  getUniqId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  }

  // this is our function communicating with GroceryForm
  addItem = (name) => {
    // create an array copy of our state array
    const { groceries } = this.state;
    // create the new id based on their entry, give it a new id, default to not complete
    const item = {name, id: this.getUniqId(), complete: false}
    // add our new item into our state array
    this.setState({ groceries: [item,...groceries] });
  };

  handleClick = (id) => {
    const { groceries } = this.state
    this.setState({
      groceries: groceries.map( grocery => {
        if (grocery.id === id) {
          return {
            ...grocery,
            complete: !grocery.complete
          }
        }
        return grocery
      })
    })

  }


  // whenever you have a class you have a render() method
  // here we can render the List we created in List.js
  render() {
    const { groceries } = this.state;
    return (
      <div className="app">
        <List name="Grocery List" items={groceries} groceryClick={this.handleClick} />
        <GroceryForm addItem={this.addItem} />
      </div>
    );
  };


} 

export default App;