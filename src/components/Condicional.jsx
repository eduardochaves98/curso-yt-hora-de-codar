import { useState } from "react"

function Condicional() {

    const [email, setEmail] = useState([]);
    const [userEmail, setUserEmail] = useState();

    function enviarEmail(e){
        e.preventDefault();
        setUserEmail(String(email).toLowerCase());
        console.log(`Enviando e-mail para: ${userEmail}`);
    }

    function limparEmail(e){
        e.preventDefault();
        setUserEmail();
        console.log(`Email ${userEmail} Limpo`)
    }

    return(
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input type ="email" placeholder="Insira seu e-mail" onChange={(e) => setEmail(e.target.value)}></input>
                <button type = "submit" onClick={enviarEmail}>Enviar e-mail</button>
                {userEmail && (
                    <div>
                        <p>O e-mail é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar e-mail!!</button>
                    </div>
                )} 
            </form>
            
        </div>
    )
}

export default Condicional