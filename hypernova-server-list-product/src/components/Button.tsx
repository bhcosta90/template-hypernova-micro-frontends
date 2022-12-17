import React, { useState } from 'react';

export const Button = () => {
  const [names, setNames] = useState([]);

  const addName = (name: string) => {
    setNames((prev: any): any => {
      return [name, ...prev];
    });
  };

  return <div>
    <button onClick={() => addName(Date.now().toString())}>
      Hello World {names.map((rs: any, k: number) => <span key={k}>{rs}</span>)}
    </button>
  </div>
}

export default Button