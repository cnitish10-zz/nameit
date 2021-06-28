import React from 'react'
import './Header.css'
const Header=({headTitle,headImage})=>{
    return (
        <div className='head-container'>
        <img src="/Image1.png" className={`head-image ${headImage?'head-image-expanded':'head-image-contracted'}`}></img>
        <h1 className={`head-text ${headImage?'head-text-expanded':'head-text-contracted'}`}>{headTitle}</h1>
        </div>
    )
}
export default Header