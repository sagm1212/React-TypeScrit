import React from 'react';
import { Sub } from '../types';

interface Props {
  subs: Array<Sub>
}

const List: React.FC<Props> = ({ subs }) => {
  return (
    <ul>
      {subs.map(sub => (
        <li key={sub.id}>
          <img src={sub.avatar} alt={sub.name} style={{ width: '100px', height: '100px' }} />
          <h4>{sub.name}</h4>
          <p>{sub.description ? sub.description : "No description available"}</p>
        </li>
      ))}
    </ul>
  );
}

export default List;
