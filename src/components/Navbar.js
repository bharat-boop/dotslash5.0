import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Button, Collapse} from 'react-bootstrap'
import {useState} from 'react';
import {Form} from './Form';
import {Form1} from './Form1'




export const Navbar1 = () => {

  const [opendetail , setOpenDetail] = useState(false)
  const [veiwdetail , setVeiwDetail] = useState(false)



  return (<>
    <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{color: 'green'}}>₿ Code Conquerors</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contect us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
       
      </ul>
     
  </div>
  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
      <Button className="btn btn-bd-Login d-lg-inline-block my-2 my-md-3 ms-md-9" type="button"  style = {{}} onClick={()=>{setOpenDetail(!opendetail)}} >Login</Button>
      <div className = "form">
    </div>
    <Button className="btn btn-bd-Signin d-lg-inline-block my-2 my-md-3 ms-md-9" type="button" style =  {{}} onClick={()=>{setVeiwDetail(!veiwdetail)}} >signin</Button>
      <div className = "form1">    
    </div>

    </div>
      </div>
</nav>

    
   <Collapse in={opendetail} >
                                      <div id="example-collapse-text" style = {{                               
                                          borderRadius:'3px',
                                          backgroundColor:'rgb(168,168,168)',
                                          padding:'10px',
                                          // justifyContent:'center',
                                      }}>
                                         {/* <h5 style = {{display:'flex',margin:'10px 20px'}}>Details : </h5> <br /> */}
                                          
                                          
                                        <Form1/>
                                      </div>
                                  </Collapse>
  <Collapse in={veiwdetail} >
                                      <div id="example-collapse-text" style = {{                               
                                          borderRadius:'3px',
                                          backgroundColor:'rgb(168,168,168)',
                                          padding:'10px',
                                          // justifyContent:'center',
                                      }}>
                                         {/* <h5 style = {{display:'flex',margin:'10px 20px'}}>Details : </h5> <br /> */}
                                          
                                          
                                        <Form/>
                                      </div>
  </Collapse>

    
    </div>
     
                                       
                                </>
  )
                                    }

