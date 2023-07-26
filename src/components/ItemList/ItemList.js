import React from 'react'
import Item from './Item/Item.js'

const ItemList = ({productsDrawed}) => {
  return (
    <div className='cntPRDR'>
        {productsDrawed.map((PRDR)=><Item key={PRDR.id} PRDR={PRDR} />)}
    </div>
  )
}

export default ItemList