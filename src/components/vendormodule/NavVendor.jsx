import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import AddVendor from './AddVendor';
import DisplayVendors from './DisplayVendors'
import EditVendor from './EditVendor';
const NavVendor = () => {
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
          <a class="nav-link" href="/addvendor">ADD Vendor</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/displayvendor">Vendor Display</a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default NavVendor