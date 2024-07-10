import React from 'react'
import Button from '../../ui/Button'
import { useDispatch } from 'react-redux'
import { decreaseItemQunatity, increaseItemQunatity } from './cartSlice'

export default function UpdateItemQuantity({pizzaId, currentQuantity}) {
    const dispatch = useDispatch()
  return (
    <div className='flex gap-1 items-center md:gap-3'>
        <Button type='round' onClick={()=> dispatch(decreaseItemQunatity(pizzaId))}>-</Button>
        <span>{currentQuantity}</span>
        <Button type='round' onClick={()=> dispatch(increaseItemQunatity(pizzaId))}>+</Button> 
    </div>
  )
}
