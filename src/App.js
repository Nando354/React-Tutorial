import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'




const App = props => {
  const [ personsState, setPersonsState ] = useState({  // add square brackets to left of equal sign
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 26}
        
    ],
    otherState: 'some other value'
  });
  
  const switchNameHandler = () => {  // This is now an inner function that performs an action
  // console.log('Was clicked!');
    setPersonsState({ //Changed to setPersonsState
      persons: [
        { name: 'Maximilliano', age: 28 }, //Name is changed
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 } //Age is changed
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really Working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>  
       <Person name={personsState.persons[0].name}age={personsState.persons[0].age}/>
       <Person name={personsState.persons[1].name}age={personsState.persons[1].age}>My Hobbies: Racing</Person>
       <Person name={personsState.persons[2].name}age={personsState.persons[2].age}/>
    </div>
  );
}


//-------------------------Other
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;




//----------------Save for later--Part of class

// state = {
//   persons: [
//     { name: 'Max', age: 28},
//     { name: 'Manu', age: 29},
//     { name: 'Stephanie', age: 26}
  
//   ],
//   otherState: 'some other value'
// }

// switchNameHandler = () => {  // This is a function of your class or a property that holds a function that can be executed.
//   // console.log('Was clicked!');
//   this.setState({
//     persons: [
//       { name: 'Maximilliano', age: 28 }, //Name is changed
//       { name: 'Manu', age: 29 },
//       { name: 'Stephanie', age: 27 } //Age is changed
//     ]
//   } )  
// }