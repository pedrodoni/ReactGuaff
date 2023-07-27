import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { detailItem } from '../../data'
import ItemDetail from './ItemDetail'
import Loading from '../Loading/Loading'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    function loading(){
        return 
     }
    const[isLoading, setIsLoading]= useState(false)
    const [alimento, setAlimento]= useState({})
    const {id}=useParams()
    useEffect(()=>{
        detailItem(setIsLoading,id)
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