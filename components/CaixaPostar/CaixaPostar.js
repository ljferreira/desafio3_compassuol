import Botao   from '../Botao/Botao';
import estilos from './CaixaPostar.module.css';

const CaixaPostar = () => {
    return (
        <section className={estilos.sectionCaixaPostar}>
            <section className={estilos.sectionCaixaPostarLinha1}>
                <img src="img/png/user_img.png" width='32'/>
                <input type="text" placeholder='No que você está pensando? '/>
            </section>
            <section className={estilos.sectionCaixaPostarLinha2}>
                <section className={estilos.sectionCaixaPostarLinha2Icons}>
                    <img src="img/svg/icon_camera.svg" width='32'/>
                    <img src="img/svg/icon_picture.svg" width='32'/>
                    <img src="img/svg/icon_clip.svg" width='32'/>
                    <img src="img/svg/icon_location.svg" width='32'/>
                    <img src="img/svg/icon_smile.svg" width='32'/>
                </section>
                <Botao titulo='Postar'/>
            </section>
        </section>
    );
}

export default CaixaPostar;