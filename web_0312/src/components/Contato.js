import React from 'react';
import '../css/style.css';


function Contato() {
    return (
            <main>
                <section className="form">
                    <form action="" method="post">
                        <fieldset>
                            <legend>Contato</legend>
                            <label htmlFor="fnome">Nome:</label>
                            <input type="text" name="nome" id="fnome" /><br />
                            <label htmlFor="telefone">Telefone:</label>
                            <input type="text" name="telefone" id="telefone" /><br />
                            <label htmlFor="email">E-mail:</label>
                            <input type="email" name="email" id="email" /><br />
                            <label htmlFor="mensagem">Insira sua mensagem:</label>
                            <textarea name="mensagem" id="mensagem" rows="3" cols="40"></textarea><br />
                            <br />
                            <button type="button">Enviar</button>
                        </fieldset>
                    </form>
                </section>
    
                <section className="mapa">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.4528435617863!2d-49.28904242377816!3d-25.42311967756622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce3d3c87c813f%3A0x71018f688c83c652!2sSPACE%20CAT%20coffee!5e0!3m2!1spt-BR!2sbr!4v1732026336397!5m2!1spt-BR!2sbr"
                        ></iframe>
            </section>
        </main>
    );
} 
export default Contato;