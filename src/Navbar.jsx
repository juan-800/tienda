import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';



export const Navbar = () => {
    const {state}= useLocation();//  estado de la ruta actual (verifica si el usuario está logueado)
    const navigate = useNavigate();// Permite redirigir a otras páginas

    console.log(state);// Muestra el estado en la consola 

    const onLogout = () =>{
        navigate('/login',{ // Redirige a la página de login al cerrar sesión
            replace:true,
            state: { logged: false } // Actualiza el estado para indicar que el usuario ha cerrado sesión
        })
    }

    return (
        <>
            <header>
                
                {
                    state?.logged ?( // Si el usuario está logueado, muestra su nombre y el botón de cerrar sesión
                <div className="user">
                <span className="username">{state?.name}</span>
                <button className=" btn-logout" onClick={onLogout}>
                    Cerrar sesion</button>
                </div>
                    ):( // Si NO está logueado, muestra los enlaces de inicio de sesión y registro
                    <nav>
                        <Link to='/login'>Iniciar sesion</Link>
                        <Link to='/register'>Registrarse</Link>
                    </nav>
                    )
                }
                
            </header>
            <Outlet />
        </>
    );
};