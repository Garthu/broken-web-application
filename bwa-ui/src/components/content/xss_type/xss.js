import React, { Component } from 'react'
import { smoothScroll}  from '../../../scroll'
import BaseHeader from '../../BaseHeader'
import './xss.css'

class XSS extends Component {
    componentDidMount() {
        let currentIndex = 0;
        var currentSection = document.querySelectorAll('.section');
        smoothScroll(currentSection, currentIndex);
    }

    render () {
        return (
            <body>
                <header id="main-header">
                  <BaseHeader/>
                </header>
                <div class="section" id="start-section">
                  <div id="content">
                    <h1>CVE23-30-12</h1>
                    <p>Essa vulnerabilidade consiste em uma falha de</p>
                    <div class='input-box'>
                        <input type='text' placeholder='Digite aqui'/>
                        <button class='send-button'>Enviar</button>
                    </div>
                  </div>
                </div>

                <div class="section">
                  <div id="content">
                      <div class="center">
                        <h1>Exploração</h1>
                        <p>
                          Você pode explorar isso seguindo os seguintes passos<br/>
                          1. Faça X<br/>
                          2. Faça Y
                        </p>
                      </div>
                  </div>
                </div>
            </body>
        ) 
    }
}


export default XSS;