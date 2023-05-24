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
                <h1>CVE23-30-12</h1>
                <p>Essa vulnerabilidade consiste em uma falha de</p>
                <div dangerouslySetInnerHTML={{"__html": aboutUserText}} />
                <div class='input-box'>
                    <input type='text' placeholder='Digite aqui'/>
                    <button class='send-button'>Enviar</button>
                </div>
                <div>
                  <input type="text" value={aboutUserText} onChange={this.handleChange} />
                  <button onClick={this.handleRender}>Renderizar</button>
                  {isRendered && (
                    <div dangerouslySetInnerHTML={{ __html: aboutUserText }} />
                  )}
                </div>
              </div>
            </div>
            <div class="section">
              <div id="content">
                  <div class="center">
                    <h1>Exploração</h1>
                    <p>
                      Você pode explorar isso seguindo os seguintes passos<br/>
                      1. Faça X<br/>
                      2. Faça Y
                      3. &lt;img src="x" onerror="alert('XSS exploit!')" /&gt;
                    </p>
                  </div>
              </div>
            </div>
        </body>
    ) 
  }
}


export default XSS;