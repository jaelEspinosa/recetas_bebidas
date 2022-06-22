import { Col, Card, Button } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'

const Bebida = ({bebida}) => {
  const{handleModalClick, handleBebidaIdClick}=useBebidas()  
  return (
    <Col md={6} lg={4}>
      <Card className='mb-4'>
        <Card.Img 
           variant = 'top'
           src = {bebida.strDrinkThumb}
           alt={`bebida${bebida.strDrink}`}

        />
        <Card.Body>
              <Card.Title>{bebida.strDrink}</Card.Title>
              <Button
                variant='warning'
                className='w-100 text-uppercase mt-2'
                onClick={()=>{
                    handleBebidaIdClick(bebida.idDrink)
                    handleModalClick()}}
              >Ver Receta</Button>

        </Card.Body>
      </Card>
      
    </Col>
  )
}

export default Bebida