import React,{useState,useEffect} from 'react'

import {Container,Row,Col,Form,Button,Navbar,Nav,NavDropdown,FormControl,meta,link,footer} from 'react-bootstrap'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";


const  Home=()=>{
  const [data,setData]=useState([])
  const[search,setSearch]=useState([])
  const[date,setDate]=useState("")

  let history =useHistory()
  function getData(){
    axios
    .get("http://localhost:3002/blogs")
    .then(res=>{
      setData(res.data)
    })

  }
 useEffect(getData,[])

 const sortBydate=()=>{
  
 console.log("sorted")
 }


  
    return(
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <Navbar collapseOnSelect expand="lg" class="navbar" >
  <Navbar.Brand href="#home">Blog</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
      
    </Nav>
    <Nav>
      <div className="search">
      <FormControl type="text" placeholder="Search Blogs by title or author" onChange={(e)=>setSearch(e.target.value)} className="mr-sm-2" className="searchbar"/>

      </div>
   
    </Nav>
    <Nav>

    <div class="col">
        <a href="https://www.facebook.com/?stype=lo&jlou=AfckGrb056wSY-2pmqFPtyDF2bKEQmnMTiN8eUg7zstfnFHPy92lwdA2dB5Znd55XquxFK_fQ-yiuIiRRouQenSQXp650gEHxlMnR8lWyd-ZsQ&smuh=49733&lh=Ac8t1FzDQEtFTgEi00Y" class="fb btn" >
          <i class="fa fa-facebook fa-fw"></i>Facebook
        </a>&nbsp;&nbsp;
        <a href="#" class="twitter btn">
          <i class="fa fa-twitter fa-fw"></i> Twitter
        </a>&nbsp;&nbsp;
      
        <a href="#" class="google btn">
          <i class="fa fa-google fa-fw"></i> Google+
        </a>

      </div>
  
      <Nav.Link eventKey={2} href="/login">
       Login
      </Nav.Link>
      <Nav.Link eventKey={2} href="/Register">
       Register
      </Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
<div class="sidenav">
  <a href="#about">AboutUs</a><br></br>
  <a href="#services">Services</a><br></br>
  <a href="#clients">Linkidin Profile</a><br></br>
  <a href="#contact">Contact</a><br></br>
  <a href="#contact">youtube</a>
</div>
<div className="post">
<Button variant="dark" onClick={()=>{data.sort((a,b)=>{
    return new Date(b.date) - new Date(a.date);
   
 
 })}}>Sort</Button>
<Button variant="dark" onClick={()=>{history.push("/login")}}>Create Your Blog</Button>
 

</div><br></br>

{data.sort((a,b)=>{
    return new Date(b.date) - new Date(a.date);
   
 
 })
 .
filter((s)=>{
  if(s.Title.includes(search) || s.Author.includes(search)){
    return s
  }
})

.map(a=>(
  <div>

 
     
      <Container >
  <div>
  <Link to ={`/singleblog/${a.id}`}  >
    
  <Row className="blogs" >
  
    <Col>

    
    <h1>{a.Title}</h1>
      <p>{a.Author}</p>
      <p>{a.content}</p>
      <p>{a.date}</p>
   
    
    </Col>
  </Row>
  </Link>

  </div>


 
</Container>

 

      </div>
    ))}

<footer class="footer">
<div class="site-footer">
<div class="container">
<div class="row mb-5">
<div class="col-md-4">
<h3 class="footer-heading mb-4">About Us</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat reprehenderit magnam deleniti quasi saepe, consequatur atque sequi delectus dolore veritatis obcaecati quae, repellat eveniet omnis, voluptatem in. Soluta, eligendi, architecto.</p>
</div>
<div class="col-md-3 ml-auto">

<ul class="list-unstyled float-left mr-5">
<li><a href="#">About Us</a></li>
<li><a href="#">Advertise</a></li>
<li><a href="#">Careers</a></li>
<li><a href="#">Subscribes</a></li>
</ul>
<ul class="list-unstyled float-left">
<li><a href="#">Travel</a></li>
<li><a href="#">Lifestyle</a></li>
<li><a href="#">Sports</a></li>
<li><a href="#">Nature</a></li>
</ul>
</div>
<div class="col-md-4">
<div>
<h3 class="footer-heading mb-4">Connect With Us</h3>
<p>
<a href="#" class="fa fa-facebook"></a>&nbsp;&nbsp;
<a href="#" class="fa fa-twitter"></a>&nbsp;&nbsp;
<a href="#" class="fa fa-google"></a>
</p>
</div>
</div>
</div>
<div class="row">
<div class="col-12 text-center">
<p>

Copyright © <script>document.write(new Date().getFullYear());</script>2021 All rights reserved | This template is made with <i class="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>

</p>
</div>
</div>
</div>
</div>
</footer>





    </>




    )

}
export default Home