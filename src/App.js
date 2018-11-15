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

  switchNameHandler = (newName) => {
    // console.log('Was Clicked');
    // DON'T DO THIS!!! this.state.persons[0].name = 'Maxmillian';
    this.setState({persons: [
      {name: newName, age: 32},
      {name: 'Reeem', age: 25},
      {name: 'Archie', age: 2}
    ]});
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
        {this.state.persons.map(person => {
        // convert this array to valid jsx & reder the array with map()
        // will exc a method on the given arr
           return <Person 
                  name={person.name}
                  age={person.age} /> // return jsx
        })} 
          <h1>Hi I am a React App</h1>
          <p>This is really working</p>
          <button   
          onClick={this.switchNameHandler.bind(this, 'Igorka')}>Switch Name</button>
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
