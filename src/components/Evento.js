import Button from "./evento/Button";

function Evento() {
    function myEvent(e) {
        const aleatorio = Math.random();
        if (aleatorio*10 > 5){

            console.log(`Fui ativado ${e.target.innerHTML}`)
        }else {
            alert(`Fui ativado ${e.target.innerHTML}`)
        }

    }

    return(
        <>
        <p>Clique para disparar um evento Misterioso:</p>
        <Button event={myEvent} text="Primeiro Evento"/>
        <Button event={myEvent} text="Segundo Evento"/>
        </>
    )
}

export default Evento