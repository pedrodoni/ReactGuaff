import React from 'react';
import ItemCount from '../ItemCount/ItemCount'
import Swal from 'sweetalert2'

const ItemListContainer = ({tittle}) => {
    const onAdd = (items)=>{
        if(items===0){
            Swal.fire("Debes Elegir una cantidad valida")
        } else{
        Swal.fire(`Agregaste ${items} items a tu carrito`)
        }
    }
  return (
    <div>
        <h1>{tittle}</h1>
        <ItemCount initial= {1} stock={12} onAdd={onAdd}/>
    </div>
  )
}

export default ItemListContainer