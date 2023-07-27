import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { detailItem } from '../../data'
import ItemDetail from './ItemDetail'
import Loading from '../Loading/Loading'

const ItemDetailContainer = () => {
    function loading(){
        return 
     }
    const[isLoading, setIsLoading]= useState(false)
    const [alimento, setAlimento]= useState({})
    useEffect(()=>{
        detailItem(setIsLoading)
        .then((res)=> setAlimento(res))
        .catch((ERR)=>alert(ERR))
    },[])
  return (
    <div >
            {isLoading ? <Loading/>:loading}
            <div className='cntCNT'>
            <ItemDetail alimento={alimento}/>
            </div>
    </div>
  )
}

export default ItemDetailContainer