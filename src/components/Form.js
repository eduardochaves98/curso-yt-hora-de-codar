import { useState } from "react";

function Form(){
    function cadastrarUsuario(e) {
        e.preventDefault();
        // const nome = e.target[0].value;
        console.log(`Usuario ${name} foi Cadastrado com a senha ${password}!!`)
   
    }

    const [name, setName] = useState([])
    const [password, setPassword] = useState([])

    return(
        <>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input  
                        type="text"
                        id="name"
                        placeholder="Digite seu nome"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input  
                        type="password"
                        id="password"
                        placeholder="Digite a sua senha"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </>
    )
}
export default Form