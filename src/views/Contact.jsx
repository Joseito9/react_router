import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contact = () => {
  return (
    <>
    <h1 className='info'> Cuentanos, ¿en que te podemos ayudar?</h1>
    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo Electronico</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Descripción</Form.Label>
            <Form.Control type="text" placeholder=""/>
        </Form.Group>
        <Button variant="danger" type="submit">
            Enviar
        </Button>
  </Form>
  </>
  )
}

export default Contact
