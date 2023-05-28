import React from 'react'
import './Body.css'
import VulnOpt from './VulnOpt'

const Body = () => {
  function handleClick() {
    const secao2 = document.querySelector('#start-section');
    secao2.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <body>
      <div class="container">
        <div class='section' id="home-section">
        <main>
          <div class="center">
            <h1>Broken Web Applications</h1>
            <p>Para acessar as aplicações</p>
            <div class="buttons">
              <button onClick={handleClick} class="blue">Iniciar</button>
              <button class="transparent">Github</button>
            </div>
          </div>
        </main>
        </div>
        <VulnOpt/>
      </div>
    </body>
  )
}

export default Body;