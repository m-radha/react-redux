import React from 'react';
import { connect } from 'react-redux';

const Home = ({Nav,Counter,increment,decrement}) => {
  return (
    <div>
        <h1>{Nav}</h1>
      <p>Home Component</p>
      <h3>counter: {Counter}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

const mapStatetoProps = (state) => (
    {
        Nav:state.nav,
        Counter:state.counter
    }
)

const mapDispatchtoProps = (dispatch) => (
    {
        increment: () => dispatch({type: 'INCREMENT'}),
        decrement: () => dispatch({type: 'DECREMENT'})
    }
)

export default connect(mapStatetoProps, mapDispatchtoProps)(Home);
