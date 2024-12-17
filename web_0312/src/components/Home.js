import React from 'react';
import '../css/style.css';

function Home(){
        return (
                <main>
                    <section className="main_description">
                        <p id="titulo">Bem-vindo(a) ao nosso site!</p>
                        <p id="descricao">
                            Nós somos à Borcelle Confeitaria, onde a paixão pela doce arte da confeitaria se transforma em experiências únicas! 
                            Nossa missão é criar delícias irresistíveis, feitas com ingredientes frescos e de alta qualidade. 
                            Cada produto é elaborado com carinho, desde os clássicos até as criações exclusivas, para adoçar seus momentos especiais. 
                            Venha descobrir o sabor da tradição e da inovação em cada pedaço!
                        </p>
                    </section>
                    <section className="main_img">
                        <img id="conf_foto" src="../img/img1_conf.jpg" alt="foto confeitaria" />
                    </section>
                </main>
    );
}

export default Home;