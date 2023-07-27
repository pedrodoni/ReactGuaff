
const products =[
    {id:'1',for:'Dogs',name: 'Dog Selection 10KG',stock: 26,price: 10000,pic:'../images/dogSelection.png',desc: "Dog Selection es un alimento que preservara el sabor de la carne a la hora de la comida de tu mascota y podras notar la felicidad atraves de sus ojos"},
    
    {id:'2',for:'Dogs',name: 'Dog Chow 10KG',stock: 17,price: 12000,pic:'../images/dogChow.png',desc: "El alimento favorito de tu mascota, haras que disfrute de su comida y a la vez cuidarlos con la calidad premium de nuestros alimentos"},
    {
        id:'3',for:'Cats',name:'Whiskas 1KG', stock: 5, price:4500, pic:'../images/whiskas.png', desc:"El alimento de los sueños de tu felino"
    },{
        id:'4',for:'Cats',name:'Pro Plan 3Kg', stock: 3, price:6500, pic:'../images/proplan.png', desc:"El alimento de los sueños de tu felino"
    },
    {
        id:'5',for:'All',name:'Neckless ubication', stock: 29, price:35000, pic:'../images/collar.png', desc:"Nunca me perderas"
    }
     ]


     export const drawProducts = (setIsLoading) => {
  
       
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
            },1000)
        })
        
     } 

     export const detailItem = (setIsLoading,id) => {
        return new Promise((resolve,reject)=>{
            setIsLoading(true)
            setTimeout(()=>{
                resolve(products.find((alimento)=> alimento.id ===id))
                setIsLoading(false)

            },2000)
        })
     }     