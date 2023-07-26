import React, { useEffect, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount'
import Swal from 'sweetalert2';
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading';




const ItemListContainer = ({tittle}) => {
const [productsDrawed, setProductsDrawed]= useState([])
const products =[
{id:'1',name: 'Dog Selection 10KG',stock: 26,price: 10000,pic:'../images/dogSelection.png'},
{id:'2',name: 'Dog Chow 10KG',stock: 17,price: 12000,pic:'../images/dogChow.png'}
 ]
 const[isLoading, setIsLoading]= useState(false)
 function drawProducts(){
    return new Promise((resolve,reject)=>{
        const ERR = false
        setIsLoading(true)
        setTimeout(()=>{           
            
            if(ERR){
                reject('Ha ocurrido un error')
                alert ("Ha ocurrido un error")
            }
            else{
                resolve(products) 
                setIsLoading(false)
            }
        },2000)
    })
 } 
 
 useEffect(()=>{
    drawProducts()
    .then((res)=>setProductsDrawed(res))
    .catch((ERR)=> console.log(ERR))
 },[])
 
    const onAdd = (items)=>{
        if(items===0){
            Swal.fire("Debes Elegir una cantidad valida")
        } else{
        Swal.fire(`Agregaste ${items} items a tu carrito`)
        }
    }
    function loading(){
        return <img src='./images./logo4.png'/>
     }
  return (
    <div>
        
        <h1>{tittle}</h1>
        <ItemCount initial= {1} stock={12} onAdd={onAdd}/>
        <div >
        {isLoading ? <Loading/>:loading}
        <ItemList productsDrawed={productsDrawed}/>
        </div>
    </div>
  )
}

export default ItemListContainer