import React from 'react'

const TableOne = () => {
  return (
    <div>
      <div class="grid">
      <a href='/control'>
          <div class="box">
            <img class='imgs' src="https://cdn-icons-png.flaticon.com/512/1224/1224811.png" alt="ícone"/>
            <h2>CWE-284</h2>
            <p>Improper Access Control</p>
          </div>
        </a>
        <a href='/comment'>
          <div class="box">
            <img class='imgs' src="https://cdn-icons-png.flaticon.com/512/1224/1224811.png" alt="ícone"/>
            <h2>CWE-200</h2>
            <p>Exposure of Sensitive Information - 1</p>
          </div>
        </a>
        <a href='/robots'>
          <div class="box">
            <img class='imgs' src="https://cdn-icons-png.flaticon.com/512/1224/1224811.png" alt="ícone"/>
            <h2>CWE-200</h2>
            <p>Exposure of Sensitive Information - 2</p>
          </div>
        </a>
      </div>
      <div class="grid-two">
      <a href='/your-text'>
          <div class="box">
            <img class='imgs' src="https://cdn-icons-png.flaticon.com/512/1224/1224811.png" alt="ícone"/>
            <h2>CWE-79</h2>
            <p>Improper Neutralization</p>
          </div>
        </a>
        <a href='/animals'>
          <div class="box">
            <img class='imgs' src="https://cdn-icons-png.flaticon.com/512/1224/1224811.png" alt="ícone"/>
            <h2>CWE-22</h2>
            <p>Improper Limitation of a Pathname</p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default TableOne;