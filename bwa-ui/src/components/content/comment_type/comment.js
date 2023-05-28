import React, { Component } from 'react'
import { smoothScroll}  from '../../../scroll'
import BaseHeader from '../../BaseHeader'

class Comment extends Component {
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
                <h2 class="h2-text">Cuidado com seus comentários, algumas coisas não deveriam ser ditas<br/>mesmo que sejam verdade</h2>
                <p></p>
              </div>
            </div>
            <div class="section">
              <div id="content">
                  <div class="center">
                    <h1>Exploração</h1>
                    <p>
                      Comentários pode expor informações sensíveis. Procure onde<br/>
                      usuários normalmente não olham
                    </p>
                  </div>
              </div>
            </div>
        </body>
    ) 
  }
}


export default Comment;