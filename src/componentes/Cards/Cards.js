import React from 'react'
import './Cards.css'
import maggie from './img/maggie.jpg'
import homer from './img/homer.jpg'
import bart from './img/bart.jpg'


const Cards = () => {
  return (
    <div class="row pt-5 py-5 bg-warning">
    <div class="col-lg-4 col-sm-12 d-flex justify-content-center">
      <div class="card w-50 h-80 ">
      <img src={maggie} width="200px" height="200px" alt="maggie" />
        <div class="card-body">
          <h5 class="card-title">Maggie</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional</p>
          <button type="button" class="btn btn-danger">Leer mas...</button>
        </div>
        </div>
    </div>
    <div class="col-lg-4 col-sm-12 d-flex justify-content-center">
      <div class="card w-50 h-80">
      <img src={homer} width="200px" height="200px" alt="homer" />
        <div class="card-body">
          <h5 class="card-title">Homero</h5>
          <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          <button type="button" class="btn btn-danger">Leer mas...</button>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-sm-12 d-flex justify-content-center">
      <div class="card w-50 h-80">
      <img src={bart} width="200px" height="200px" alt="bart" />
        <div class="card-body">
          <h5 class="card-title">Bart</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <button type="button" class="btn btn-danger">Leer mas...</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Cards