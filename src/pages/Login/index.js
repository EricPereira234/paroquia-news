import "./login.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

//conexão com o firebase
import { auth } from "../../db/firebaseConection";
import { signInWithEmailAndPassword } from "firebase/auth";



//importando arquivos
import Logo from "../../components/Logo/logoMenor";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();


    function logar(e) {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, senha)
            .then(() => {
                toast.success('bem-vindo de volta!');
                navigate('/dashboard/painel');
            })
            .catch(() => {
                toast.error('usuario não logado verifique todos os campos');
            });

    }
    return (
        <>
            <Logo />
            <form className="card-login" onSubmit={logar} >
                <label>Email</label>
                <input type={'email'} placeholder="digite o email..." 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                />
                <label>Senha</label>
                <input type={'password'} placeholder="digite sua senha...." 
                      value={senha}
                      onChange={(e) => setSenha(e.target.value)}
                />
                <button type="submit" >Entrar</button>

            </form>
        </>
    )
}