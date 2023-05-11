import React from 'react'

const XSSContent = () => {
    return (
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
        <a href='/xss'>
          <div class="box">
            <img class='imgs' src="https://cdn-icons-png.flaticon.com/512/1224/1224811.png" alt="ícone"/>
            <h2>Título 6</h2>
            <p>Descrição curta 6</p>
          </div>
        </a>
      </div>
    )
}

export default XSSContent;