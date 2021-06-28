import React from 'react'
import './Results.css'
import NameCard from '../NameCard/NameCard'

const Results=({suggestedName})=>{
    const suggestedNameJSX=suggestedName.map(suggestedName=>{
        return <NameCard key={suggestedName} suggestedName={suggestedName}/>
    })
    return (
       <div className="results-container">
       {suggestedNameJSX}
       </div>
    )
  }
  export default Results