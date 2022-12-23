import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-sm navbar-dark bg-light mb-4">
      <div className="container" style={{width: '800px'}}>
        <NavLink to="/" className="nav-link">
          Contacts
        </NavLink>
        <Link to='/new-contact' className='btn btn-primary'>
          Add new contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;