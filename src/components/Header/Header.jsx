import React from 'react'

const Header = ({titulo,fontSize}) => {
  return (
    <header style={{fontSize}}>
        <h1>{titulo}</h1>
    </header>
  )
}

export default Header