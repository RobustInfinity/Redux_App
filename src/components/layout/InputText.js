import React from 'react'
import PropTypes from 'prop-types'

const InputText = (props)=>{
    const {type, name, value, placeholder} = props
    return(
        <div className="form-group">
            <input name={name} value={value} type={type} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={placeholder} />
        </div>
    )

}

InputText.propTypes = {
    type : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    value : PropTypes.string.isRequired,
    placeholder : PropTypes.string.isRequired
}

export default InputText;

