import  estilos from './EntradaUsuario.module.css';
//import  iconUser from '../../public/icon_user.svg';

const EntradaUsuario = (props) => {

    return (

        <div className={estilos.entrada}>
            <input onChange={props.onChange}  placeholder={props.placeHolder} type={props.tipo} name={props.name}/>
            <img src={props.icone} width={props.tamanho}/>  
        </div>
        
        );

}

export default EntradaUsuario;

/*<div className={estilos.entrada}>
            <input placeholder='Usuário'/>
            <img src='img/svg/icon_user.svg' width='18'/>  
</div>*/