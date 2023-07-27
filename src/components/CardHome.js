import { Link } from "react-router-dom";
 import Button from 'react-bootstrap/Button';
import ItemListContainer from "./ItemListContainer/ItemListContainer";
 function CardHome(){
    const menuOP= [
        {id:1,  
        imgCard:"./images/catStore.png",
        desc:"Cat Food",
        link: "item/Cats" }  , {
        id:2,
        imgCard:"./images/dogStore.png",
        desc:"Dog Food",
        link: "item/Dogs" 
        
        }     
       ];

    return(
        <div >
            <section className="layoutHome">
        {menuOP.map(menu=>(
            <div key={menu.id} className="cardMenu">
                <div className="infoCard">
                   <div className="imgCard2"><img src={menu.imgCard}/></div> 
                   <div className="detailCard">
                        <div className="descCard"><h3>{menu.desc}</h3></div>
                        <div className="buttonCard"><Button className="buttonGo" variant="light
                        "><Link to={`/${menu.link}`}>View</Link></Button></div>
                   </div>
                </div>
                
            </div>

           
        ))}
        </section>
        <ItemListContainer tittle={"Pet Store"}></ItemListContainer>
        </div>
        


   
    
    
 
   
    )
}
export default CardHome