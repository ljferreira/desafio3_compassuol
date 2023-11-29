import  estilos from './BotaoPage.module.css';

const BotaoPage = (props) => {
    //(props.focus ? estilos.botaoPageFocus : estilos.botaoPage)
    //return <button className = {estilos.botaoPageFocus}>{props.titulo}</button>;
    return <button className = {(props.focus ? estilos.botaoPageFocus : estilos.botaoPage)}>{props.titulo}</button>;

}

export default BotaoPage;