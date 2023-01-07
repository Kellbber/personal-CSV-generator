import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const auth = useContext(AuthContext)
  const navigate = useNavigate();
  const handleLogout = async () => {
    await auth.signOut();
    navigate('/')
  } 
  return (
    <>
    <h1>Chegou aqui</h1>
    <span>Olá, {auth.user?.name}</span>
    {auth.user && 
    <button onClick={handleLogout}>Sair</button>
    }
    </>
  )
}

export default Home;