import { useNavigate } from "react-router-dom";
import CampoTexto from "../CampoTexto";
import Botao from "../components/Botao";
function Login() {
  const navigate = useNavigate()
  function entrar(e) {
    e.preventDefault()
    navigate('/dashboard')
  }
  return (
    <div className="tela-login">
      <form className="form-login" onSubmit={entrar}>
        <h1>FisioVida</h1>
        <p>Sistema de Fisioterapia</p>
        <CampoTexto
          label="E-mail"
          type="email"
          placeholder="Digite seu e-mail"
        />
        <CampoTexto
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
        />
        <Botao type="submit">Entrar</Botao>
      </form>
    </div>
  )
}
export default Login