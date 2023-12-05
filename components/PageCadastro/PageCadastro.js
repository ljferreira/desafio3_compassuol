import { useState, useContext, createContext}   from 'react';
import Botao          from '../Botao/Botao';
import EntradaUsuario from '../EntradaUsuario/EntradaUsuario';
import Link           from 'next/link';
import axios          from 'axios';
import estilos        from './PageCadastro.module.css';
import {contexto}     from '../../context/context'

const PageCadastro = () => {
    //let {fun} = useContext(contexto);
    const [dadosCadastro, setDadosCadastro] = useState({
                                                        name:'',
                                                        username:'',
                                                        email:'',
                                                        password:'',
                                                        confirmPassword:'',
                                                        birthdate:''   //"2001-04-18"
                                                       });

    const [responseLogin, setResponseLogin] = useState({user:'', toke:''});

    const [msgErro,setMsgErro] = useState({msgSenhasDiferem:'', });

    const handlerDados = (nomeCampo, event) => {
        if( nomeCampo === 'password' || nomeCampo === 'confirmPassword' )
            setMsgErro((msgErrosAnteriores) => ({...msgErrosAnteriores, msgSenhasDiferem:''}));
        setDadosCadastro((dadosAnteriores) => ({...dadosAnteriores, [nomeCampo]:event.target.value}));

    }

    const handlerValidaCadastro = async () => {

        if( dadosCadastro.password.trim() !== dadosCadastro.confirmPassword.trim() )
            setMsgErro( msgErroAnteriores => ({...msgErroAnteriores, msgSenhasDiferem:'As senhas não correspondem!'}));
        else
            await axios.post('https://social-compass-server.onrender.com/auth/register', {
                name: dadosCadastro.name,
                username: dadosCadastro.username,
                email: dadosCadastro.email,
                password: dadosCadastro.password,
                confirmPassword: dadosCadastro.confirmPassword,
                birthdate: dadosCadastro.birthdate   //"2001-04-18"
               })
            .then(function (response) {
                setResponseLogin({user: response.data.user, token: response.data.token})
                handlerLiberaAcesso();
            })
            .catch(function (error) {
                console.log(error);
                //setValidacao(false);
            });
    }

    const handlerLiberaAcesso = () => {window.location.href = `/homescreen`}

    return(
        <main className={estilos.sectionLoginImagem}>
            <section className={estilos.sectionLogin}>
                <h1>Olá,</h1>
                <h4>Por favor, registre-se para continuar.</h4>
                <h2>Cadastro</h2>
                <EntradaUsuario onChange={(evento) => handlerDados('name', evento)} placeHolder='Nome' icone='img/svg/icon_user.svg' tamanho='18' tipo='text'/>
                <EntradaUsuario onChange={(evento) => handlerDados('username', evento)} placeHolder='Usuário' icone='img/svg/icon_fingerprint.svg' tamanho='18' tipo='text'/>
                <EntradaUsuario onChange={(evento) => handlerDados('birthdate', evento)} placeHolder='Nascimento' icone='img/svg/icon_calendar.svg' tamanho='18' /*tipo='date'*//>
                <EntradaUsuario onChange={(evento) => handlerDados('email', evento)} placeHolder='Email' icone='img/svg/icon_arroba.svg' tamanho='18' tipo='email'/>
                <EntradaUsuario onChange={(evento) => handlerDados('password', evento)} placeHolder='Senha' icone='img/svg/icon_padlock.svg' tamanho='18' tipo='password'/>
                <EntradaUsuario onChange={(evento) => handlerDados('confirmPassword', evento)} placeHolder='Confirmar senha' icone='img/svg/icon_shield.svg' tamanho='18' tipo='password'/>
                { msgErro.msgSenhasDiferem != '' &&  <p className={estilos.sectionCadastroMsgErroConfirmPassword}>{msgErro.msgSenhasDiferem}</p> }
                <Botao onClick={handlerValidaCadastro} titulo='Registrar-se'/>
                <h6>Já possui uma conta? <Link className={estilos.linkFacaLogin} href ='/login'>Faça Login</Link></h6>
            </section>
            <section className={estilos.sectionImgCompassUOL}>
                <img className={estilos.logoCompassUOL} src='img/png/compass.uol_Negativo.png'/>
                <img className={estilos.imagemCompassUOL} src='img/png/side_image.png'/>
            </section>
        </main>
    );
}

export default PageCadastro;