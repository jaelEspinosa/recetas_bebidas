
import axios from "axios"
import { useState, useEffect, createContext } from "react"


const CategoriasContext = createContext()

const CategoriasProvider = ({children})=>{
    const [categorias, setCategorias] = useState([])
    const [ingredientes, setIngredientes]= useState([])
   
    const obtenerCategorias = async ()=>{
        try{
           const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
           const urlIng = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'
           const {data} = await axios(url)
           const resultado = await axios(urlIng) 
           setCategorias(data.drinks)
           setIngredientes(resultado.data.drinks)
        }catch(error){
           console.log(error)
        }
      }
      useEffect(()=>{
          
       obtenerCategorias()
      },[])


    return(
        <CategoriasContext.Provider
        value={{
            categorias,
            ingredientes
            
        }}
        >
            {children}
        </CategoriasContext.Provider>
    )
}

export {
    CategoriasProvider
}

export default CategoriasContext