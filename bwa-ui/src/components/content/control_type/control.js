import React, { Component } from 'react'
import { smoothScroll}  from '../../../scroll'
import BaseHeader from '../../BaseHeader'

class Control extends Component {
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
                <h2 class="h2-text">Se você colocar uma chave debaixo do tapete permitirá que um ladrão encontre-a</h2>
                <p>- Tim Cook</p>
              </div>
            </div>
            <div class="section">
              <div id="content">
                  <div class="center">
                    <h1>Exploração</h1>
                    <p>
                      Nem todos os paths de um site ficam acessíveis através de botões<br/>
                      procure por outras rotas que podem<br/>conter informações sensíveis
                    </p>
                  </div>
              </div>
            </div>
        </body>
    ) 
  }
}


export default Control;