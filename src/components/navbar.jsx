import React from "react";
export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg bg-body-transparant '>
      <div className='container-fluid'>
        <span className='nav-brand h1'>Arif</span>
        <button
          className='btn-nav'
          type='button'
          data-bs-toggle='offcanvas'
          data-bs-target='#offcanvasRight'
          aria-controls='offcanvasRight'>
          <i class='bi bi-list'></i>
        </button>

        <div
          className='offcanvas offcanvas-end'
          tabindex='-1'
          id='offcanvasRight'
          aria-labelledby='offcanvasRightLabel'>
          <div className='offcanvas-header'>
            <h5 className='offcanvas-title' id='offcanvasRightLabel'>
              Arif Triana
            </h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='offcanvas'
              aria-label='Close'></button>
          </div>
          <div className='offcanvas-body'>
            <ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  HOME
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#about'>
                  ABOUT ME
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#projects'>
                  PORTFOLIO
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#service'>
                  SERVICES
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#contact'>
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
