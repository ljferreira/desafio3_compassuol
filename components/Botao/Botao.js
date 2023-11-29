import  estilos from './Botao.module.css';

const Botao = (props) => {

    //const tipoEstilo = {props} == 'Teste' ? estilos.cor : '';

    //return <button className = {tipoEstilo}>{props.titulo}</button>;
    return <button className = {estilos.botaoLogin}>{props.titulo}</button>;


}

export default Botao;