class Login {
    static logado = false;
    static matLogado = null;
    static nomeLogado = null;
    static acessoLogado = null;
    static cssStyle = null;
    static callback_ok = null;
    static callback_notok = null;
    static config = {
      cor1: "162938",
      cor2: "75428aad"
    }
    static endpoint = 'https://a124f571-7d19-4945-9d08-0c7ef9a3a60d-00-34tsr7j3lg8q.janeway.replit.dev/';

    static login =(callback_ok, callback_notok, config = null)=> {
        if (config != null) {
          this.config = config;
        }
        this.callback_ok =()=>{callback_ok()};
        this.callback_notok =()=>{callback_notok()};
        // this.endpoint += `?matricula=${mat}&senha=${pas}`
        this.cssStyle = 
        `
        .fundoLogin {position: absolute;top: 8em;width: 400px;height: 440px;background: transparent;border: 2px solid rgba(255, 255, 255, 0.5);border-radius: 20px;backdrop-filter: blur(20px);box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);display: flex;justify-content: center;align-items: center;overflow: hidden;}
        .fundoLogin .icon-fechar {position: absolute;top: 0;right: 0;width: 45px;height: 45px;background: #${this.config.cor1};display: flex;justify-content: center;align-items: center;text-align: center;border-bottom-left-radius: 20px;cursor: pointer;z-index: 1;}
        .fundoLogin .icon-fechar:hover {background: #${this.config.cor2};}
        .fundoLogin .baseLogin {width: 100%;padding: 40px;}
        .baseLogin h2 {font-size: 2em;color: #${this.config.cor1};text-align: center;}
        .campoLogin {position: relative;width: 100%;height: 50px;border-bottom: 2px solid #${this.config.cor1};margin: 30px 0;}
        .campoLogin label {position: absolute;top: 50%;left: 5px;transform: translateY(-50%);font-size: 1em;color: #${this.config.cor1};font-weight: 500;pointer-events: none;transition: 0.5s;}
        .campoLogin input:focus~label,.campoLogin input:valid~label {top: -5px;}
        .campoLogin input {width: 100%;height: 100%;border: none;outline: none;background: transparent;font-size: 1em;color: #${this.config.cor1};font-weight: 600;padding: 0 35px 0 5px;}
        .campoLogin .icon img {position: absolute;right: 8px;bottom: 10px;}
        .salvar_esqueceu {font-size: 0.9em;color: #${this.config.cor1};font-weight: 500;margin: -15px 0 15px;display: flex;justify-content: space-between;}
        .salvar_esqueceu label input {accent-color: #${this.config.cor1};margin-right: 3px;}
        .salvar_esqueceu a {color: #${this.config.cor1};text-decoration: none;}
        .salvar_esqueceu a:hover {text-decoration: underline;}
        .btnLogin {display: flex;justify-content: space-between;align-items: center;}
        .btnLogin button {width: 100%;height: 45px;margin: 0 1px;background: #${this.config.cor1};border: none;outline: none;border-radius: 10px;cursor: pointer;font-size: 1em;color: #fff;font-weight: 500;}
        .btnLogin button:hover {background: #${this.config.cor2};}
        .registrar {font-size: 0.9em;color: #${this.config.cor1};text-align: center;font-weight: 500;margin: 25px 0 10px;}
        .registrar p a {color: #${this.config.cor1};text-decoration: none;font-weight: 600;margin-left: 2px;}
        .registrar p a:hover{text-decoration: underline;}
        `
        const estilo = document.createElement("style");
        estilo.setAttribute("id", "id_estilo");
        estilo.setAttribute("rel", "stylesheet");
        estilo.innerHTML = this.cssStyle;
        document.head.appendChild(estilo);

        // --------------------------------------x

        const fundoLogin = document.createElement("div")
        fundoLogin.setAttribute("id", "fundoLogin")
        fundoLogin.setAttribute("class", "fundoLogin")
        document.body.appendChild(fundoLogin)

        const spanIcoFechar = document.createElement("span")
        spanIcoFechar.setAttribute("class", "icon-fechar")
        // fechar janela de login
        spanIcoFechar.addEventListener("click", (eve)=> {
          this.fechar()
        })
        const imgIcoFechar = document.createElement("img")
        imgIcoFechar.setAttribute("src", "excluir-30.png")
        spanIcoFechar.append(imgIcoFechar)
        fundoLogin.append(spanIcoFechar)

        const baseLogin = document.createElement("div")
        baseLogin.setAttribute("id", "baseLogin")
        baseLogin.setAttribute("class", "baseLogin")
        fundoLogin.append(baseLogin)

        const titulo = document.createElement("h2")
        titulo.innerHTML = 'Login';
        baseLogin.append(titulo)

        const form = document.createElement("form")
        form.setAttribute("action", "#")
        baseLogin.append(form)

        const campoLogin1 = document.createElement("div")
        campoLogin1.setAttribute("class", "campoLogin")
        form.append(campoLogin1)

        const spanIconUser = document.createElement("span")
        spanIconUser.setAttribute("class", "icon")
        const imgIcoUser = document.createElement("img")
        imgIcoUser.setAttribute("src", "user-30.png")
        spanIconUser.append(imgIcoUser)
        campoLogin1.append(spanIconUser)

        const inputUser = document.createElement("input")
        inputUser.setAttribute("type", "text")
        inputUser.setAttribute("name", "f_username")
        inputUser.setAttribute("id", "f_username")
        inputUser.setAttribute("required", "required")
        campoLogin1.append(inputUser)

        const labelUser = document.createElement("label")
        labelUser.innerHTML = "Usuário";
        campoLogin1.append(labelUser)

        const campoLogin2 = document.createElement("div")
        campoLogin2.setAttribute("class", "campoLogin")
        form.append(campoLogin2)

        const spanIconPass = document.createElement("span")
        spanIconPass.setAttribute("class", "icon")
        const imgIcoPass = document.createElement("img")
        imgIcoPass.setAttribute("src", "senha-30.png")
        spanIconPass.append(imgIcoPass)
        campoLogin2.append(spanIconPass)

        const inputPass = document.createElement("input")
        inputPass.setAttribute("type", "password")
        inputPass.setAttribute("name", "f_password")
        inputPass.setAttribute("id", "f_password")
        inputPass.setAttribute("required", "required")
        campoLogin2.append(inputPass)

        const labelPass = document.createElement("label")
        labelPass.innerHTML = "Senha";
        campoLogin2.append(labelPass)

        const salvar_esqueceu = document.createElement("div")
        salvar_esqueceu.setAttribute("class", "salvar_esqueceu")
        form.append(salvar_esqueceu)

        const label = document.createElement("label")
        salvar_esqueceu.append(label)
        const input = document.createElement("input")
        input.setAttribute("type", "checkbox")
        label.append(input, "Salvar Senha")

        const link = document.createElement("a")
        link.setAttribute("href", "#")
        link.innerHTML = "Esqueceu a senha?"
        salvar_esqueceu.append(link)

        const btnLogin = document.createElement("div")
        btnLogin.setAttribute("class", "btnLogin")
        form.append(btnLogin)

        const btn_enviar = document.createElement("button")
        btn_enviar.setAttribute("type", "submit")
        btn_enviar.setAttribute("class", "btn_enviar")
        btn_enviar.innerHTML = "Login"
        btn_enviar.addEventListener("click", (eve)=> {
          this.verificarLogin()
        })
        btnLogin.append(btn_enviar)

        const registrar = document.createElement("div")
        registrar.setAttribute("class", "registrar")
        form.append(registrar)

        const paragrafo = document.createElement("p")
        const linkParagrafo = document.createElement("a")
        linkParagrafo.setAttribute("href", "#")
        linkParagrafo.setAttribute("class", "link-registrar")
        linkParagrafo.innerHTML = "Registrar"
        paragrafo.append("Não tem uma conta?",linkParagrafo)
        registrar.append(paragrafo)

    }

