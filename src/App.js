import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import GroceryForm from './GroceryForm';


class App extends Component {
  // sets the original state for our grocery list items
  
  
  state = {
    groceries: [
      { id: 1, name: "arugula", complete: true, },
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


  // whenever you have a class you have a render() method
  // here we can render the List we created in List.js
  render() {
    const { groceries } = this.state;
    return (
      <div className="app">
        <List name="Grocery List" items={groceries} />
        <GroceryForm />
      </div>
    );
  };


} 

export default App;