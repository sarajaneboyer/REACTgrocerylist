import React from 'react'
import Grocery from './Grocery'


// puts a title on the top of the page
// maps through our items array and makes an unordered list
// creates unique keys for each item
const List = ({ items, name, groceryClick }) => (
  <div>
    <h2>{name}</h2>
    <ul>
      { items.map( item => <Grocery key={item.id} {...item} groceryClick={groceryClick} />) }
    </ul>
  </div>
);


export default List;


