import React from 'react'
import NameColumn from './tableColums/nameColumn';
import SortBy from './sortBy';
import UserNameColumn from './tableColums/userNameColumn';
import CityColumn from './tableColums/cityColumn';
import CompanyNameColumn from './tableColums/companyNameColumn';
import EmailColumn from './tableColums/emailColumn';
import PhoneNumberColumn from './tableColums/phoneNumberColumn';
import WebsiteColumn from './tableColums/websiteColumn';

export default function ContactList(props){
    let { options } = props;
    return(
        <div className="table-view">
            <h1>Table content View</h1>
            <SortBy options = {options}/>
            <div className="column">
                <h3>Name</h3>
                {props.contacts.map(items => 
                    <NameColumn
                        key = {items.key}
                        name = {items.name} 
                    />
                )}
            </div>
            <div className="column">
                <h3>User Name</h3>   
                {props.contacts.map(items => 
                    <UserNameColumn 
                        key = {items.key}
                        username = {items.username}
                    />
                )}
            </div>
            <div className="column">
                <h3>City</h3>   
                {props.contacts.map(items => 
                    <CityColumn 
                        key = {items.key}
                        city = {items.address.city}
                    />
                )}
            </div>
            <div className="column">
                <h3>Company Name</h3>   
                {props.contacts.map(items => 
                    <CompanyNameColumn 
                        key = {items.key}
                        companyName = {items.company.name}
                    />
                )}
            </div>
            <div className="column">
                <h3>Email</h3>   
                {props.contacts.map(items => 
                    <EmailColumn 
                        key = {items.key}
                        email = {items.email}
                    />
                )}
            </div>
            <div className="column">
                <h3>Phone number</h3>   
                {props.contacts.map(items => 
                    <PhoneNumberColumn 
                        key = {items.key}
                        phone = {items.phone}
                    />
                )}
            </div>
            <div className="column">
                <h3>Website</h3>   
                {props.contacts.map(items => 
                    <WebsiteColumn 
                        key = {items.key}
                        website = {items.website}
                    />
                )}
            </div>
        </div>
    )
}

