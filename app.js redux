import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {incNum} from './actions';


export default function App() {
  const mystate = useSelector((state)=>state.change);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Increment Counter by 5</h2>
      <input type='text' name='quantity' className="form-control" value={mystate} />
      <a className="btn btn-primary" onClick={()=>dispatch(incNum())}>Increment</a>
    </>
  )
}
