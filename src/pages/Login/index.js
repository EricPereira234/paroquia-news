import "./login.css";


//importando arquivos
import Logo from "../../components/Logo/logoMenor";

export default function Login() {
    return (
        <>
            <Logo />
            <div className="card-login" >
                <label>Email</label>
                <input type={'email'} placeholder="digite o email..." />
                <label>Senha</label>
                <input type={'password'} placeholder="digite sua senha...." />
                <button>Entrar</button>

            </div>
        </>
    )
}