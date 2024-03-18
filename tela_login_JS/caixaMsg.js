class CaixaMsg {
    static cor = null
    static destino = null
    static container = null
    static tipo = null
    static comando = null
    static textos = []

    static mostrar (conf, titulo, texto) {
        this.cor = conf.cor
        this.tipo = conf.tipo
        this.textos = conf.textos
        this.comando = ()=>{conf.comando()}
        this.destino = document.body
        this.titulo = titulo
        this.texto = texto

        // area cinza - tela inteira
        this.container = document.createElement("div");
        const estilo_container = `
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background-color: #373540a8;
            z-index: 9999999; `;

        this.container.setAttribute("style", estilo_container);
        this.container.setAttribute("id", "container");
        this.destino.prepend(this.container)

        // caixa container - fica no centro
        const caixaContainer = document.createElement("div");
        const estilo_caixa = `
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 400px;
            z-index: 9999;
        `
        caixaContainer.setAttribute("style", estilo_caixa)
        this.container.appendChild(caixaContainer)

        // titulo
        const caixaTitulo = document.createElement("div")
        const estilo_titulo = `
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 5px;
            color: #3D314A;
            font-size: 20px;
            background-color: ${this.cor};
            border-radius: 10px 10px 0 0;
            font-weight: bold;
        `
        caixaTitulo.setAttribute("style", estilo_titulo)
        caixaTitulo.innerHTML = this.titulo
        caixaContainer.appendChild(caixaTitulo)

        // corpo
        const caixaCorpo = document.createElement("div")
        const estilo_corpo = `
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 200px;
            padding: 10px;
            color: #3D314A;
            font-size: 20px;
            background-color: ${this.cor};
            font-weight: bold;
            border-top: 1px solid #373540a8;
        `
        const img = document.createElement("img")
        const estilo_img = `
            width: 150px;
            border-radius: 10px;
        `
        img.setAttribute("src", "stop.jpg")
        img.setAttribute("style", estilo_img)
        caixaCorpo.appendChild(img)
        caixaCorpo.setAttribute("style", estilo_corpo)
        caixaContainer.appendChild(caixaCorpo)

        // legenda
        const caixaTexto = document.createElement("div")
        const estilo_texto = `
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 5px;
            color: #3D314A;
            font-size: 20px;
            background-color: ${this.cor};
            font-weight: bold;
            border-top: 1px solid #373540a8;
        `
        caixaTexto.setAttribute("style", estilo_texto)
        caixaTexto.innerHTML = this.texto
        caixaContainer.appendChild(caixaTexto)

        const rodape = document.createElement("div")
        const estilo_rodape = `
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            background-color: ${this.cor};
            border-top: 1px solid #373540a8;
            padding: 10px 20px;
        `

        rodape.setAttribute("style", estilo_rodape)
        caixaContainer.appendChild(rodape)
        
        const estilo_btn = `
            color: #3D314A;
            font-size: 15px;
            font-weight: bold;
            border: 2px solid #3D314A;
            margin: 2px;
            background-color: transparent;
        `

        const estilo_link = `
            color: #3D314A;
            font-size: 15px;
            font-weight: bold;
            text-decoration: none;
        `

        if (this.tipo == 1) {
            const botao = document.createElement("button")
            botao.setAttribute("style", estilo_btn)
            botao.setAttribute("class", "btn_rodape")
            botao.innerHTML = this.textos[0]
            botao.addEventListener("click", (eve)=> {
                this.comando()
                this.ocultar()
            })
            rodape.appendChild(botao)

        }else if (this.tipo == 2) {
            const botaoA = document.createElement("button")
            botaoA.setAttribute("style", estilo_btn)
            botaoA.setAttribute("class", "btn_rodape")

            const link = document.createElement("a")
            link.setAttribute("style", estilo_link)
            link.setAttribute("href", "https://store.steampowered.com/app/420530/OneShot/")
            link.setAttribute("target", "_blank")
            link.innerHTML = this.textos[0]
            link.addEventListener("click", (eve)=> {
                this.comando()
                this.ocultar()
            })

            const botaoB = document.createElement("button")
            botaoB.setAttribute("style", estilo_btn)
            botaoB.setAttribute("class", "btn_rodape")
            botaoB.innerHTML = this.textos[1]
            botaoB.addEventListener("click", (eve)=> {
                this.comando()
                this.ocultar()
            })
            botaoA.appendChild(link)
            rodape.append(botaoA, botaoB)
        }
    }

    static ocultar =()=> {
        this.container.remove()
    }
}

export {CaixaMsg}