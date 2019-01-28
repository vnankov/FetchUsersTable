import React from 'react'
import ContactList from './contactList';

export default class Table extends React.Component{
    constructor(props){
        super(props)

        this.state =  {
            data : []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>  response.json())
        .then(response => {
            // create an array of contacts only with relevant data
            const newContacts = response.map(c => {
              return {
                id: c.id,
                name: c.name,
                username: c.username,
                email: c.email,
                address: c.address,
                phone: c.phone,
                website: c.website,
                company: c.company,
                key: c.id
              };
            });
    
            // create a new "State" object without mutating 
            // the original State object. 
            const newState = Object.assign({}, this.state, {
                data: newContacts
            });
    
            // store the new state object in the component's state
            this.setState(newState);
          })
        .catch(error => console.log(error))
    }


    render(){
        return(
            <div >
            <ContactList contacts={this.state.data}/>
            </div>
        )
    }
}