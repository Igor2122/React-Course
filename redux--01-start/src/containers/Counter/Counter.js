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
                <CounterOutput value={this.props.ctr} /> {/* we get props frp mapStateToProps got from Rdux  */}
                <CounterControl label="Increment" clicked={this.props.onIncrimentCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrimentCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubstrCounter}  />
            </div>
        );
    }
}

// here we define the state we want to get with { connect };  here we get Rdux state to props passsed on our component 
const mapStateToProps = state => { // state - stored in Redux
    return  {
      ctr: state.counter   // state will be given by Redux; ctr-our defined name
    };
};

// reat-redux gives us dispatch function that will call dispatch on the store 
// we mention here which kind of acitons we want to dispatch on our container
const mapDispatchToProps = dispatch => {
    return {
        // name is up to us 
        onIncrimentCounter: () => dispatch({type: 'INCRIMENT'}),
        onDecrimentCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: () => dispatch({type: 'ADD5COUNTER'}),
        onSubstrCounter: () => dispatch({type: 'DECREMENT5COUNTER'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);