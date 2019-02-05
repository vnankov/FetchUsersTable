import React from 'react'

export default function SortBy(props){
    let { options } = props;
    return(
        <div className="sortTable">
            <select>
                <option value={options}>SortBy</option>
                <option value="name">Name</option>
            </select>
        </div>
    )
} 