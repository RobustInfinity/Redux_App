import React from 'react'
import PropType from 'prop-types'
import {Link} from 'react-router-dom'

const Header = (props)=>{
    const {brand} = props;
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">{brand}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <Link to='/' className="nav-item nav-link active">Home</Link>
            <Link to='/contact/add' className="nav-item nav-link active">Add Contact</Link>
            <Link to='/contact/contacts' className="nav-item nav-link active">Contacts</Link>
            <Link to='/contact/about' className="nav-item nav-link active">About</Link>
            </div>
        </div>
        </nav>
    )
}

Header.propTypes = {
    brand : PropType.string.isRequired
}

export default Header;