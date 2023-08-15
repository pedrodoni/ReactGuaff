import { collection } from "firebase/firestore"
import data from "../firebase/config";
import {addDoc } from 'firebase/firestore';


const saveOrder = async(buyOrder)=>{
    const ordersCollection = collection(data,'orders');

    try{
        const docRef= await addDoc(ordersCollection,buyOrder);
        console.log("Orden Id: ", docRef.id);
        return docRef.id
    }
    catch (e){
        console.error("error al agregar una order ",e);
        return null
        
    }
}
export default saveOrder