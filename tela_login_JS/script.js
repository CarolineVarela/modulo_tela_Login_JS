// import {Login} from './login.js';
import {CaixaMsg} from './caixaMsg.js'


const callback_ok=()=>{}

const callback_notok=()=>{
    const config = {
        cor: "#b87f7f",
        tipo: 1,
        textos: null,
        comando: null
    }
    CaixaMsg.mostrar(config, "ERRO", "Login não efetuado!<br/> Senha ou Usuário incorreto.")
}

const confLogin = {
    cor1: "162938",
    cor2: "75428aad",
    endpoint: 'https://a124f571-7d19-4945-9d08-0c7ef9a3a60d-00-34tsr7j3lg8q.janeway.replit.dev'

}

Login.login(callback_ok, callback_notok, confLogin);
