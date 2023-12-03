import  estilos from './Post.module.css';

const Post = ({titulo}) => {

    //const tipoEstilo = {props} == 'Teste' ? estilos.cor : '';

    //return <button className = {tipoEstilo}>{props.titulo}</button>;
    return (
                <section className={estilos.sectionPost}>
                    <section className={estilos.sectionPostHeader}>
                        <section className={estilos.sectionPostHeaderUserDataIconMsg}>
                            <section className={estilos.sectionPostHeaderUserDataIcon}>
                                <img src="img/png/friend_img.png" width='32'/>
                                <section className={estilos.sectionPostHeaderUserData}>
                                    <h5>Patrícia Menezes</h5>
                                    <div>
                                        <img src="img/svg/icon_time.svg" width='10'/>
                                        <h6>12 minutos atrás em <span>Paisagens Exuberantes</span></h6>
                                    </div>
                                </section>
                            </section>
                            <p>Minha última viagem para a Ilha do Comendador, um lugar simplesmente incrível, natureza praticamente intocada. Recomendo a todos que apreciam o mundo como ele é.</p>
                        </section>
                        <img src="img/png/unsplash.png" width='200'/>
                    </section>
                </section>
           );
}

export default Post;