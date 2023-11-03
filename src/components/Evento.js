function Evento() {
    function myEvent() {
        const aleatorio = Math.random();
        if (aleatorio*10 > 5){
            console.log('Fui ativado')
        }else {
            alert('Fui ativado')
        }

    }

    return(
        <>
        <p>Clique para disparar um evento Misterioso:</p>
        <button onClick={myEvent}>Ativar!</button>
        </>
    )
}

export default Evento