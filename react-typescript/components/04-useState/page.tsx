import React, { useState } from 'react'
import { UserType } from '@/types/types'

const UseState = () => {

    const [userName, setUserName] = useState("")
    const [user, setUser] = useState<UserType | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setUserName(e.target.value)
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault()
        setUser({
            name: userName,
            sessionId: Math.random()
        })
    }

  return (
    <div className="">
        {/* If user exist then user logged in otherwise login form will appear */}
        {user ? 
            (`${user.name} logged in`) 
            : 
            (<form action="">
            <input type="text" onChange={handleChange}/>
            <button onClick={handleClick}>Login</button>
            </form>
            )
        }
    </div>
  )
}

export default UseState