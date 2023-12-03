import { useState }   from 'react';
import Botao          from '../Botao/Botao';
import EntradaUsuario from '../EntradaUsuario/EntradaUsuario';
import Link           from 'next/link';
import axios          from 'axios';
import estilos        from './PageLogin.module.css';

const PageLogin = () => {

    const [dadosLogin, setDadosLogin]       = useState({username:'', password:''});
    const [validacao, setValidacao]         = useState(true);
    const [responseLogin, setResponseLogin] = useState({user:'', toke:''});
    
    const msgErroUsuarioSenha = "Usuário e/ou Senha inválidos.\nPor favor, tente novamente!";

    const handlerValidaLogin = async () => {
        if( dadosLogin.username.length === 0 || dadosLogin.password.length === 0 )
            setValidacao(false);
        else
            await axios.post('https://social-compass-server.onrender.com/auth/login', {
                username: dadosLogin.username.trim(),
                password: dadosLogin.password.trim()
            })
            .then(function (response) {
                setResponseLogin({user: response.data.user, token: response.data.token})
                handlerLiberaAcesso();
            })
            .catch(function (error) {
                console.log(error);
                setValidacao(false);
            })
    }

    const handlerTexto = (nomeCampo, event) => {
        setDadosLogin((dadosAnteriores) => ({...dadosAnteriores, [nomeCampo]:event.target.value}));
        setValidacao(true);
    }

    const handlerLiberaAcesso = () => {window.location.href = `/homescreen`}
    
    return(
        <main className={estilos.sectionLoginImagem}>
            <section className={estilos.sectionLogin}>
                <h1>Olá,</h1>
                <h4>Para continuar navegando de forma segura, efetue o login.</h4>
                <h2>Login</h2>
                <EntradaUsuario onChange={(evento) => handlerTexto('username', evento)} placeHolder='Usuário' icone='img/svg/icon_user.svg'  tamanho='18' tipo='text' />
                <EntradaUsuario onChange={(evento) => handlerTexto('password', evento)} placeHolder='Senha' icone='img/svg/icon_padlock.svg' tamanho='18' tipo='password' />
                { !validacao && <p className={estilos.sectionLoginMsgErro}>{msgErroUsuarioSenha}</p> }
                <Botao onClick={handlerValidaLogin} titulo='Entrar' />
                <h6>Novo por aqui? <Link className={estilos.linkRegistro} href ='/cadastro'>Registre-se</Link></h6>
            </section>
            <section className={estilos.sectionImgCompassUOL}>
                <img className={estilos.logoCompassUOL} src='img/png/compass.uol_Negativo.png'/>
                <img className={estilos.imagemCompassUOL} src='img/png/side_image.png'/>
            </section>
        </main>
    );
}

export default PageLogin;