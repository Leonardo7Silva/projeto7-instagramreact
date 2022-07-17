import React from "react"

const apiusuario = [{
    imgUsuario: "assets/img/catanacomics.svg",
    usuario: "catanacomics",
    nick: "Catana"
}];

const sugestoes = [
    {usuario: "bad.vibes.memes",
    imgUsuario: "assets/img/bad.vibes.memes.svg",
    estado: "Segue você",
    estado2: "Seguir"},

    {usuario: "chibirdart",
    imgUsuario: "assets/img/chibirdart.svg",
    estado: "Segue você",
    estado2: "Seguir"},

    {usuario: "razoesparaacreditar",
    imgUsuario: "assets/img/razoesparaacreditar.svg",
    estado: "Novo no Instagram",
    estado2: "Seguir"},

    {usuario: "adorable_animals",
    imgUsuario: "assets/img/adorable_animals.svg",
    estado: "Segue você",
    estado2: "Seguir"},

    {usuario: "smallcutecats",
    imgUsuario: "assets/img/smallcutecats.svg",
    estado: "Segue você",
    estado2: "Seguir"}

]

function SideBar() {

  function Sugestao(props){
    return(
        <div class="sugestao">
        <div class="usuario">
          <img src= {props.imgUsuario} />
          <div class="texto">
            <div class="nome">{props.usuario}</div>
            <div class="razao">{props.estado}</div>
          </div>
        </div>

        <div class="seguir">{props.estado2}</div>
      </div>
    );
}

    return(
        <div class="sidebar">
          <div class="usuario">
            <img src= {apiusuario[0].imgUsuario} />
            <div class="texto">
              <strong>{apiusuario[0].usuario}</strong>
              {apiusuario[0].nick}
            </div>
          </div>

          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

            {sugestoes.map((value)=>(
                <Sugestao
                    usuario={value.usuario}
                    imgUsuario = {value.imgUsuario}
                    estado = {value.estado}
                    estado2 = {value.estado2}
                />
            ))}
          </div>

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>

    );
}

export default SideBar;