import React, {Component} from 'react'
import InputText from '../layout/InputText';

class AddContact extends Component{

    state={
        name: '',
        email : '',
        phone : '',
        errors : {}
    }

    render(){
        const {name, email, phone} = this.state;
        return(
            <div className='container col-md-5'>
                
                <InputText name='name' value={name} placeholder='Enter Name' type='text'> </InputText>
                <InputText name='email' value={email} placeholder='Enter Email' type='email'></InputText>
                <InputText name='phone' value={phone} placeholder='Enter Phone' type='text'></InputText>
                <button type="submit" className="btn btn-block btn-primary">Add</button>
                </div>
        )
    }
}

export default AddContact;