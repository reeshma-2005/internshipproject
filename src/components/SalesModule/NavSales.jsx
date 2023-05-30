import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import AddCustomer from './AddCustomer';
import DisplayCustomer from './DisplayCustomer';
import Packages from './Packages';
const NavSales = () => {
  return (
    <>
      
   <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item active">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/addcustomer">Add Customer</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/displaycustomer">DisplayCustomer</a>
        </li>
       
        
        <li class="nav-item">
          <a class="nav-link" href="/salesorderpage">salesorder</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/package">Package</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/adddeliverychalan">Delivery Chalan</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/invoiceadd">Invoice</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default NavSales