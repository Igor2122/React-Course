import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        // eslint-disable-next-line
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }
    
    render () {
        
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrimentCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrimentCounter}  />
                <CounterControl label="Add 5" clicked={() => this.counterChangedHandler( 'add', 5 )}  />
                <CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler( 'sub', 5 )}  />
            </div>
        );
    }
}


const mapStateToProps = state => {
    return  {
      ctr: state.counter   
    };
};

// reat-redux gives us dispatch function that will call dispatch on the store 
const mapDispatchToProps = dispatch => {
    return {
        onIncrimentCounter: () => dispatch({type: 'INCRIMENT'}),
        onDecrimentCounter: () => dispatch({type: 'DECREMENT'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);