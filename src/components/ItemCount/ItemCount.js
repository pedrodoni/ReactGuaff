import React from 'react';
import { useState } from "react";
import Button from 'react-bootstrap/Button'

 const ItemCount = ({stock, onAdd, initial}) => {
    
    const [items, setItems]= useState(initial);

    const sumarItem = ()=>{
        if(items<stock)
        setItems(items + 1)
        else{
            setItems(items+0)
        }
    }
    const restarItem = ()=>{
        if(items>0){
            setItems(items-1)
        }
        else{
            setItems(items+0)
        }
    }

  return (
    <div className='btnsCnt'>
        <div className='btns'>
            <Button onClick={sumarItem} variant='outline-light'>+</Button>
            <h5 className='ctdCart'><strong>{items}</strong></h5>
            <Button onClick={restarItem} variant='outline-light'>-</Button>
        </div>
        <div>
            <Button onClick={()=>onAdd(items)} variant='outline-light'>Añadir al Carrito</Button>
        </div>
    </div>
  )
}

export default ItemCount