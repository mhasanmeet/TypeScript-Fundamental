"use client"

import React from 'react'
import styles from "./page.module.css"

const Event = () => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    console.log(e.target.value)
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log("Search")

  }

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id: number) =>{
    e.preventDefault()
    console.log(`Post ${id} has been delete`)
  }

  return (
    <div className={styles.event}>
      <form action="" className={styles.form}>
        <input type="text" className={styles.formInput} onChange={handleChange} placeholder='Search for anything'/>
        <button className={styles.formButton} onClick={handleClick}>Search</button>
      </form>

      <form action="" className="post">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis recusandae saepe quisquam 
          voluptatum, minus nisi soluta in accusamus doloribus molestiae.
        </p>
        <button onClick={(e) => handleDelete(e, 1)}>Delete</button>
      </form>

      <form action="" className="post">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis recusandae saepe quisquam 
          voluptatum, minus nisi soluta in accusamus doloribus molestiae.
        </p>
        <button onClick={(e) => handleDelete(e, 2)}>Delete</button>
      </form>
    </div>
  )
}

export default Event