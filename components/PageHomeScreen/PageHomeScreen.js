import { useContext } from 'react';
import SideMenu       from '../SideMenu/SideMenu';
import HeaderMain     from '../HeaderMain/HeaderMain';
import CaixaPostar    from '../CaixaPostar/CaixaPostar';
import Post           from '../Post/Post';
import estilos        from './PageHomeScreen.module.css';
import { Contexto }   from '../../context/context'

const PageHomeScreen = () => {
    let ctx = useContext(Contexto);
    //if(ctx.contexto.secaoLogin)
    return (
        <section className={estilos.homeScreen}>
            <SideMenu/>
            <main className={estilos.mainHomeScreen}>
                <HeaderMain/>
                <section className={estilos.sectionMainHomeScreenTopics}>
                    <section className={estilos.sectionMainHomeScreen}>
                        <CaixaPostar/>
                        <Post/>
                        <Post/>
                    </section>
                    <section className={estilos.mainHomeScreenTopics}>
                        <div>
                            <div></div>
                        </div>
                    </section>
                </section>
            </main>
        </section>
    );
}

export default PageHomeScreen;

/*<h6>A{ctx.contexto.secaoLogin}</h6>
<h6>B{ctx.contexto.idUsuario}</h6>
<h6>C{ctx.contexto.tokenAcesso}</h6>*/