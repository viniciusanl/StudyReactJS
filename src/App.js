import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (

            <div className = "App" >

            <header className = "App-header" >

            <img src="https://scontent.fplu9-2.fna.fbcdn.net/v/t1.0-9/26166360_1143774309091022_3246020457323943336_n.jpg?_nc_cat=105&_nc_ht=scontent.fplu9-2.fna&oh=4f7df3faebdfb6bb469946a9837b59fd&oe=5C481747"
            className = "App-MinhaImagem" align-content="right" title="Teste"/>
            
            </header>

                <div className="App-Footer">
                    <img src = {logo}className = "App-Logo" alt = "logo"/>
                    <p> Vinícius Lopes </p>
                </div>

            </div>
            
        );
    }
}

export default App;