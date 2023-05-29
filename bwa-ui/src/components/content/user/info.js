import React, { Component } from 'react'
import BaseHeader from '../../BaseHeader'

class Info extends Component {
  render () {
        return (
      <body>
        <header id="main-header">
          <BaseHeader/>
        </header>
        <div class="section" id="start-section">
          <div id="content">
            <h1>Dica: Refaça os desafios para descobrir as novas funcões do seu usuário</h1>
          </div>
        </div>
      </body>
    ) 
  }
}


export default Info;