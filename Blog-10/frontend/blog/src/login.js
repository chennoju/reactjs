import axios from 'axios'
import React ,{useEffect,useState} from 'react'
import {Container,Row,Col,Form,Button,Navbar,Nav,NavDropdown,FormControl,Dropdown,SplitButton,DropdownButton,ButtonGroup} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";




const Login =()=>{
    const [persons,setPersons]=useState([])
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    let history= useHistory()

    useEffect (()=>{
        axios.
        get("http://localhost:3002/show")
        .then(response=>{
            setPersons(response.data)
            console.log(persons)
            console.log(password)
        })
    },[password])

    function handlelogin(e){
         e.preventDefault()
        let person=persons.find(p=>{
            if(p.username==username){
                return p
            }
        })

       if(person.password ==password){
         axios.
         get(`http://localhost:3002/username/${username}`)
         .then(res=>{
         
           console.log(res.data)
           history.push(`/userhome/${res.data.id}`)
         }
     
          )
        
        
       }
       else{
           alert("sdhv")
       }
    }

    function check(){
        if(password.length==0){
            return true
        }
        else{
            return false
        }
    }

    
return(
    <div className="newlogin">
       <Navbar collapseOnSelect expand="lg" class="navbar">
  <Navbar.Brand href="#home">Blog</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
  
  <Nav.Link eventKey={2} href="http://localhost:3000/">
   Home
  </Nav.Link>

      
    </Nav>
  </Navbar.Collapse>
</Navbar><br></br>
      
        <Container >

          
  
  <Row className="row align-items-end">
    <Col md={12} className="col align-self-center">
    <Form onSubmit={handlelogin
    }>
        <div className="form">
  <Form.Group controlId="formBasicEmail">
  <div className="textbox">
  <i class="fas fa-user"></i>
    <Form.Label>username</Form.Label>
    
    <Form.Control type="text" placeholder="Enter username" onChange={(e)=>{setUsername(e.target.value)}} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
    </div>
  </Form.Group>
  

  <Form.Group controlId="formBasicPassword">
  <div className="textbox">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"  onChange={(e)=>{setPassword(e.target.value)}} />
    </div>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  {password.length==0?(
      <Button variant="primary"  class="btn" type="submit" disabled >
  
      Submit
    </Button>
    

  )
  :(
    <Button variant="primary" class="btn" type="submit" >
  
    Submit
  </Button>
  )
}

<a href="/Register">SIGN-UP</a>
  
  </div>
</Form>



    </Col>
   
  </Row>
</Container>
       
     
     
       
    </div>
)
}




export default Login