import React from 'react'
import ItemCount from '../../ItemCount/ItemCount'

const Item = ({PRDR}) => {
  return (
    <div className='cardsPRDR'>
        <div className='imgCard'>
            <img src={PRDR.pic}/>
        </div>
        <div className='cardDetails'>
            <h3 className='texDetails'>{PRDR.name}</h3>
            <h4><strong>${PRDR.price}</strong></h4>
        </div>
        
    </div>
  )
}

export default Item