import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting = "Nice to meet you!" name = "Sara" age = "25" />
      <StatefulGreeting  name="mahsa" />
    </div>
  );
}

export default App;
