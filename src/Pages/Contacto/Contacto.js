import React from 'react'
import './Contacto.css'
import contacto from './img/carrousel-1.jpg'

const Contacto = () => {
  return (
   
    <div className="container">
     <form>
  <div className="mb-5">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
<img className="imagenCont" src={contacto} width="200px" height="200px" alt="cont" />
     
</div>
  )
}

export default Contacto