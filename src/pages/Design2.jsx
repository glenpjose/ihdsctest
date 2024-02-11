
import { Button, Col, Form, Row } from 'react-bootstrap'

import cel from "../assets/images/celeb.png"

function Design2() {
   
       
  return (
    <>


<Row className='mt-5'>

<Col lg={2} xs={12} md={8}></Col>
    <Col lg={4} xs={12} md={8} >

        <h2 className='text-info fw-5 mt-5'>Unlock Exclusive Benefits</h2>

        

        <Form  >

<Form.Group className="mb-3">

  <Form.Label>PHONE NUMBER</Form.Label>
  <Row ><Col lg="6"> <Form.Select aria-label="Default select example" style={{borderRadius:"20px"}} >
      <option></option>
      <option value="1"> +91 India</option>
      <option value="2"> +123 Ireland</option>
      <option value="3"> +45 Cannada</option>
    </Form.Select></Col>
    <Col lg="6">
  <Form.Control type="tel" placeholder="9645789210" style={{borderRadius:"20px"}}/>
</Col>
  </Row>
 

</Form.Group>

<Form.Group className="mb-3">

  <Form.Label>NAME</Form.Label>

  <Form.Control type="text" style={{borderRadius:"20px"}}  />

</Form.Group>

<Form.Group className="mb-3">

  <Form.Label>EMAIL <span className="text-muted">[OPTIONAL]</span></Form.Label>

  <Form.Control type="email"  style={{borderRadius:"20px"}} />

</Form.Group>

<Button variant="primary" style={{borderRadius:"20px"}} type="submit" className="w-100">

  Continue

</Button>

</Form>


<p className="mt-3 text-center">Get ready to receive a secret code (OTP) on your phone.</p>

       
    
    
    </Col>
    <Col lg={4} xs={12} md={8} style={{marginLeft:"30px"}}>
    
    <img src={cel} alt='logo'  height={"100%"} width={"100%"} light bgColor="secondary"fluid ></img>
   
   
    </Col>

    <Col lg={2} xs={12} md={8}></Col>
</Row>



    </>
  )
}

export default Design2