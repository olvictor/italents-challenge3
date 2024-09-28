import React from 'react'
import styles from './Modal.module.css'
import { IoMdClose } from "react-icons/io";

const Modal = ({item,setOpenModal}) => {
  return (
    <section className={styles.backgroundModal}>
        <div className={styles.modal}>
            <div className={styles.modalHeader}>
                <h3>{item.Title}</h3>
                <IoMdClose onClick={()=> setOpenModal(false)} />
            </div>
            <h2>Ano de Lançamento : </h2> <span>{item.Year}</span>
            <h2>Diretor : </h2> <span>{item.Director}</span>
            <h2>Atores : </h2> <span>{item.Actors}</span>
            <h2>Plot : </h2> <span>{item.Plot}</span>
            <h2>Awards : </h2> <span>{item.Awards}</span>

        </div>
    </section>
  )
}

export default Modal