import { useState } from 'react';
import eventBus from '../../helpers/hooks/eventBus';
import Button from '../button/Button';

function IncrementingField() {
  const [regValue, setRegValue] = useState(0);
  eventBus.publish('functionEventBus', { value: regValue });
  return (
    <Button onClick={() => setRegValue(regValue + 1)}>FC Increment</Button>
  );
}

export default IncrementingField;
