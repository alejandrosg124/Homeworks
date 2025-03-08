import React, { useState, useCallback } from 'react';
import { Son } from './Son';

export const Father = () => {
  const list = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);

  const increment = useCallback((num) => {
    setValor(valor + num);
  }, []);

  return (
    <div>
      <h1>Challenge #5</h1>
      <h2>Father</h2>
      <p>Total: {valor}</p>
      <hr />

      {list.map((n, idx) => (
        <Son
          key={idx}
          numero={n}
          increment={increment}
        />
      ))}
    </div>
  );
};

