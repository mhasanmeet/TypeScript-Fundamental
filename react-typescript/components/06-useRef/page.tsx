"use client"

import React, { useEffect, useRef } from 'react'

const UseRef = () => {

    const inputRef = useRef<HTMLInputElement>(null)
    const userNameInputRef = useRef<HTMLInputElement>(null)

    useEffect(() =>{
        inputRef.current?.focus()
    }, [])

    const handleClick = () =>{
        console.log("Username is:" + userNameInputRef.current?.value)
    }

  return (
    <div>
        <input type="text" ref={inputRef} placeholder="focus here"/>
        <input type="text" ref={userNameInputRef} placeholder="username"/>
        <button type='submit' onClick={handleClick}>Submit</button>
    </div>
  )
}

export default UseRef