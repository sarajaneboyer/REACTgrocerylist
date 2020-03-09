import React from 'react';
import Grocery from './Grocery'

export default class GroceryForm extends React.Component {
  // we need to be able to store new info somewhere
  state = { name: ''};

  handleChange = (e) => {
    this.setState({ name: e.target.value });
    console.log(e.target)
  };

  // create a method to stop our form from making the page refresh
  handleSubmit = (e) => {
    // prevents from refreshing page
    e.preventDefault();
    console.log(this.state.name)
    // add the item to our App state
    this.props.addItem(this.state.name);
    // clear the input box after submission
    this.setState({ name: '' });
  };

  // use our handleSubmit here to stop the page from refreshing
  // the this here is our class
  render() {
    const { name } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          value = {name}
          name = "name"
          onChange={this.handleChange}
          required 
          placeholder="Add a Grocery Item" />
      </form>
    );
  };
 
};