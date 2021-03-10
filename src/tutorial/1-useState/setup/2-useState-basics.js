import React, { useState } from 'react';
// useState - function - name import
// hooks starts with use
// component name must be uppercase
// must be in the function/component body
// cannot call conditionaly

const UseStateBasics = () => {
  const [title, setTitle] = useState('random title');

  const handleClick = () => {
    if(title === 'random title') {
      setTitle('hello world');
    } else {
      setTitle('random title');
    }
  }

  return (
    <React.Fragment>
      <h1>{title}</h1>
      <button className='btn' onClick={handleClick}>Change Title</button>
    </React.Fragment>
  );
};

export default UseStateBasics;
