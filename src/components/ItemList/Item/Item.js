import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/esm/Button'

const Item = ({PRDR}) => {
  return (
    <div className='cardsPRDR'>
        <div className='imgCard'>
            <img src={PRDR.pic}/>
        </div>
        <div className='cardDetails'>
            <h3 className='texDetails'>{PRDR.name}</h3>
            <h4><strong>${PRDR.price}</strong></h4>
            <Link to={`/items/${PRDR.id}`}>
            <Button variant='outline-light'>Info</Button>
            </Link>
        </div>
        
    </div>
  )
}

export default Item