import React, { useEffect, useState } from 'react';


import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading';
import { drawProducts } from '../../data';



const ItemListContainer = ({tittle}) => {
const [productsDrawed, setProductsDrawed]= useState([])
const[isLoading, setIsLoading]= useState(false)

 
 
 
 useEffect(()=>{
    drawProducts(setIsLoading)
    .then((res)=>setProductsDrawed(res))
    .catch((ERR)=> console.log(ERR))
 },[])
 
   
    function loading(){
        return 
     }
  return (
    <div>
        
        <h1>{tittle}</h1>
        
        <div >
        {isLoading ? <Loading/>:loading}
        <ItemList productsDrawed={productsDrawed}/>
        </div>
    </div>
  )
}

export default ItemListContainer