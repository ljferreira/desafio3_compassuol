import SideMenu    from '../SideMenu/SideMenu';
import HeaderMain  from '../HeaderMain/HeaderMain';
import CaixaPostar from '../CaixaPostar/CaixaPostar';
import estilos     from './PageHomeScreen.module.css';

const PageHomeScreen = () => {
    return (
        <section className={estilos.homeScreen}>
            <SideMenu/>
            <main className={estilos.mainHomeScreen}>
                <HeaderMain/>
                <section className={estilos.sectionMainHomeScreen}>
                    <CaixaPostar/>
                </section>
            </main>
        </section>
    );

}

export default PageHomeScreen;