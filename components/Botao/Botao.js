import  estilos from './Botao.module.css';

const Botao = ({titulo, onClick}) => {

    //const tipoEstilo = {props} == 'Teste' ? estilos.cor : '';

    //return <button className = {tipoEstilo}>{props.titulo}</button>;
    return <button onClick={onClick} className = {
                                  (titulo === 'Postar') ? estilos.botaoPostar 
                                                        : estilos.botaoLogin
                               }>{titulo}
           </button>;


}

export default Botao;