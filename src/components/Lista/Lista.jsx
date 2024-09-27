import React from 'react'
import styles from './Lista.module.css'

const Lista = ({children}) => {
  return (
    <section className={styles.listaFilmes}>
        {children}
    </section>
  )
}

export default Lista