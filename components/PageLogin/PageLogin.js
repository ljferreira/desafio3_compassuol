import { Fragment } from 'react';
import Botao          from '../Botao/Botao';
import EntradaUsuario from '../EntradaUsuario/EntradaUsuario';
import estilos        from './PageLogin.module.css';

const PageLogin = () => {
    return(
        <main className={estilos.sectionLoginImagem}>
            <section className={estilos.sectionLogin}>
                <h1>Olá,</h1>
                <h4>Para continuar navegando de forma segura, efetue o login.</h4>
                <h2>Login</h2>
                <EntradaUsuario placeHolder='Usuário' icone='img/svg/icon_user.svg' tamanho='18'/>
                <EntradaUsuario placeHolder='Senha' icone='img/svg/icon_padlock.svg' tamanho='18'/>
                <Botao titulo='Entrar'/>
                <h6>Novo por aqui? <span>Registre-se</span></h6>
            </section>
            <section className={estilos.sectionImgCompassUOL}>
                <img className={estilos.logoCompassUOL} src='img/png/compass.uol_Negativo.png'/>
                <img className={estilos.imagemCompassUOL} src='img/png/side_image.png'/>
            </section>
        </main>
    );
}

export default PageLogin;