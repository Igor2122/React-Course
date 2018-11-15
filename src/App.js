import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Igor', age: 32},
      {name: 'Reeem', age: 26},
      {name: 'Stephanie', age: 28}
    ]
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
  focusHandler = () => {
    console.log('Was Focused');
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      {name: 'Igor', age: 32},
      {name: event.target.value, age: 25},
      {name: 'Archie', age: 2}
    ]}); 
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Hi I am a React App</h1>
        <p onMouseEnter={this.focusHandler}>This is really working</p>
        <button style={style}  
        onClick={this.switchNameHandler.bind(this, 'Igorka')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name}  
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Igor!') }
          mousEnt={this.focusHandler}
          changed={this.nameChangedHandler}
          >My Hobbies: Racing </Person>
        <Person 
        // we can use this but sometime can do some unexpected results prefered to use bind() instead!!!
          click={() => this.switchNameHandler('Shitzu!!')}
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
