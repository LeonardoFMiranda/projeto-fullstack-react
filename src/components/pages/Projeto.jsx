import React from 'react'
import styles from './Projeto.module.css'
import { useParams } from 'react-router-dom'

function Projeto() {

    const {id} = useParams()
    console.log(id)

  return (
    <div>Projeto</div>
  )
}

export default Projeto