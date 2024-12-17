import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';
function Redes(){
return (
    <main className='footer'>
      <section className="contato">
        <p>Borcelle Confeitaria</p>
        <p id="dois">Rua das Rosas, 1586, Pontal - Paraná/PR</p>
        <p>Telefone: (42) 3241-4738</p>
        <p>Whatsapp: (42) 99875-3823</p>
        <p>E-mail: contato@borcelleconfeitaria.com.br</p>
      </section>
      <section className="icones_redes">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img id="icone_rede" src="./img/instagram.png" alt="logo instagram" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <img id="icone_rede" src="./img/youtube.png" alt="logo youtube" />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <img id="icone_rede" src="./img/facebook.png" alt="logo facebook" />
        </a>
      </section>
    </main>
  );
}
export default Redes;