import React, { Component } from 'react'
import { smoothScroll}  from '../../../scroll'
import BaseHeader from '../../BaseHeader'

class Robots extends Component {
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
                <h2 class="h2-text">Será mesmo que os robôs não olham lá?<br/></h2>
                <p></p>
              </div>
            </div>
            <div class="section">
              <div id="content">
                  <div class="center">
                    <h1>Exploração</h1>
                    <p>
                      Um arquivo é responsável por não permitir a indexação de rotas<br/>
                      tente olhar lá.
                    </p>
                  </div>
              </div>
            </div>
        </body>
    ) 
  }
}


export default Robots;