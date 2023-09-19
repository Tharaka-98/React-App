import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';


function Sidebar() {
  return (
    <div className='d-flex flex-column justify-content-between bg-dark text-white p-4 vh-100'>
    <div>
      <a href="#" className='d-flex align-items-center'> {/* Provide a valid href */}
        <i className='bi bi-bootstrap fs-5 me-2'></i>
        <span className='fs-4'>LITHO</span>
      </a>
      <hr className='text-secondary mt-2' />
      <ul className='nav nav-pills flex-column p-0 m-0'>
        <li className='nav-item p-1'>
          <a href="#" className='nav-link text-white'> {/* Provide a valid href */}
            <i className='bi bi-speedometer me-2 fs-5'></i>
            <span className='fs-5'>Dashboard</span>
          </a>
        </li>
        <li className='nav-item p-1'>
          <a href="#" className='nav-link text-white'> {/* Provide a valid href */}
            <i className='bi bi-table me-2 fs-5'></i>
            <span className='fs-5'>Orders</span>
          </a>
        </li>
        <li className='nav-item p-1'>
          <a href="#" className='nav-link text-white'> {/* Provide a valid href */}
            <i className='bi bi-people me-2 fs-5'></i>
            <span className='fs-5'>Customers</span>
          </a>
        </li>
        <li className='nav-item p-1'>
          <a href="#" className='nav-link text-white'> {/* Provide a valid href */}
            <i className='bi bi-grid me-2 fs-5'></i>
            <span className='fs-5'>Report</span>
          </a>
        </li>
      </ul>
      </div>
      <div>
        <hr className='text-secondary' />
        <i className='bi bi-facebook fs-5'></i>
        <i className='bi bi-instagram fs-5'></i>
        <i className='bi bi-twitter fs-5'></i>
      </div>
    </div>
  );
}

export default Sidebar;
