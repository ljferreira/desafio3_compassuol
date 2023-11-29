import BotaoPage from '../BotaoPage/BotaoPage';
import  estilos from './SideMenu.module.css';

const SideMenu = () => {

    //return <button className = {estilos.botaoLogin}>{props.titulo}</button>;
    return (
        <section className={estilos.sectionSideMenu}>
            <img src='img/png/compass.uol_Negativo.png' width='280'/>
            <section className={estilos.grupoMenu}>
                <BotaoPage titulo="Página Inicial" focus={true}/>
                <BotaoPage titulo="Meu Perfil" focus={false}/>
                <BotaoPage titulo="Marketplace" focus={false}/>
                <BotaoPage titulo="Sair" focus={false}/>
            </section>
        </section>
    );

}

export default SideMenu;