function Form(){
    function cadastrarUsuario(e) {
        e.preventDefault();
        const nome = e.target[0].value;
        console.log(`Usuario ${nome} Cadastrado!!`)
    }

    return(
        <>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite seu nome"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </>
    )
}
export default Form