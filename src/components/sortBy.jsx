import React from 'react'

export default function SortBy(props){
    let { options, value } = props;
    return(
        <div className="sortTable">
            <select onChange={options} value={value} >
                <option value="default">SortBy</option>
                <option value="name">Name</option>
            </select>
        </div>
    )
} 