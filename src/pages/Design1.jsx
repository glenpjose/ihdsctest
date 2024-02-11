import React from 'react'
import { Button, Card, Carousel, CarouselItem, Col, Row } from 'react-bootstrap'
import { MDBBtn } from 'mdb-react-ui-kit';

import membership from "../assets/images/membership.jpg"
import img1 from "../assets/images/img1.jpg"
import img2 from "../assets/images/img2.jpg"
import img3 from "../assets/images/img3.jpg"



function Design1() {
  return (
    <div >
        
      <Row className="align-items-center mt-3">
        <Col lg={2}></Col>
        <Col lg={2}></Col>
        <Col lg={4}><ul className='d-flex list-unstyled justify-content-center gap-3'>
          <li>Home</li>
          <li>Dash board</li>
          <li>Products</li>
          <li>Transactions</li>
          <li>Journal</li>
        </ul></Col>
        <Col lg={2}></Col>
        <Col lg={2} className='text-center'>
          <img src="https://www.sbmultisitestg.siaincome.com/sites/siaincome/files/2023-04/Client-Accounts.png"width="140px"
            className="d-inline-block align-top"
            alt="Logo"
          />
          <p>Joseph Lazar</p>
        </Col>
      </Row>


      <Row>
        <Col lg='1'></Col>
        <Col lg='4'>
          <div className='mt-5  mb-3 text-start'>
          <h3>New Arrival</h3>
<br/>

<h6>JOIN TODAY</h6>
<hr style={{width:'35px',borderWidth:4}}></hr>
          </div>

          <img src={membership} alt='logo'  height={"300px"} light bgColor="secondary" fluid  className='ms-4'></img>


        <a href='./design2' > <Button  style={{backgroundColor:"rgb(235, 237, 238)",borderRadius:"20px"}} type="submit" className="w-50 mt-4  ms-4 text-info">Join Now</Button></a>
        </Col>
       
      
        <Col lg='7'>
          <h2 className=' fw-5 mt-5 ms-5' style={{color:"rgba(87, 161, 175, 0.986)"}}>Unlock Premium Features Now</h2>
          <hr style={{borderWidth:2,color:"black",width:"300px",marginLeft:"128PX"}} />
          <div className='d-flex mt-5'>
        
          
     
          <Carousel  interval={null} nextIcon={<span className="fa-solid fa-arrow-right fs-2" style={{marginLeft:"155px",color:"grey"}} />} prevIcon={<span className="fa-solid fa-arrow-left fs-2" style={{marginRight:"180px",color:"grey"}} />}>
      <Carousel.Item itemId={1} >
      <div className="d-flex  mt-5">
        <Card style={{ width: '15rem',height:"18rem" ,borderRadius:"20px",overflow: "hidden"} } >
      <Card.Img variant="top" src={img2} />
      <Card.Body>
        <Card.Title className='text-center' style={{color:"rgba(87, 161, 175, 0.986)"}}>Lower<br/>Interest Rates</Card.Title>
     
       
      </Card.Body>
    </Card>
   
    <Card style={{ width: '15rem',height:"18rem" ,borderRadius:"20px"} } className='ms-5'>
      <Card.Img variant="top" src={img3} />
      <Card.Body>
        <Card.Title className='text-center' style={{color:"rgba(87, 161, 175, 0.986)"}}>Interest<br/>Free Payments</Card.Title>
        
        
      </Card.Body>
    </Card>
    <Card style={{ width: '15rem',height:"18rem" ,borderRadius:"20px"} }className='ms-5'>
      <Card.Img variant="top" src={img1}/>
      <Card.Body>
        <Card.Title className='text-center' style={{color:"rgba(87, 161, 175, 0.986)"}}>Discount on <br/>Materials</Card.Title>
       
        
      </Card.Body>
    </Card>
    </div>
    </Carousel.Item>
    <Carousel.Item itemId={2} >
      <div className="d-flex  mt-5">
        <Card style={{ width: '15rem',height:"18rem" ,borderRadius:"20px",overflow: "hidden"} } >
      <Card.Img variant="top" src={img2} />
      <Card.Body>
        <Card.Title className='text-center' style={{color:"rgba(87, 161, 175, 0.986)"}}>Lower<br/>Interest Rates</Card.Title>
     
       
      </Card.Body>
    </Card>
   
    <Card style={{ width: '15rem',height:"18rem" ,borderRadius:"20px"} } className='ms-5'>
      <Card.Img variant="top" src={img3} />
      <Card.Body>
        <Card.Title className='text-center' style={{color:"rgba(87, 161, 175, 0.986)"}}>Interest<br/>Free Payments</Card.Title>
        
        
      </Card.Body>
    </Card>
    <Card style={{ width: '15rem',height:"18rem" ,borderRadius:"20px"} }className='ms-5'>
      <Card.Img variant="top" src={img1}/>
      <Card.Body>
        <Card.Title className='text-center' style={{color:"rgba(87, 161, 175, 0.986)"}}>Discount on <br/>Materials</Card.Title>
       
        
      </Card.Body>
    </Card>
    </div>
    </Carousel.Item>
    <Carousel.Item itemId={1} >
      <div className="d-flex  mt-5">
        <Card style={{ width: '15rem',height:"18rem" ,borderRadius:"20px",overflow: "hidden"} } >
      <Card.Img variant="top" src={img2} />
      <Card.Body>
        <Card.Title className='text-center' style={{color:"rgba(87, 161, 175, 0.986)"}}>Lower<br/>Interest Rates</Card.Title>
     
       
      </Card.Body>
    </Card>
   
    <Card style={{ width: '15rem',height:"18rem" ,borderRadius:"20px"} } className='ms-5'>
      <Card.Img variant="top" src={img3} />
      <Card.Body>
        <Card.Title className='text-center' style={{color:"rgba(87, 161, 175, 0.986)"}}>Interest<br/>Free Payments</Card.Title>
        
        
      </Card.Body>
    </Card>
    <Card style={{ width: '15rem',height:"18rem" ,borderRadius:"20px"} }className='ms-5'>
      <Card.Img variant="top" src={img1}/>
      <Card.Body>
        <Card.Title className='text-center' style={{color:"rgba(87, 161, 175, 0.986)"}}>Discount on <br/>Materials</Card.Title>
       
        
      </Card.Body>
    </Card>
    </div>
    </Carousel.Item>

  
    </Carousel>
    
    
    </div>
    <div className='align-items-center' style={{marginLeft:"250px"}}>
    <i class="fa-solid fa-ellipsis fs-5 " style={{color:" #2bdda8",marginLeft:"150px"}}></i><br />
    <MDBBtn style={{backgroundColor:"rgba(87, 161, 175, 0.986)",borderRadius:"20px"}} type="submit" className="w-50 mt-4">UNLOCK NOW</MDBBtn><br/>
    <MDBBtn style={{backgroundColor:"rgba(87, 161, 175, 0.986)",borderRadius:"60px"}} type="submit" className="w-50 mt-2">DETAILS</MDBBtn>

    </div>
    
   
        </Col>
      </Row>




    </div>
  )
}

export default Design1