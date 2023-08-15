import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading';

import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs,query,where } from "firebase/firestore";



const ItemListContainer = ({tittle}) => {
const [productsDrawed, setProductsDrawed]= useState([])
const[isLoading, setIsLoading]= useState(false)
const {forId}= useParams()

useEffect(()=>{
   const querydb = getFirestore();
   const queryCollection = collection(querydb,'alimentos')
   setIsLoading(true);
   
    setTimeout(()=>{
      if (forId){
         
         const queryFor = query(queryCollection,where('for','==',forId))
   getDocs(queryFor)
   .then(res=>setProductsDrawed(res.docs.map(alimento=>({id:alimento.id,...alimento.data()}))))
   setIsLoading(false);

      }else{
         getDocs(queryCollection)
         .then(res=>setProductsDrawed(res.docs.map(alimento=>({id:alimento.id,...alimento.data()}))))
         setIsLoading(false);

      }
      
   }, 1000 )
  
    },[forId] )
      
 
   
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