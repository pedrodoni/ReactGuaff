import React, { useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'


const ItemDetail = ({alimento}) => {

    const {addCarrito} = useContext(CartContext);


    const more = (items)=>{
      addCarrito(items, alimento);
        }
    
    
  return (
    <div className='cntDETAIL'>
        
        <h1>{alimento.name}</h1>
        <hr/>
        <h4>Stock disponible:{alimento.stock}</h4>
        <div className='imageDETAIL'>
            <img src={alimento.pic}/>
        </div>
        
        <div className='layoutDETAIL'>
        <h3>${alimento.price}</h3>
        
        <p>{alimento.desc}</p>

        </div>    
        <div className='addCart' >
            <ItemCount initial= {1} stock={alimento.stock} more={more}/>
        </div>
    </div>
    
  )}


export default ItemDetail