    static verificarLogin =()=> {
      const mat = document.getElementById("f_username").value;
      const pas = document.getElementById("f_password").value;
      const endpoint = `https://a124f571-7d19-4945-9d08-0c7ef9a3a60d-00-34tsr7j3lg8q.janeway.replit.dev/?matricula=${mat}&senha=${pas}`;

      fetch(endpoint)
      .then(res=>res.json())
      .then(res=>{
        if(res) {
          this.logado = true;
          this.matLogado = mat;
          this.nomeLogado = res.nome;
          this.acessoLogado = res.acesso;
          this.callback_ok();
          this.fechar();
        }else{
          this.logado = false;
          this.matLogado = null;
          this.nomeLogado = null;
          this.acessoLogado = null;
          this.callback_notok();
        }
      })


    }

    static fechar =()=> {
      const fundoLogin = document.getElementById("fundoLogin")
      fundoLogin.remove();
      const id_estilo = document.getElementById("id_estilo")
      id_estilo.remove();
    }
}

// export {Login};



/*
var http = require('http');
var url = require('url');

http.createServer(function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.writeHead(200, {'Content-Type': 'application/json'});

  let parametros = url.parse(req.url, true);

  let mat = parametros.query.matricula;
  let pas = parametros.query.senha;

  let dados = null;

  if (mat == '123' && pas == '321') {
    dados = {
      nome: 'Julia',
      acesso: '10'
    }
  }

  res.end(JSON.stringify(dados));
}).listen(8080);
*/