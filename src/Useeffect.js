import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Useeffect() {
    const[set,useset] =useState([]);
     const [search,setsearch]= useState("cricket")

     const getuser = async ()=>{
        //  const response = await fetch ('https://newsapi.org/v2/everything?q=cricket&apiKey=2b6a45b8a31f41bdad95dc8ac09b7c9c');
         const response = await fetch (`https://newsapi.org/v2/everything?q=${search}&apiKey=2b6a45b8a31f41bdad95dc8ac09b7c9c`);
           const data = (await response.json());
          useset(data.articles);
          console.log(set);
          
     }
   
     const makechange =(e)=>{
        setsearch(e.target.value)
       // getuser();
     }


    useEffect(()=>{
        getuser();
    },[]);

    const clickHandler = ()=>{
        getuser();
    }

  return (
      <>
      
    
      <Navbar  fixed="top"   bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">NEWS</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
         />
           
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={makechange}
              value={search}
            />
            
            <Button variant="outline-success" onClick={clickHandler}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    

    {
      set &&  set.map((curElemt)=>{
            return (


                <>
                <br/>
                <br/>
                <br/>
                <br/>
                <Container>
                <Row>
                  <Col>{<img className='newsimg' src={curElemt.urlToImage} alt={curElemt.urlToImage}/>}</Col>
                  <Col> <h3><a href={curElemt.url}>{curElemt.title}</a></h3></Col>
                  <Col><p className='fontfamily'>{curElemt.description}</p></Col>
                </Row>
              </Container>
              </>
            
    
        )    })
    }
    
      </>
  )
}

export default Useeffect