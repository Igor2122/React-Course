import React, {Component} from 'react';
import Person from './Person/Person';

// ES6 way if we only have a return in the function 
class Persons extends Component {

    render() {
        return this.props.persons.map((person, index) => {
        // convert this array to valid jsx & reder the array with map()
        // will exc a method on the given arr
           return <Person 
                  id={person.id}
                  name={person.name}
                  age={person.age}
                  click={() => this.props.clicked(index)} 
                  key={person.id}
                  changed={(event) => this.props.changed(event,person.id)}/> // return jsx
        })
    }
}
        
export default Persons;
    