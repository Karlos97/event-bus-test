import React, { useState } from 'react';
import eventBus from '../hooks/eventBusFunction';

const Screen: React.FC<{ heading: any }> = ({ heading }) => {
  const [registerValue, setRegisterValue] = useState(0);
  const value = eventBus.subscribe('functionEventBus', (obj: any) => {
    setRegisterValue(obj.value);
  });

  // ...sometime later where I no longer want subscription...
  //   value.remove();
  return (
    <div
      style={{
        background: 'gray',
        width: '400px',
        height: '150px',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '10px',
        padding: '10px',
      }}
    >
      <h1>{heading} </h1>
      <p>Value transfered by event bus: {registerValue} </p>
    </div>
  );
};

export default Screen;
