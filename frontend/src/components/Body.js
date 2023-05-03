import React from 'react'
import './Body.css'
import Header from './Header'

const Body = () => {
    return (
      <body>
        <div class="container">
          <header>
            <Header/>
          </header>
          <main>
            <div class="center">
              <h1>Broken Web Applications</h1>
              <p>Para acessar as aplicações</p>
              <div class="buttons">
                <button class="blue">Azul</button>
                <button class="transparent">Transparente</button>
              </div>
            </div>
          </main>
        </div>
      </body>
    )
}

export default Body;