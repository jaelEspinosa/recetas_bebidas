import { useState } from 'react'
import { Modal, Image, Col, Row }from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'
import Spinner from './Spinner'
import '../styles/BebidaModal.css'

const ModalBebida = () => {
   const{modal, handleModalClick, receta, cargando} = useBebidas()
   const mostrarIngredientes = ()=>{
    let ingredientes = []
    for (let i = 1 ; i < 16 ; i++){
        if(receta[`strIngredient${i}`]){
            let ingredienteImg= receta[`strIngredient${i}`]
            console.log(ingredienteImg)
            let urlImgIngrediente = `https://www.thecocktaildb.com/images/ingredients/${ingredienteImg}-Small.png`
            
            ingredientes.push(  
                <Row className='border' > 

               <Col >{receta[`strIngredient${i}`]}</Col>
               <Col ><img className='img'src={urlImgIngrediente} alt='miniatura ingrediente'/></Col>
               <Col >{receta[`strMeasure${i}`] ? <p>{receta[`strMeasure${i}`]}</p>: <p>-----</p>}</Col> 

                </Row>              
           )
        }
    }

    return ingredientes
   }
    
  return (
    
    <Modal show={modal} onHide={handleModalClick}>
    {cargando ? <Spinner /> :
        <>
        <Image 
               src={receta.strDrinkThumb} 
               alt ={`imagen de ${receta.strDrinkThumb}`}
                
               />
         <Modal.Header>
            <Modal.Title>{receta.strDrink}</Modal.Title>
         </Modal.Header>      
        <Modal.Body>
               <div className='p-3'>
                  <h2>Instrucciones</h2>
                  {receta.strInstructions}
                  <h2 className='mt-5'>Ingredientes y Cantidades</h2>
                
                
                   {mostrarIngredientes()}
                 
                  
               </div>

        </Modal.Body>
        </>
        }


    </Modal>
  )
}

export default ModalBebida