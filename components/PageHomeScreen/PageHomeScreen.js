import SideMenu    from '../SideMenu/SideMenu';
import HeaderMain  from '../HeaderMain/HeaderMain';
import CaixaPostar from '../CaixaPostar/CaixaPostar';
import Post        from '../Post/Post';
import estilos     from './PageHomeScreen.module.css';

const PageHomeScreen = () => {
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
                            <div>Accordion</div>
                        </div>
                    </section>
                </section>
            </main>
        </section>
    );
}

export default PageHomeScreen;