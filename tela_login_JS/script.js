import {Login} from './login.js';
import {CaixaMsg} from './caixaMsg.js'


const callback_ok=()=>{
    
}

const callback_notok=()=>{
    const config = {
        cor: "#b87f7f",
        tipo: 1,
        textos: null,
        comando: null
    }
    CaixaMsg.mostrar(config, "ERRO", "Login não efetuado!<br/> Senha ou Usuário incorreto.")
}

Login.login(callback_ok, callback_notok);
