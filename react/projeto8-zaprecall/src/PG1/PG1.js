import React from "react";
export default PG1


function PG1({setVisible}){

  function start(){
    console.log('OLA')
  }

    return (
        <div class="PG1">
           <img src="images/logo.png" alt=""/>
           <h1>ZapRecall</h1>
           <div class="start" onClick={()=>setVisible(true)}>
            Iniciar Recall!
          </div>
        </div>
    )

    
}