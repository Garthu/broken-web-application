import React, { Component } from 'react'
import { smoothScroll}  from '../../../scroll'
import BaseHeader from '../../BaseHeader'
import RCEDataService from '../../../services/rce.services'

class RCE extends Component {
  constructor(props) {
    super(props)
    this.inputReference = React.createRef();
  }

  componentDidMount() {
    let currentIndex = 0;
    var currentSection = document.querySelectorAll('.section');
    smoothScroll(currentSection, currentIndex);
  }

  sendData = () => {
    const filename = this.inputReference.current.value

    RCEDataService.get(filename)
    .then((response) => {
      if (response.status === 200) {
        const { data, headers } = response;
    
        if (headers.hasOwnProperty('content-disposition')) {
          const disposition = headers['content-disposition'];
          const fileNameMatch = disposition.match(/filename=(?:"([^"]+)"|([^;\n]+))/i);
    
          fileName = fileNameMatch[1] || fileNameMatch[2];

          const blob = new Blob([data], { type: headers['content-type'] });
    
          const url = window.URL.createObjectURL(blob);
          
          const link = document.createElement('a');
          link.href = url;
          link.download = fileName;
          link.click();
    
          window.URL.revokeObjectURL(url);
        } else {
          console.error('Cabeçalho "content-disposition" ausente na resposta.');
        }
      }
    })
    .catch((error) => {
      console.error('Erro ao fazer o download do arquivo:', error);
    });
  }

  render () {
    return (
      <body>
        <header id="main-header">
          <BaseHeader/>
        </header>
        <div class="section" id="start-section">
          <div id="content">
            <h1>Coloque o link de um site para pesquisar o DNS</h1>
            <div class='input-box'>
              <input id='my-input' ref={this.inputReference} type='text' placeholder='www.google.com'/>
              <button class='send-button' onClick={this.sendData}>Enviar</button>
            </div>
          </div>
        </div>
        <div class="section">
          <div id="content">
            <div class="center">
              <h1>Explordação</h1>
              <p>
                Este site é um vetor de Injection
              </p>
            </div>
          </div>
        </div>
      </body>
    ) 
  }
}


export default RCE;