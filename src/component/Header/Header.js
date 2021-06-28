import React from 'react'
import './Header.css'
import Image from './image.png'
const Header=({headTitle,headImage})=>{
    return (
        <div className='head-container'>
        <img src={Image} className={`head-image ${headImage?'head-image-expanded':'head-image-contracted'}`} alt="img"></img>
        <h1 className={`head-text ${headImage?'head-text-expanded':'head-text-contracted'}`}>{headTitle}</h1>
        </div>
    )
}
export default Header