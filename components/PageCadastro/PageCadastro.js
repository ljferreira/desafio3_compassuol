import { Fragment } from 'react';
import Botao          from '../Botao/Botao';
import EntradaUsuario from '../EntradaUsuario/EntradaUsuario';
import Link           from 'next/link';
import estilos        from './PageCadastro.module.css';

const PageCadastro = () => {
    return(
        <main className={estilos.sectionLoginImagem}>
            <section className={estilos.sectionLogin}>
                <h1>Olá,</h1>
                <h4>Por favor, registre-se para continuar.</h4>
                <h2>Cadastro</h2>
                <EntradaUsuario placeHolder='Nome' icone='img/svg/icon_user.svg' tamanho='18' tipo='text'/>
                <EntradaUsuario placeHolder='Usuário' icone='img/svg/icon_fingerprint.svg' tamanho='18' tipo='text'/>
                <EntradaUsuario placeHolder='Nascimento' icone='img/svg/icon_calendar.svg' tamanho='18' /*tipo='date'*//>
                <EntradaUsuario placeHolder='Email' icone='img/svg/icon_arroba.svg' tamanho='18' tipo='email'/>
                <EntradaUsuario placeHolder='Senha' icone='img/svg/icon_padlock.svg' tamanho='18' tipo='password'/>
                <EntradaUsuario placeHolder='Confirmar senha' icone='img/svg/icon_shield.svg' tamanho='18' tipo='password'/>
                <Botao titulo='Registrar-se'/>
                <h6>Já possui uma conta? <Link className={estilos.linkFacaLogin} href ='/'>Faça Login</Link></h6>
            </section>
            <section className={estilos.sectionImgCompassUOL}>
                <img className={estilos.logoCompassUOL} src='img/png/compass.uol_Negativo.png'/>
                <img className={estilos.imagemCompassUOL} src='img/png/side_image.png'/>
            </section>
        </main>
    );
}

export default PageCadastro;