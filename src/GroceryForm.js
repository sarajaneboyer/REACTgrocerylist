import React from 'react';

class GroceryForm extends React.Component {
  // create a method to stop our form from making the page refresh
  handleSubmit = (e) => {
    e.preventDefault();
  };


  // use our handleSubmit here to stop the page from refreshing
  // the this here is our class
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input required placeholder="Add a Grocery Item" />
      </form>
    );
  };
 
};


export default GroceryForm;