// eslint-disable-next-line
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="blog-container">
      <h1 className="blog-title">Recco</h1>
      <ul className="nav-menu">
        <li>
          <Link className="nav-link" to="/">
            Store
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/about">
            Orders
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/contact">
            Analytics
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
