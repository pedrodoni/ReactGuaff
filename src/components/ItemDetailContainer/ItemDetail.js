import React from 'react'
import Swal from 'sweetalert2';
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({alimento}) => {
    const onAdd = (items)=>{
        if(items===0){
            Swal.fire("Debes Elegir una cantidad valida")
        } else{
        Swal.fire(`Agregaste ${items} items a tu carrito`)
        }
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
        <p>{alimento.desc}</p>
        </div>    
        <ItemCount initial= {1} stock={alimento.stock} onAdd={onAdd}/>
    </div>
    
  )
}

export default ItemDetail