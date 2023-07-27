import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading';
import { drawProducts } from '../../data';
import { useParams } from 'react-router-dom';



const ItemListContainer = ({tittle}) => {
const [productsDrawed, setProductsDrawed]= useState([])
const[isLoading, setIsLoading]= useState(false)
const {forId}= useParams()

useEffect(()=>{
    drawProducts(setIsLoading)
    .then((res)=>{
      if (forId){
         setProductsDrawed(res.filter((alimento)=>alimento.for === forId))
      }else{
         setProductsDrawed(res)
      }
    }   )
    .catch((ERR)=> console.log(ERR))
 },[forId])
 
   
    function loading(){
        return 
     }
  return (
    <div>
        
        <h1 >{tittle}{forId&&forId}</h1>
        
        <div >
        {isLoading ? <Loading/>:loading()}
        <ItemList productsDrawed={productsDrawed}/>
        </div>
        
    </div>
    
  )
}

export default ItemListContainer