import React from 'react'
import ContactList from './contactList';
import loadingImg from '../images/giphy.gif'
import SortArray from './functions/sort'

export default class Table extends React.Component{
    constructor(props){
        super(props)

        this.state =  {
            data : [],
            defaultData : [],
            loading : true,
            value : 'default'
        }
        this.selectOnChange = this.selectOnChange.bind(this);
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
            const newState = {...this.state,
                data: newContacts,
                defaultData: newContacts,
                loading:false
            };
    
            // store the new state object in the component's state
            this.setState(newState);
          })
        .catch(error => console.log(error))
    }

    selectOnChange(){
        if(this.state.value === 'default'){
            this.setState({value : 'name'})
            this.state.data.sort((a,b)=>{
                if(a.name < b.name) {return -1;}
                if(a.name > b.name) {return 1;}
            })
            SortArray(this.state.data)
        }
        else{
            this.setState({value : 'default'})

        }
    }

    render(){
        return(
            <div >
                {(!this.state.loading) ? 
                    <ContactList contacts={this.state.data}  options = {this.selectOnChange} value={this.state.value}/>
                :
                    <img src={loadingImg} alt=""/>
                }
            </div>
        )
    }
}