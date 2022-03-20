import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement} from '../Redux/counterSlice'
import './Counter.css'

function Counter() {
    const dispatch = useDispatch();
    const count = useSelector((state)=> state.counter.count)
  return (
    <div className='container'>
        <button onClick={()=> dispatch(increment())}>Increment</button>
        <p>{count}</p>
        <button onClick={()=> dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Counter
