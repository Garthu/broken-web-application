import React, { Component } from 'react'
import { smoothScroll}  from '../scroll'
import XSSContent from './XSSContent';
import Header from './Header';
import './VulnOpt.css'

class VulnOpt extends Component {
    componentDidMount() {
        let currentIndex = 0;
        var currentSection = document.querySelectorAll('.section');
        smoothScroll(currentSection, currentIndex);
    }

    render () {
        return (
            <body>
                <header id="main-header">
                  <Header/>
                </header>
                <div class="section">
                  <div id="content">
                    <h1>XSS Tipo de vulnerabilidade</h1>
                    <p>Essa vulnerabilidade consiste em X Y Z</p>
                    <div class="grid">
                      <div class="box">
                        <img class='imgs' src="https://cdn-icons-png.flaticon.com/512/1224/1224811.png" alt="ícone"/>
                        <h2>Título 1</h2>
                        <p>Descrição curta 1</p>
                      </div>
                      <div class="box">
                        <img class='imgs' src="https://cdn-icons-png.flaticon.com/512/1224/1224811.png" alt="ícone"/>
                        <h2>Título 2</h2>
                        <p>Descrição curta 2</p>
                      </div>
                      <div class="box">
                        <img class='imgs' src="https://cdn-icons-png.flaticon.com/512/1224/1224811.png" alt="ícone"/>
                        <h2>Título 3</h2>
                        <p>Descrição curta 3</p>
                      </div>
                      <div class="box">
                        <img class='imgs' src="https://cdn-icons-png.flaticon.com/512/1224/1224811.png" alt="ícone"/>
                        <h2>Título 4</h2>
                        <p>Descrição curta 4</p>
                      </div>
                      <div class="box">
                        <img class='imgs' src="https://cdn-icons-png.flaticon.com/512/1224/1224811.png" alt="ícone"/>
                        <h2>Título 5</h2>
                        <p>Descrição curta 5</p>
                      </div>
                      <a href='/pagina1'>
                        <div class="box">
                          <img class='imgs' src="https://cdn-icons-png.flaticon.com/512/1224/1224811.png" alt="ícone"/>
                          <h2>Título 6</h2>
                          <p>Descrição curta 6</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="section">
                  <div id="content">
                    <h1>CSS Tipo de vulnerabilidade</h1>
                    <p>Essa vulnerabilidade consiste em X Y Z</p>
                    <XSSContent/>
                  </div>
                </div>
                
                <div class="section">
                <div id="content">
                    <h1>RSS Tipo de vulnerabilidade</h1>
                    <p>Essa vulnerabilidade consiste em X Y Z</p>
                    <XSSContent/>
                  </div>
                </div>
            </body>
        ) 
    }
}


export default VulnOpt;