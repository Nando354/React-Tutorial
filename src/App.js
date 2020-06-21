import React, { Component } from 'react';
import './App.css'
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {  
    this.setState({
      persons: [
        { name: newName, age: 28 }, //Name is changed
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 } //Age is changed
      ]
    } )  
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons:[
        { name: 'Max', age: 28 }, 
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
       <h1>Hi, I'm a React App!</h1>
       <p>This is really working!</p>
       <button onClick={this.switchNameHandler.bind(this, "Maxington")}>Switch Name</button>  
       <Person 
        name={this.state.persons[0].name}
        age={this.state.persons[0].age} />
       <Person 
        name={this.state.persons[1].name}
        age={this.state.persons[1].age} 
        click={this.switchNameHandler.bind(this, 'Max!')}
        changed={this.nameChangedHandler} >My Hobbies: Racing</Person> 
       <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
      </div>
    );
  }
}

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