import { GET_CONTACTS } from '../actions/types'

const intialState = {
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

export default function(state = intialState, action){
    switch(action.type){
        case GET_CONTACTS : 
            return{
                ...state
            };
        default :
            return state;
    }

}