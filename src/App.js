import React, {Component} from 'react';
import {connect} from 'react-redux'
import './App.css'
import Counter from "./Counter";
import {add, addNumber, asyncAdd, sub} from "./redux/actions/actions";

class App extends Component {
  // state = {
  //   counter: 0
  // }

  // updateCounter(value) {
  //   // this.setState({
  //   //   counter: this.state.counter + value
  //   // })
  // }

  render() {
    return (
        <div className={'App'}>
          <h1>Counter <strong>{this.props.counter}</strong></h1>

          <hr/>

          <div className="Actions">
            <button onClick={this.props.onAdd}>Add 1</button>
            <button onClick={this.props.onSub}>Subtract 1</button>
          </div>

        <div className="Actions">
            {/*<button onClick={this.props.onAddNumber.bind(this, 5)}>Add</button>*/}
            <button onClick={() => this.props.onAddNumber(15)}>Add 15</button>
            <button onClick={() => this.props.onAddNumber(-17)}>Subtract 17</button>
        </div>

            <div className="Actions">
                <button onClick={() => this.props.onAsyncAdd(100)}>
                    Add 100 asynchronously
                </button>
            </div>
            <Counter />

        </div>
    );
  }
}


function mapStateToProps(state) {
    //console.log(state)
    return {
        counter: state.counter1.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // onAdd: () => dispatch({type: 'ADD'}),
        onAdd: () => dispatch(add()),
        // onSub: () => dispatch({type: 'SUB'}),
        onSub: () => dispatch(sub()),
        // onAddNumber: number => dispatch({type: 'ADD_NUMBER', payload: number})
        onAddNumber: number => dispatch(addNumber(number)),
        onAsyncAdd: number => dispatch(asyncAdd(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
