import React from "react"

const apistories = [
    {imagem: "assets/img/9gag.svg", usuario: "9gag"},
    {imagem: "assets/img/meowed.svg", usuario: "meowed"},
    {imagem: "assets/img/barked.svg", usuario: "barked"},
    {imagem: "assets/img/nathanwpylestrangeplanet.svg", usuario: "nathanwpylestrangeplanet"},
    {imagem: "assets/img/wawawicomics.svg", usuario: "wawawicomics"},
    {imagem: "assets/img/respondeai.svg", usuario: "respondeai"},
    {imagem: "assets/img/filomoderna.svg", usuario: "filomoderna"},
    {imagem: "assets/img/memeriagourmet.svg", usuario: "memeriagourmet"}
];

const apiposts = [
    {imagemDoUsuario: "assets/img/meowed.svg",
    usuario: "meowed", 
    imagemPost:"assets/img/gato-telefone.svg", 
    usuaLikeImg:"assets/img/respondeai.svg", 
    usuaLike:"respondeai",
    numeroDeLike:"101.523"},
    
    {imagemDoUsuario: "assets/img/barked.svg",
    usuario: "barked", 
    imagemPost:"assets/img/dog.svg", 
    usuaLikeImg:"assets/img/adorable_animals.svg", 
    usuaLike:"adorable_animals",
    numeroDeLike:"99.468"}
];

function Story(props){
    return(
        <div class="story">
              <div class="imagem">
                <img src={props.imagem} />
              </div>
              <div class="usuario">
                {props.usuario}
              </div>
            </div>
    );
}

function Post(props){

  const [icone, setIcone] = React.useState("heart-outline");
  const [cor, setCor] = React.useState("")
  function curtir(){
    if (icone === "heart-outline"){
      return setIcone("heart-sharp"),setCor("color: Crimson;"); 
    }else 
    setIcone("heart-outline")
    setCor(" ");
  }


    return(
        <div class="post">
              <div class="topo">
                <div class="usuario">
                  <img src={props.imagemDoUsuario} />
                  {props.usuario}
                </div>
                <div class="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>

              <div class="conteudo">
                <img onDoubleClick={curtir} src={props.imagemPost} />
              </div>

              <div class="fundo">
                <div class="acoes">
                  <div>
                    <ion-icon Style={cor} onClick={curtir} name={icone}></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
                </div>

                <div class="curtidas">
                  <img src={props.usuaLikeImg} />
                  <div class="texto">
                    Curtido por <strong>{props.usuaLike}</strong> e <strong>{props.numeroDeLike}</strong>
                  </div>
                </div>
              </div>
            </div>
    );
}

function Esquerda(){
    
    return(
        <div class="esquerda">
          <div class="stories">
            {apistories.map((value)=> (
                <Story
                imagem = {value.imagem}
                usuario = {value.usuario}
                />
            ))};
            
            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
          </div>

          <div class="posts">
            {apiposts.map((value)=>(
                <Post
                imagemDoUsuario = {value.imagemDoUsuario}
                usuario = {value.usuario}
                imagemPost = {value.imagemPost}
                usuaLike = {value.usuaLike}
                usuaLikeImg = {value.usuaLikeImg}
                numeroDeLike = {value.numeroDeLike}
                />
            ))}

          </div>
        </div>
    );
}

export default Esquerda;