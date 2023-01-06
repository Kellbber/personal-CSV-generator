import React from 'react'
import style from '../Login/style.module.scss'
const Login = () => {
  return (
    <div className={style.container}>
      <input  type="text" placeholder='Insira seu e-mail'/>
      <input  type="password" placeholder='Insira sua senha' />
      <button>Continuar</button>
    </div>

  )
}

export default Login;