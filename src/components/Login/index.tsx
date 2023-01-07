import { useState, useContext } from "react";
import style from "../Login/style.module.scss";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')


  const handleLogin = async ()=>{
    if(email && password){
      const isLogged = await auth.signIn(email, password)
      if(isLogged){
        navigate('/home')
      }else{
        alert("Erro de autenticação")
      }
    }
  } 

  return (
    <div className={style.container}>

      <input type="text" 
      placeholder="Insira seu e-mail" 
      onChange={(e)=> setEmail(e.target.value)}
      value={email} />
      <input
        type="password"
        placeholder="Insira sua senha"
        onChange={(e)=> setPassword(e.target.value)}
        value={password}
      />

      <button onClick={handleLogin}>Continuar</button>
    </div>
  );
};

export default Login;
