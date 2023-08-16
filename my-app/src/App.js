import './App.css';
//import FunctionalGreeting from './components/FunctionalGreeting';
//import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
//import StatefulGreeting from './components/StatefulGreeting';
//import EventsClass from "./components/EventsClass";
//import EventsFunctional from "./components/EventsFunctional";
//import NestingComponents from "./components/NestingComponents";
import MethodsAsPropsParent from "./components/MethodsAsPropsParent";


//import ConditionalRenderingClass from "./components/ConditionalRenderingClass";
//import ConditionalRenderingFunctional from "./components/ConditionalRenderingFunctional";

function App() {
  return (
    <div className="App">
    {/*
     <NestingComponents />
      
      <ConditionalRenderingFunctional connected={true} />
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting = "Nice to meet you!" name = "Sara" age = "25" />
      <StatefulGreeting  name="mahsa" />
      <hr/>
      <EventsFunctional />
      <EventsClass />

     */}
           <MethodsAsPropsParent />

     
    </div>
  );
}

export default App;
