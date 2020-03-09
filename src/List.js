import React from 'react'


// puts a title on the top of the page
// maps through our items array and makes an unordered list
// creates unique keys for each item
const List = ({items, name}) => (
  <div>
    <h2>{name}</h2>
    <ul>
      { items.map( item => <li key={item.id}>{item.name}</li>) }
    </ul>
  </div>
);


export default List;


