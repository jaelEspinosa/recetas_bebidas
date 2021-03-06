import { useState } from 'react'
import {Button, Form, Row, Col,Alert} from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'
import useCategorias from '../hooks/useCategorias'

const Formulario = () => {
    const {categorias, ingredientes}=useCategorias()
    const {consultarBebida}=useBebidas()
    const [alerta, setAlerta]=useState('')
    const [busqueda, setBusqueda] = useState({
        nombre:'',
        categoria:''
    })
    const handleSubmit = e =>{
        e.preventDefault()
        
        if(Object.values(busqueda).includes('')){
            setAlerta('Rellena las dos opciones')
            return
        }
        setAlerta('')
        consultarBebida(busqueda)
       
    }
   
    return (
    <Form onSubmit={handleSubmit}>
    {alerta ? <Alert 
               variant='danger'
               className='text-center'
               >{alerta}</Alert> : null}
        <Row>
        <Col md={6}>
                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='nombre'>Nombre Bebida</Form.Label>
                    <Form.Select 
                        id='nombre'
                        type='text'
                        placeholder='Ej: Tequila, Vodka, etc'
                        name='nombre'
                        value={busqueda.nombre}
                        onChange={e=>setBusqueda({
                            ...busqueda,
                            [e.target.name]:e.target.value
                        })}
                    >
                        <option>- Slecciona Ingrediente -</option>
                        {ingredientes.map((ingrediente,index) => (
                            <option value = {ingrediente.strIngredient1} 
                                    key={index}
                                    
                        >
                                    {ingrediente.strIngredient1}
                                    
                                    </option>
                        ))} 
                    </Form.Select>
                </Form.Group>
            </Col> 
            <Col md={6}>
                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='categoria'>Categoria Bebida</Form.Label>
                    <Form.Select
                         id='categoria'
                         name='categoria' 
                         onChange={e=>setBusqueda({
                            ...busqueda,
                                    [e.target.id]:e.target.value
                        })}
                        >
                        <option>- Slecciona Categoria -</option>
                        {categorias.map(categoria => (
                            <option value = {categoria.strCategory} 
                                    key={categoria.strCategory}
                                    
                        >
                                    {categoria.strCategory}
                                    
                                    </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </Col>
        </Row>
        <Row className='justify-content-end'>
            <Col md={3}>
                <Button
                type='submit'
                variant='danger'
                className='text-uppercase w-100'
                >Buscar Bebidas</Button>
            </Col>
        </Row>
    </Form>
  )
}

export default Formulario