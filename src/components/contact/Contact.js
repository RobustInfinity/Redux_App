import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

class Contact extends Component{

    state = {
        expand : false
    }

    onClickShow = ()=>{
        this.setState({expand : !this.state.expand})
    }

    render(){
        const { name, email, phone} = this.props.contact;
        const {expand} = this.state;
        return (
            <div className='container col-md-8'>
            <div className="card" style={{'margin' : '10px 0px'}}>
                <div className="card-header">
                   <p style={{'margin' : '10px 0px'}}> {name}  <i style={{cursor : 'pointer'}} onClick={this.onClickShow} 
                className={expand ? 'fas fa-caret-up' : 'fas fa-caret-down'}></i>
                <i className="fas fa-times" style={{float : 'right', cursor : 'pointer', color: 'red'}}></i>
                <Link to={`/contact/editContact`}>
                <i className="fas fa-pencil-alt" style={{float : 'right', 'marginRight' : '20px' ,cursor : 'pointer', color: 'green'}}></i>
                </Link>
                </p>
                </div>
                {expand ? 
                <div className="card-body">
                    <h5 className="card-title">{email}</h5>
                    <p className="card-text">{phone}</p>
                </div> : null }
                </div>
                </div>
        )
    }
}

Contact.propTypes = {
    contact : PropTypes.object.isRequired
}

export default Contact;