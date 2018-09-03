import React, {Component} from 'react'
import Contact from './Contact'


class Contacts extends Component{
    state={
        contacts : [{
            id : 1,
            name : 'Jhon Smith',
            email : 'jhon@email.com',
            phone  : '986755678'
        },{
            id : 2,
            name : 'Andrew Jhonson',
            email : 'andrew@gmail.com',
            phone : '3456789'
        },{
            id : 3,
            name : 'Bob Marley',
            email : 'bob@gmail.com',
            phone : '34567890'
        }]
    }

    render(){
        const {contacts} = this.state
        return(
            <React.Fragment>
            {contacts.map((contact)=>{
                return <Contact key={contact.id} contact={contact}></Contact>
            })}
            </React.Fragment>
        )
    }
}

export default Contacts;