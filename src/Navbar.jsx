import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navbar(props){
    return(
        <nav className="navbar navbar-expand-lg bg-info">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">{props.navitem1}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/About">{props.navitem2}</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/"></Link>{props.dropdownitme1}</li>
            <li><Link className="dropdown-item" to="/"></Link>{props.dropdownitme2}</li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/"></Link>{props.dropdownitme3}</li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )
}
Navbar.prototype = {title:PropTypes.string,
                    navitem1:PropTypes.string, 
                    navitem2:PropTypes.string,
                    dropdownitme1:PropTypes.string,
                    dropdownitme2:PropTypes.string,
                    dropdownitme3:PropTypes.string,}
                  
  Navbar.defaultProps = {
        title : "this is title",
        navitem1: "this  is first item",
        navitem2: "this is second item",
        dropdownitme1:"this first dropdown item",
        dropdownitme2:"this second dropdown item",
        dropdownitme3:"this third dropdown item",

        
  };



export default Navbar;