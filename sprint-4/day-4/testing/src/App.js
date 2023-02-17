import './App.css';
import Button from './components/button/Button';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Button colorScheme='red'>Click Me</Button>
          <Counter/>
      </div>
  );
}

export default App;
