import React from 'react';
import '../css/style.css';

function Galeria() {
    return (
      <main>
        <div className="galeria">
          <section>
            <p id="titulo-galery">Galeria</p>
          </section>
          <section className="main-fotos">
            <div className="foto-item">
              <img id="fotogaleria" src="./img.foto 1.jpeg" alt="Doces finos para Casamento" />
              </div>
            <div className="foto-item">
              <img id="fotogaleria" src="./img/foto2.jpg" alt="Bolo Decorado de Framboesa" />
            </div>
            <div className="foto-item">
              <img id="fotogaleria" src="./img/foto3.webp" alt="Bolos da Vitrine" />
            </div>
            <div className="foto-item">
              <img id="fotogaleria" src="./img/foto4.webp" alt="Cupcakes" />
            </div>
            <div className="foto-item">
              <img id="fotogaleria" src="./img/foto5.webp" alt="Tortinhas de Framboesa e Banana" />
            </div>
            <div className="foto-item">
              <img id="fotogaleria" src="./img/foto6.jpg" alt="Mini Sobremesas de Festa" />
            </div>
            <div className="foto-item">
              <img id="fotogaleria" src="./img/foto7.jpg" alt="Doces de Festa" />
            </div>
            <div className="foto-item">
              <img id="fotogaleria" src="./img/foto8.jpg" alt="Bolo Decorado de Morango" />
            </div>
            <div className="foto-item">
              <img id="fotogaleria" src="./img/foto9.jpeg" alt="Doces Finos de Morango" />
            </div>
            <div className="foto-item">
              <img id="fotogaleria" src="./img/foto10.jpg" alt="Bolos e Tortas" />
            </div>
          </section>
        </div>
      </main>
    );
  }
  
export default Galeria;