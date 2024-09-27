import React, { useState } from 'react'
import styles from './Slider.module.css'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Slider = ({item,setItemAtual,itemAtual,tamanhoArray}) => {

  const rightClick = () =>{
    if(itemAtual < tamanhoArray -1) setItemAtual(itemAtual+1) 
  }


  const leftClick = () =>{
    if(itemAtual > 0) setItemAtual(current => current - 1)
  }

  return (
    <div>
      <div className={styles.slider}>
        <IoIosArrowBack className={styles.left} onClick={leftClick}/>
        <img src={item.Images[1]} alt={item.Title} />
        <IoIosArrowForward className={styles.right} onClick={rightClick}/>
      </div>
      <h2>{item.Title} - {item.Year} </h2>
    </div>
  )
}

export default Slider