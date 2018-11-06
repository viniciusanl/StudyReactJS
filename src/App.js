/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return <div className="App">
            <header className="App-header">
              <img src="https://scontent.fplu9-2.fna.fbcdn.net/v/t1.0-9/26166360_1143774309091022_3246020457323943336_n.jpg?_nc_cat=105&_nc_ht=scontent.fplu9-2.fna&oh=4f7df3faebdfb6bb469946a9837b59fd&oe=5C481747" className="img-me" align-content="" title="Vinicius Andrade Lopes" />

              <h1 className="cor-titulo">&lt; 
              <span className="titulo">
                Vinícius Andrade Lopes
              </span>
              /&gt;</h1>

                <br></br>

              <p className="texto">
                Tenho 24 anos, sou estudante do curso de Sistemas de
                Informação e fanático por tecnologia,{" "}
              </p>
              <p className = "texto">
                procuro me desenvolver profissionalmente na área de TI
                com a finalidade de alcançar meus objetivos e
              </p>
              <p className = "texto">
                contribuir para o bom desempenho da empresa.
              </p>
            </header>

            <div id="footer">
                <div className="icons">
                    <i class="fab fa-linkedin"></i>
                </div>

              <img src={logo} className="App-Logo" alt="logo" />
            </div>
          </div>;  
    }
}

export default App;