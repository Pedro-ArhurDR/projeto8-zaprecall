import React from "react"
import PG2func from "../PG2/PG2func"
import Topo from '../PG2/Topo'




let Cartas = [
  <div class='question'>
      <div>Pergunta 1</div>
      <ion-icon name="play-outline"></ion-icon>

  </div>,
  <div class='question'>
      <div>Pergunta 2</div>
      <ion-icon name="play-outline"></ion-icon>
  </div>,
  <div class='question'>
      <div>Pergunta 3</div>
      <ion-icon name="play-outline"></ion-icon>
  </div>,
  <div class='question'>
      <div>Pergunta 4</div>
      <ion-icon name="play-outline"></ion-icon>
  </div>,
];


export default function PG2(){
    const[cards, setCards]= React.useState(0)
    const[cardsResp, setCardsResp] = React.useState(0)
    const[resposta, setResposta]= React.useState([])
    const[icon , setIcon]= React.useState([])
    if(cards===0){
      return(
        <>
          <Topo/>
        {Cartas.map((element, index)=>
        (<div class='questions' onClick={(This) => setCards(1)}>
                          {element}
        </div>))}
  
        </>
      )
    }

    if(cards===1){
      return(
        <>  <Topo/>
            {Perguntas.map((element, index) => (
              <div class='questions'>
                <PG2func
                index={index}
                R={Perguntas[index].R}
                 P={Perguntas[index].P}
                 Id={Perguntas[index].Id}
                 resposta={resposta}
                 setResposta={setResposta}
                icon={icon}
                setIcon={setIcon}
                 cardsResp={cardsResp}
                 setCardsResp={setCardsResp}
                />
              </div>
             ))}
        </>
      )
    }
}




let Perguntas=[
  {
    P:'O que é JSX?',
    R:'Uma extensão de linguagem do JavaScript',
    Id:1,
    Img:<img src="images/setinha.png" />,
  },

  {
    P:'O React é __',
    R:'uma biblioteca JavaScript para construção de interfaces',
    Id:2,
    Img:<img src="images/setinha.png" />,
  },

  {
    P:'Componentes devem iniciar com __',
    R:'letra maiúscula',
    Id:3,
    Img:<img src="images/setinha.png" />,
  },

  {
    P:'Podemos colocar __ dentro do JSX',
    R:'expressões',
    Id:4,
    Img:<img src="images/setinha.png" />,
  },

  {
    P:'O ReactDOM nos ajuda __',
    R:'interagindo com a DOM para colocar componentes React na mesma',
    Id:5,
    Img:<img src="images/setinha.png" />,
  },

  {
    P:'Usamos o npm para __',
    R:'gerenciar os pacotes necessários e suas dependências',
    Id:6,
    Img:<img src="images/setinha.png" />,
  },

  {
    P:'Usamos props para __ ',
    R:'passar diferentes informações para componentes ',
    Id:7,
    Img:<img src="images/setinha.png" />,
  },

  {
    P:'Usamos estado (state) para __',
    R:'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente',
    Id:8,
    Img:<img src="images/setinha.png" />,
  },

]


/*
1. **Q:** O que é JSX? **R:** Uma extensão de linguagem do JavaScript
2. **Q:** O React é __ **R:** uma biblioteca JavaScript para construção de interfaces
3. **Q:** Componentes devem iniciar com __ **R:** letra maiúscula
4. **Q:** Podemos colocar __ dentro do JSX **R:** expressões
5. **Q:** O ReactDOM nos ajuda __ **R:** interagindo com a DOM para colocar componentes React na mesma
6. **Q:** Usamos o npm para __ **R:** gerenciar os pacotes necessários e suas dependências
7. **Q:** Usamos props para __ **R:** passar diferentes informações para componentes 
8. **Q:** Usamos estado (state) para __ **R:** dizer para o React quais informações quando atualizadas devem renderizar a tela novamente
*/