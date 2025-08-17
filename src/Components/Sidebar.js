import React, { Component } from 'react'
import { FaHome, FaTachometerAlt, FaShoppingCart, FaBox, FaUsers } from "react-icons/fa";


export class Sidebar extends Component {
  render() {
    return (
       <div className=" fix-bottom p-3 bg-light" style={{ width: "250px", height: "100vh" }}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <span className="fs-4 fw-bold">____________</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#home" className="nav-link active d-flex align-items-center">
            <FaHome className="me-2" /> Home
          </a>
        </li>
        <li>
          <a href="#dashboard" className="nav-link text-dark d-flex align-items-center">
            <FaTachometerAlt className="me-2" /> Dashboard
          </a>
        </li>
        <li>
          <a href="#orders" className="nav-link text-dark d-flex align-items-center">
            <FaShoppingCart className="me-2" /> Orders
          </a>
        </li>
        <li>
          <a href="#products" className="nav-link text-dark d-flex align-items-center">
            <FaBox className="me-2" /> Products
          </a>
        </li>
        <li>
          <a href="#customers" className="nav-link text-dark d-flex align-items-center">
            <FaUsers className="me-2" /> Customers
          </a>
        </li>
      </ul>
    </div>
    )
  }
}


export default Sidebar;
