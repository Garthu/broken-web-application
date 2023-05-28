import React, { Component } from 'react'
import { smoothScroll}  from '../../../scroll'
import BaseHeader from '../../BaseHeader'
import './xss.css'

class XSS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutUserText: '',
      isRendered: false
    };
  }

  handleChange = (event) => {
    this.setState({ aboutUserText: event.target.value });
  };

  handleRender = () => {
    this.setState({ isRendered: true });
  };

  componentDidMount() {
    let currentIndex = 0;
    var currentSection = document.querySelectorAll('.section');
    smoothScroll(currentSection, currentIndex);
  }
  render () {
    const { aboutUserText, isRendered } = this.state;

    return (
      <body>
        <header id="main-header">
          <BaseHeader/>
        </header>
        <div class="section" id="start-section">
          <div id="content">
            <h1>Escreva seu texto</h1>
            <div dangerouslySetInnerHTML={{"__html": aboutUserText}} />
            <div class='input-box-xss'>
              <input type='text' value={aboutUserText} onChange={this.handleChange} placeholder='Seu texto'/>
              {isRendered && (
                <div class="blank" dangerouslySetInnerHTML={{ __html: aboutUserText }} />
              )}
            </div>
          </div>
        </div>
        <div class="section">
          <div id="content">
            <div class="center">
              <h1>Exploração</h1>
              <p>
                Muitas vezes entradas de dados em sites não são sanitizadas<br/>
                deve valer a pena testar algum Injection
              </p>
            </div>
          </div>
        </div>
      </body>
    ) 
  }
}


export default XSS;