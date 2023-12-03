//import {useState} from 'react';
import axios from 'axios';
//import httpLogin from '../components/TesteAPI/testeAPI'

import PageLogin from '../components/PageLogin/PageLogin';

const main =  () => {

    //const [resposta, setRespota] = useState({id:'', token:''});
    
    /*const handlerResposta = (response) => { 
        console.log("ID: ",response.user.id);
        console.log("TOKEN: ",response.token);
        handlerGetByID(response);
    }
            
    axios.post('https://social-compass-server.onrender.com/auth/login', {
        username: 'ljf2023',
        password: "teste"
    })
    .then(function (response) {
        handlerResposta(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
    
    const handlerGetByID = (dados) => {
        axios.get(`https://social-compass-server.onrender.com/users/${dados.user.id}`, 
        {   method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${dados.token}`
        }
    }).then((resposta) => console.log(resposta)).catch((erro) => console.log(erro));}*/

    return  <PageLogin/>
}

export default main;

/*let nome = process.env.NEXT_PUBLIC_NOME;
    let tipo = process.env.TIPO;
    console.log(nome);
    console.log(tipo);*/