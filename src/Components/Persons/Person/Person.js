import React, {Component} from 'react';

import './Person';

class Person extends Component {
   render (){
      return <div className="Person">
         <p 
         onClick={this.props.click} 
         onMouseEnter={this.props.mousEnt}
         >#:{this.props.id} I'am {this.props.name} and I am {this.props.age} years old!</p>
         <p>{this.props.children}</p>
         <input type="text" onChange={this.props.changed} value={this.props.name}></input>
      </div>
   }
}

export default Person;