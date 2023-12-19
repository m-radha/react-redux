import React from 'react'
import ThreeD from './ThreeD'

const Props = (props) => {
  return (
    <div>
      <p>props comp--{props.t}</p>
      <p>user age:{props.arr.age}</p>
      <ThreeD/>
    </div>
  )
}

export default Props
