/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import logo from './logo.svg';
import linkedin from "../src/icon/linkedin-sign.png"
import facebook from "../src/icon/facebook-logo.png"
import github from "../src/icon/github-sign.png"
import download from "../src/icon/archive.png"
import instagram from "../src/icon/instagram.png"
import MinhaLogo from "../src/icon/Logo Vinicius 25-11-2018.png"
import twitter from "../src/icon/twitter.png"
import cv from "../src/icon/cv1.png"
import './App.css';

class App extends Component {
    render() {
        return (
          <div className="App">
            <header className="App-header">
              {/* Minha Imagem */}
              <img src={MinhaLogo} className="img-me" />

              <h1 className="cor-titulo">
                &lt;!--
                <span className="titulo"> Vinícius Andrade Lopes </span>
                --&gt; {/* &lt; = < | &gt; = >*/}
              </h1>

              <br />

              <p class="cor-texto">
                &#123;/*
                <span class="texto">
                  Um amante da música e entusiasta da tecnologia
                </span>
                <br />
                <span class="texto">
                  buscando impulsionar seus conhecimentos e sabedoria.
                </span>
                */&#125;
                <div class="icon-all">
                  <a href="https://drive.google.com/file/d/1tf18nnfJpon3ioUJcinvq07_AcTbtaFW/view" target="_blank" >
                    <img src={cv} className="icon-cv" />
                  </a>
                </div>
              </p>

              {/* Footer dos Icones */}
              {/* target=blank abre a página em outra aba*/}
              <div className="footer-icon">
                <a href="https://www.linkedin.com/in/vinicius-andrade-lopes/" target="_blank">
                  <img src={linkedin} className="icons" />
                </a>

                &nbsp; {/* &nbsp; - Espaçamento */}
                <a href="https://github.com/viniciusanl" target="_blank">
                  <img src={github} className="icons" />
                </a>

                &nbsp; {/* &nbsp; - Espaçamento */}
                <a href="https://www.facebook.com/vinicius.anl" target="_blank">
                  <img src={facebook} className="icons" />
                </a>

                &nbsp; {/* &nbsp; - Espaçamento */}
                <a href="https://www.instagram.com/vinicius.anl/?hl=pt-br" target="_blank">
                  <img src={instagram} className="icons" />
                </a>

                &nbsp; {/* &nbsp; - Espaçamento */}
                <a href="https://twitter.com/viniciusalo" target="_blank">
                  <img src={twitter} className="icons" />
                </a>
                
              </div>
            </header>

            {/* Footer assinatura */}
            <div className="footer">
              <img src={logo} className="App-Logo" alt="logo" />
              {/*<p className = "txtfooter" >
              <span> Vinicius Andrade Lopes </span></p>*/}
            </div>
          </div>
        );  
    }
}

export default App;

