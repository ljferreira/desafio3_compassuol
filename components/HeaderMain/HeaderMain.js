import  estilos from './HeaderMain.module.css';

const HeaderMain = () => {
    return (
        <header className={estilos.headerMain}>
            <section className={estilos.logo}>
                <img src='img/png/button_post_left.png'/>
                SocialCompass
            </section>
            <section className={estilos.frameRight}>
                <img src='img/svg/icon_globehemisphereeast.svg'/>
                <img src='img/svg/icon_bell.svg'/>
                Eduarda Pereira
                <img src='img/png/user_img.png'/>
            </section>
        </header>
    );
}

export default HeaderMain;