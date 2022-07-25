import React from 'react';


export default function PG2func(
    {R,P,index,resposta,setResposta,cardsResp,setCardsResp,icon,setIcon,}){

    const [turn, setTurn] = React.useState(0);
    function respCartas(element){
        setResposta([...resposta, element])
        if(element==='incorreto'){
            setTurn(4);
            setIcon([...icon, <ion-icon name="close-circle-outline"></ion-icon>])
        } else if(element==='correto'){
            setTurn(5);
            setIcon([...icon,  <ion-icon name="checkmark-circle-outline"></ion-icon>])
        } else{
            setTurn(6);
            setIcon([...icon, <ion-icon name="help-circle-outline"></ion-icon>])
        }
        setCardsResp(cardsResp + 1);
    }
    if(turn===0){
        return (
            <>
            <div class='question2'>
                <p>{P}</p>
                <ion-icon name="arrow-redo-outline" onClick={() => setTurn(1)}></ion-icon>
            </div>
            
            </>
        )
    }
    if(turn===1){
        return(
            <>
            <div class='question3'>
                <p >{R}</p>
                <div class='opcoes'>
                    <div
                        class='Nao'
                        onClick={() => respCartas('incorreto')}>
                        Não me lembro
                    </div>
                    <div
                        class='Quase'
                        onClick={() => respCartas('correto')}>
                        Quase não me lembro
                    </div>
                    <div
                        class='Zap'
                        onClick={() => respCartas('zap')}>
                        Zap!
                    </div>
                </div>
            </div>
            </>
        );
    }
    if(turn===4){
        let x = []
        x = [...x,<ion-icon name="close-circle-outline"></ion-icon>]
        return(
            <>
            <div class='respondido'>
                    <p>Pergunta {index + 1}</p>
                    <ion-icon class='Nao' name="close-circle-outline"></ion-icon>
            </div>
            </>
        )
    }
    if(turn===5){
        return(
            <>
            <div class='respondido'>
                    <p>Pergunta {index + 1}</p>
                    <ion-icon class='Quase' name="help-circle-outline"></ion-icon>
            </div>
            </>
        )
    }
    if(turn===6){
        return(
            <>
            <div class='respondido'>
                    <p>Pergunta {index + 1}</p>
                    <ion-icon class='Zap' name="checkmark-circle-outline"></ion-icon>
            </div>
            </>
        )
    }
}