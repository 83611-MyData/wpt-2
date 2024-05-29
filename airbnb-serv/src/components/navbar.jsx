import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav
      className='navbar navbar-expand-lg bg-body-tertiary bg-dark'
      data-bs-theme='dark'
    >
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
        Airbnb
        </a>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link
                to='/home'
                className='nav-link'
                aria-current='page'
                href='#'
              >
            Users
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/bookings'
                className='nav-link'
                aria-current='page'
                href='#'
              >

              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
