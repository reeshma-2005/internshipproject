// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Home from "./components/Home/Home"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import NavInventory from "./components/inventory/NavInventory";
import AddItems from "./components/inventory/AddItems";
import DisplayItems from "./components/inventory/DisplayItems";
import AddItemGroup from "./components/inventory/AddItemGroup";
import DisplayItemGroup from "./components/inventory/DisplayItemGroup";
import Adjustments from "./components/inventory/Ajustments";
import NavSales from "./components/SalesModule/NavSales";
import AddCustomer from "./components/SalesModule/AddCustomer";
import DisplayCustomer from "./components/SalesModule/DisplayCustomer";
import EditCustomer from "./components/SalesModule/EditCustomer";
import AddVendor from "./components/vendormodule/AddVendor";
import DisplayVendors from "./components/vendormodule/DisplayVendors";
import EditVendor from "./components/vendormodule/EditVendor";
import SalesOrders from "./components/SalesModule/SalesOrders";
import NavVendor from "./components/vendormodule/NavVendor";
import Packages from "./components/SalesModule/Packages";
import DeliveryChalan from "./components/SalesModule/DeliveryChalan";
import AddInvoice from "./components/SalesModule/AddInvoice";
function App() {
  return (
    
    <BrowserRouter>
    <Routes>

       <Route path="/" element={<Home/>}/>
       <Route path="/navinventory" element={<NavInventory/>}/>
       <Route path="/additems" element={<AddItems/>}/>
       <Route path="/displayitems" element={<DisplayItems/>}/>
       <Route path="/additemgroups" element={<AddItemGroup/>}/>
       <Route path="/displayitemgroups" element={<DisplayItemGroup/>}/>
       <Route path="/addadjustments" element={<Adjustments/>}/>
       <Route path="/navsales" element={<NavSales/>}/>
       <Route path="/addcustomer" element={<AddCustomer/>}/>
       <Route path="/displaycustomer" element={<DisplayCustomer/>}/>
       <Route path="/updatecustomer/:custid" element={<EditCustomer/>}/>
       <Route path="/addvendor" element={<AddVendor/>}/>
       <Route path="/updatevendor/:vendid" element={<EditVendor/>}/>
       <Route path="/displayvendor" element={<DisplayVendors/>}/>
       <Route path="/salesorderpage" element={<SalesOrders/>}/>
       <Route path="/navvendor" element={<NavVendor/>}/>
       <Route path="/package" element={<Packages/>}/>
       <Route path="/adddeliverychalan" element={<DeliveryChalan/>}/>
       <Route path="/invoiceadd" element={<AddInvoice/>}/>
    </Routes>
    </BrowserRouter>
    
      
    
  );
}

export default App;
