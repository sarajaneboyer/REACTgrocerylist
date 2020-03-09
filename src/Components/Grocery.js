import React from 'react'

const Grocery = ({ id, name, complete, groceryClick }) => (
    <li
      style= { complete ? { ...styles.shopping, ...styles.complete} : styles.shopping }
      onClick={ () => groceryClick(id) }
      >
        {name}
      </li>
  );


  const styles = {
    shopping: {cursor: 'pointer'},
    complete: { color: 'grey', textDecoration: 'line-through' }
  };

export default Grocery;