import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import EventsClass from "./components/EventsClass";
import EventsFunctional from "./components/EventsFunctional";

function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting = "Nice to meet you!" name = "Sara" age = "25" />
      <StatefulGreeting  name="mahsa" />
      <hr/>
      <EventsFunctional />
      <EventsClass />
    </div>
  );
}

export default App;
