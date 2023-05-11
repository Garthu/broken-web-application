import React from 'react'
import BaseHeader from './BaseHeader';

const About = () => {
    return (
      <body>
        <header>
          <BaseHeader/>
        </header>
        <div class="container">
          <div class='section'>
          <main>
            <div class="center">
              <h1>Broken Web Applications</h1>
              <p>Este projeto foi desenvolvido por: Samuel Cardoso</p>
            </div>
          </main>
          </div>
        </div>
      </body>
    )
}

export default About;