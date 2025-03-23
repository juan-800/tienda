import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hook/useForm'
//  Página de registro de usuarios
export const RegisterPage = () => {
  const navigate = useNavigate();// Hook para la navegación entre páginas
  const {name,email,password,onInputChange,onResetForm} = useForm({
    name:'',
    email:'',
    password:'',
  });
  // Función que se ejecuta cuando el usuario envía el formulario de registro
  const onRegister = (e) =>{
    e.preventDefault()
    navigate('/dashboard',{
      replace:true,
      state:{
        logged:true,
        name
      }
    })
    onResetForm();

  }

  return (
    <div className="wrapper">
      {/* Formulario de registro */}
      <form onSubmit={onRegister}>
        <h1>Registrarse</h1>

        <div className="input-group">
          <input 
            type="text" 
            name='name' 
            id='name'
            value={name} 
            onChange={onInputChange}
            required 
            autoComplete='off'
          />
          <label htmlFor="name">Nombre:</label>

        </div>
        <div className="input-group">
          <input 
            type="email" 
            name='email' 
            id='email'
            value={email} 
            onChange={onInputChange}
            required 
            autoComplete='off'
          />
          <label htmlFor="email">Email:</label>

        </div>
        <div className="input-group">
          <input 
            type="password" 
            name='password' 
            id='password'
            value={password} 
            onChange={onInputChange}
            required 
            autoComplete='off'
          />
          <label htmlFor='password'>Contraseña:</label>

        </div>
        <button>Registrarse</button>
      </form>

    </div> 
  )
}
