import React from 'react'
import { useDispatch } from 'react-redux'
import { addCounter, minusCounter } from '../../store/slices/counterSlicer'

const Button = () => {
    const dispatch = useDispatch()

    const handleAdd = () => {
        dispatch(addCounter())
    }
    const handleMinus = () => {
        dispatch(minusCounter())
    }
  return (
    <div>
      <button onClick={handleAdd}>Add me!</button>
      <button onClick={handleMinus}>Delete me!</button>
    </div>
  )
}

export default Button
