import React from 'react'
import './NameCard.css'

const NameCard=({suggestedName})=>{
    
    return (
        <a className="card-link" href={`https://www.namecheap.com/domains/registration/results/?domain=${suggestedName}`}>
        <div className='result-name-card'>
        <p className='results-name'>{suggestedName}</p>
        </div></a>
      
    )

}
export default NameCard