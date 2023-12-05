import {useState}     from 'react';
import {Contexto}     from '../context/context'
import {useRouter}    from 'next/router';///

import PageLogin      from '../components/PageLogin/PageLogin';
import PageCadastro   from '../components/PageCadastro/PageCadastro';
import PageHomeScreen from '../components/PageHomeScreen/PageHomeScreen';

const main =  () => {

    const [contexto, setContexto] = useState({
                                                secaoLogin: 'true', 
                                                idUsuario: '', 
                                                tokenAcesso: ''
                                            });
    const router = useRouter();

    let handlerContexto = (itemContexto, dadoContexto) => {

        setContexto((dadosCtxAnterior) => ({...dadosCtxAnterior, [itemContexto]:dadoContexto}));

    }

    const ctxAcessoConf = {contexto, handlerContexto};

    /*const handlerContexto = (dadoContexto) => {

        setContexto((dadosCtxAnterior) => ({...dadosCtxAnterior, dadoContexto}));

    }*/

    if(router.query.page === "compasssocial" || router.query.page === "login")
        return  (
            <Contexto.Provider value={ctxAcessoConf}>  
                <PageLogin/>
            </Contexto.Provider>
        );
    else if(router.query.page === "cadastro")
        return  (
            <Contexto.Provider value={ctxAcessoConf}>  
                <PageCadastro/>
            </Contexto.Provider>
        );
    else if(router.query.page === "homescreen")
        return  (
            <Contexto.Provider value={ctxAcessoConf}>  
                <PageHomeScreen/>
            </Contexto.Provider>
        );

}

export default main;

//return  <PageLogin/>

/*let nome = process.env.NEXT_PUBLIC_NOME;
    let tipo = process.env.TIPO;
    console.log(nome);
    console.log(tipo);*/

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