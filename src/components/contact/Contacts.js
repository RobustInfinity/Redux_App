import React, {Component} from 'react'
import Contact from './Contact'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { GET_CONTACTS } from '../../actions/types';


class Contacts extends Component{
    componentDidMount(){
        this.props.getContacts();
    }

    render(){
        const {contacts} = this.props
        console.log(contacts)
        return(
            <React.Fragment>
            {contacts.map((contact)=>{
                return <Contact key={contact.id} contact={contact}></Contact>
            })}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) =>({
    contacts : state.contact.contacts
})

const mapDispatchToProps = (dispatch)=>({
    getContacts : () => dispatch({type : GET_CONTACTS})
})

Contacts.propTypes = {
    contacts : PropTypes.array.isRequired
}
export default connect(mapStateToProps,mapDispatchToProps)(Contact);