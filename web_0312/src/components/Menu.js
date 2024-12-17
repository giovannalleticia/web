import React from 'react'
import { Link } from 'react-router-dom';
import '../css/style.css';
function Menu(){
    return(
        <header>
        <section className="cabecalho">
            <img id="logo" src="img/logo.webp" alt="logo confeitaria"></img>
            <p id="nome">Borcelle Confeitaria</p>
        </section>
        <nav id="itens">
                <Link to="/Home">Home</Link>
                <Link to="/Sobre">História</Link>
                <Link to="/Galeria">Galeria</Link>
                <Link to="/Contato">Contato</Link>
            </nav>
    </header>
    );
}
export default Menu;