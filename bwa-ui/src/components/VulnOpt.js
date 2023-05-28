import React, { Component } from 'react'
import { smoothScroll}  from '../scroll'
import TableOne from './content/table/table_one';
import TableTwo from './content/table/table_two';
import Header from './Header';
import './VulnOpt.css'

class VulnOpt extends Component {
  componentDidMount() {
      let currentIndex = 0;
      var currentSection = document.querySelectorAll('.section');
      smoothScroll(currentSection, currentIndex);
  }

  render () {
    return (
      <body>
        <header id="main-header">
          <Header/>
        </header>
        <div class="section" id="start-section">
          <div id="content">
          <h1>Genesis Exploits</h1>
            <p></p>
            <TableOne/>
          </div>
        </div>
        <div class="section">
          <div id="content">
            <h1>Apocalypse Exploits</h1>
            <p></p>
            <TableTwo/>
          </div>
        </div>
      </body>
    ) 
  }
}


export default VulnOpt;