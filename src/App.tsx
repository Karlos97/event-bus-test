import './App.css';
import IncrementingField from './components/IncrementingField/IncrementingField';
import Screen from './components/Screen/Screen';

function App() {
  return (
    <div
      style={{
        padding: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Screen heading="FUNCTION EVENT BUS" />
      <IncrementingField />
    </div>
  );
}

export default App;
