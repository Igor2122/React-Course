import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actionTypes from  '../../store/actions';

class Counter extends Component {

    render () {
        
        return (
            <div>
                <CounterOutput value={this.props.ctr} /> {/* we get props frp mapStateToProps got from Rdux  */}
                <CounterControl label="Increment" clicked={this.props.onIncrimentCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrimentCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubstrCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    
                    {this.props.storedResults.map(res =>(
                    <li key={res.id} onClick={() => this.props.onDeleteResult(res.id)}>{res.val}</li>))}
                </ul>
            </div>
        );
    }
}

// here we define the state we want to get with { connect };  here we get Rdux state to props passsed on our component 
const mapStateToProps = state => { // state - stored in Redux
    return  {
      ctr: state.ctr.counter,   // state will be given by Redux; ctr-our defined name
      storedResults: state.res  .results // retreving results fromt the reducer
    };
};

// reat-redux gives us dispatch function that will call dispatch on the store 
// we mention here which kind of acitons we want to dispatch on our container
const mapDispatchToProps = dispatch => {
    return {
        // name is up to us 
        onIncrimentCounter: () => dispatch({type: actionTypes.INCRIMENT}),// type is mandatory afrter we can iclude anything 
        onDecrimentCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddCounter: () => dispatch({type: actionTypes.ADD, val: 10}), // payload as a convention 
        onSubstrCounter: () => dispatch({type: actionTypes.SUBTRACT, val: 15}),
        onStoreResult: (result) => dispatch({type:  actionTypes.STORE_RESULT, result: result}),
        onDeleteResult: (id) => dispatch({type:  actionTypes.DELETE_RESULT, resElId: id}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);