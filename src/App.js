/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import logo from './logo.svg';
import linkedin from "../src/icon/linkedin-sign.png"
import facebook from "../src/icon/facebook-logo.png"
import github from "../src/icon/github-sign.png"
import download from "../src/icon/archive.png"
import instagram from "../src/icon/instagram.png"
import './App.css';

class App extends Component {
    render() {
        return <div className="App">
            <header className="App-header">
              {/* Minha Imagem */}
              <img src="https://scontent.fplu9-2.fna.fbcdn.net/v/t1.0-9/26166360_1143774309091022_3246020457323943336_n.jpg?_nc_cat=105&_nc_ht=scontent.fplu9-2.fna&oh=4f7df3faebdfb6bb469946a9837b59fd&oe=5C481747" className="img-me" align-content="" title="Vinicius Andrade Lopes" />

              <h1 className="cor-titulo">
                &lt;!--
                <span className="titulo"> Vinícius Andrade Lopes </span>
                --&gt; {/* &lt; = < | &gt; = >*/}
              </h1>

              <br />

              <p className="cor-texto">
                &#123;/*&nbsp;
                <span className="texto">
                  Tenho 24 anos, sou estudante do curso de Sistemas de
                  Informação e fanático por tecnologia,
                </span>
                <br />
                <span className="texto">
                  procuro me desenvolver profissionalmente na área de TI
                  com a finalidade de alcançar meus objetivos e
                </span>
                <br />
                <span className="texto">
                  contribuir para o bom desempenho da empresa.
                </span>
                &nbsp;*/&#125;
              </p>

              {/* Footer dos Icones */}
              {/* target=blank abre a página em outra aba*/}
              <div className="footer-icon">

                <a href="https://www.linkedin.com/in/vinicius-andrade-lopes/" target="_blank">
                  <img src={linkedin} className="icons" />
                </a>

                &nbsp;&nbsp; {/* &nbsp; - Espaçamento */}
                <a href="https://github.com/viniciusanl" target="_blank">
                  <img src={github} className="icons" />
                </a>

                &nbsp;&nbsp; {/* &nbsp; - Espaçamento */}
                <a href="https://www.facebook.com/vinicius.anl" target="_blank">
                  <img src={facebook} className="icons" />
                </a>

                &nbsp;&nbsp; {/* &nbsp; - Espaçamento */}
                <a href="https://www.instagram.com/vinicius.anl/?hl=pt-br" target="_blank">
                  <img src={instagram} className="icons"></img>
                </a>

                &nbsp;&nbsp; {/* &nbsp; - Espaçamento */}
                <a href="https://drive.google.com/file/d/1YIgbj6sPt8zBjxtNla-iLOI2YKizldPx/view?usp=sharing" target="_blank">
                  <img src={download} className="icons" />
                </a>

              </div>

            </header>

            

            {/* Footer assinatura */}
          <div className="footer" href="http://localhost:3000/">
            <img src={logo} className="App-Logo" alt="logo" />
              {/*<p className = "txtfooter" >
              <span> Vinicius Andrade Lopes </span></p>*/}
            </div>
          </div>;  
    }
}

export default App;

