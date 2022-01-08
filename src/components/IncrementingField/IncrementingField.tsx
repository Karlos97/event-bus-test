import { useState } from 'react';
import Button from '../button/Button';
import eventBus from '../hooks/eventBusFunction';

function IncrementingField() {
  const [regValue, setRegValue] = useState(0);
  eventBus.publish('functionEventBus', { value: regValue });
  return (
    <Button onClick={() => setRegValue(regValue + 1)}>FC Increment</Button>
  );
}

export default IncrementingField;
