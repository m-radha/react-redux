import React from 'react';
import { connect } from 'react-redux';
import '../css/home.css';


const Home = ({Nav,Counter,increment,decrement}) => {
  return (
    <div className='container'>
        <h1 className='box1'>{Nav}</h1>
      <p className='box2'>Home Component1</p>
      <p className='box2'>Home Component2</p>
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
