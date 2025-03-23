import React from 'react'
import { useForm } from '../hook/useForm'
import { useNavigate } from 'react-router-dom';
// Componente LoginPage: Página de inicio de sesión
export const LoginPage = () => {

  const navigate = useNavigate();// Hook para la navegación
  const {name,email,password,onInputChange,onResetForm} = useForm({
    name:'',
    email:'',
    password:'',
  });
// Función que se ejecuta cuando el usuario envía el formulario
  const onLogin = (e) =>{
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
      {/* Formulario de inicio de sesión */}
      <form onSubmit={onLogin}>
        <h1>Iniciar Sesion</h1>

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
        <button>Iniciar sesion</button>
      </form>

    </div> 
  )
}