import React from 'react'

const TableTwo = () => {
  return (
    <div>
      <div class="grid">
      <a href='/create'>
          <div class="box">
            <img class='imgs' src="https://cdn-icons-png.flaticon.com/512/1224/1224811.png" alt="ícone"/>
            <h2>CWE-400</h2>
            <p>Uncontrolled Resource Consumption</p>
          </div>
        </a>
        <a href='/login'>
          <div class="box">
            <img class='imgs' src="https://cdn-icons-png.flaticon.com/512/1224/1224811.png" alt="ícone"/>
            <h2>CWE-89</h2>
            <p>Improper Neutralization of Special Elements</p>
          </div>
        </a>
        <a href='/info'>
          <div class="box">
            <img class='imgs' src="https://cdn-icons-png.flaticon.com/512/1224/1224811.png" alt="ícone"/>
            <h2>CWE-862</h2>
            <p>Missing Authorization</p>
          </div>
        </a>
      </div>
      <div class="grid-two">
      <a href='/admin-function'>
          <div class="box">
            <img class='imgs' src="https://cdn-icons-png.flaticon.com/512/1224/1224811.png" alt="ícone"/>
            <h2>CWE-565</h2>
            <p>Reliance on Cookies</p>
          </div>
        </a>
        <a href='/dns'>
          <div class="box">
            <img class='imgs' src="https://cdn-icons-png.flaticon.com/512/1224/1224811.png" alt="ícone"/>
            <h2>CWE-94</h2>
            <p>Code Injectio</p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default TableTwo;