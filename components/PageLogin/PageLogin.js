import { useState, useContext }   from 'react';
import Botao          from '../Botao/Botao';
import EntradaUsuario from '../EntradaUsuario/EntradaUsuario';
import Link           from 'next/link';
import axios          from 'axios';
import estilos        from './PageLogin.module.css';
import {Contexto}     from '../../context/context'

const PageLogin = () => {

    const [dadosLogin, setDadosLogin]       = useState({username:'', password:''});
    const [validacao, setValidacao]         = useState(true);
    const [responseLogin, setResponseLogin] = useState({user:'', token:''});
    let ctx = useContext(Contexto);
    //let {contexto, handlerContexto} = useContext(Contexto);
    const msgErroUsuarioSenha = "Usuário e/ou Senha inválidos.\nPor favor, tente novamente!";

    /*const handlerValidaLogin = async () => {
        if( dadosLogin.username === '' || dadosLogin.password === '' )
            setValidacao(false);
        else
            await axios.post('https://social-compass-server.onrender.com/auth/login', {
                username: dadosLogin.username.trim(),
                password: dadosLogin.password.trim()
            })
            .then(function (response){
                setResponseLogin({user: response.data.user, token: response.data.token});
                handlerLiberaAcesso();
            })
            .catch(function (error) {
                console.log(error);
                setValidacao(false);
                //handlerLiberaAcesso();
            })
    }*/

    const handlerValidaLogin = async () => {
        if( dadosLogin.username === '' || dadosLogin.password === '' )
            setValidacao(false);
        else
            await axios.post('https://social-compass-server.onrender.com/auth/login', {
                username: dadosLogin.username.trim(),
                password: dadosLogin.password.trim()
            })
            .then(function (response){
                //while(response.status === 204);
                //if(response.status === 204 || response.status === 200){
                    setResponseLogin({user: response.data.user, token: response.data.token});
                    handlerLiberaAcesso();
                //}
            })
            .catch(function (error) {
                console.log(error);
                setValidacao(false);
                //handlerLiberaAcesso();
            })
    }

    const handlerDados = (nomeCampo, event) => {
        setDadosLogin((dadosAnteriores) => ({...dadosAnteriores, [nomeCampo]:event.target.value}));
        setValidacao(true);
    }

    const handlerLiberaAcesso = () => {
        ctx.handlerContexto('secaoLogin', true);
        ctx.handlerContexto('idUsuario', responseLogin.user.id);
        ctx.handlerContexto('tokenAcesso', responseLogin.token);
        window.location.href = `/homescreen`;
    }
    
    return(
        <main className={estilos.sectionLoginImagem}>
            <section className={estilos.sectionLogin}>
                <h1>Olá,</h1>
                <h4>Para continuar navegando de forma segura, efetue o login.</h4>
                <h2>Login</h2>
                <EntradaUsuario onChange={(evento) => handlerDados('username', evento)} placeHolder='Usuário' icone='img/svg/icon_user.svg'  tamanho='18' tipo='text' />
                <EntradaUsuario onChange={(evento) => handlerDados('password', evento)} placeHolder='Senha' icone='img/svg/icon_padlock.svg' tamanho='18' tipo='password' />
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

/*
<h6>{ctx.contexto.secaoLogin}</h6>
<h6>{ctx.contexto.idUsuario}</h6>
<h6>{ctx.contexto.tokenAcesso}</h6>
*/

/*<h6>{ctx.contexto.tokenAcesso}</h6>
<h6>{ctx.contexto.secaoLogin}</h6>
<h6>{ctx.contexto.idUsuario}</h6>
<h6>{dadosLogin.username}</h6>
<h6>{dadosLogin.password}</h6>*/