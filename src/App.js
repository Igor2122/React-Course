import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Igor', age: 32},
      {name: 'Reeem', age: 26},
      {name: 'Stephanie', age: 28},
    ],
      showPersons: false
  }

  deletePersonHandler = (peronIndex) => {
    // traditional
    // const persons = this.state.persons.slice();//copies the full array and returns & returns a new which is stored here
    // or spread operator: 
    const persons = [...this.state.persons]; // new array from the old array objects
    persons.splice(peronIndex, 1);// removes 1 element from the array
    this.setState({persons: persons}) // we set it back with removed element
  }
  

  nameChangedHandler = (event) => {
    this.setState({persons: [
      {name: 'Igor', age: 32},
      {name: event.target.value, age: 25},
      {name: 'Archie', age: 2}
    ]}); 
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;// does show is bool false
    this.setState({showPersons: !doesShow});// assign opposite to the above to toggle
  }

  

  render() {

    const style = {
      backgroundColor: '#93B0BA',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };


    let peronas = null;

    if(this.state.showPersons){
      peronas = (
        <div style={style}>
        {this.state.persons.map((person, index) => {
        // convert this array to valid jsx & reder the array with map()
        // will exc a method on the given arr
           return <Person 
                  name={person.name}
                  age={person.age}
                  click={() => this.deletePersonHandler(index)} /> // return jsx
        })} 
          <h1>Hi I am a React App</h1>
          <p>This is really working</p>
          {/* <button   
          onClick={this.switchNameHandler.bind(this, 'Igorka')}>Switch Name</button> */}
          </div>
      )
    }


    return (
      <div className="App">
        <button onClick={this.togglePersonHandler}>Toggle View</button>
        
        {peronas}
      </div>
    );
  }
}

export default App;
