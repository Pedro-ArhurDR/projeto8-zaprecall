export default PG1


function PG1(){

  function start(){
    console.log('OLA')
  }

    return (
        <div class="PG1">
           <img src="images/logo.png" alt=""/>
           <h1>ZapRecall</h1>
           <div class="start" onClick={start}>
            Iniciar Recall!
          </div>
        </div>
    )

    
}