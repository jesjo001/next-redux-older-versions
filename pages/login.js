import React from 'react'
import style from '../styles/login.module.css'

function login() {
  return (
    
    <div className={style.container}>
        <form className={style.form}>
            <h1 className={style.title}>Login</h1>
            <div className={style.inputContainer}>
                <label className={style.label}>Username</label>
                <input className={style.input} type="text" placeholder="Username" />
            </div>
            <div className={style.inputContainer}>
                <label className={style.label}>Password</label>
                <input className={style.input} type="password" placeholder="Password" />
            </div>
            <div className={style.buttonContainer}>
                <button className={style.button}>Login</button>

            </div>
            </form>
    </div>
  )
}

export default login