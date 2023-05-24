import React, { Component } from 'react'
import { smoothScroll}  from '../../../scroll'
import BaseHeader from '../../BaseHeader'
import RelativeDataService from '../../../services/relative.services'

class Relative extends Component {
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
    const inputValue = this.inputReference.current.value
    const filename = '../../img/' + inputValue

    RelativeDataService.get(filename)
    .then((response) => {
      if (response.status === 200) {
        const { data, headers } = response;
    
        if (headers.hasOwnProperty('content-disposition')) {
          const disposition = headers['content-disposition'];
          const fileNameMatch = disposition.match(/filename=(?:"([^"]+)"|([^;\n]+))/i);
          let fileName = 'download.txt';
    
          if (fileNameMatch && fileNameMatch.length > 1) {
            fileName = fileNameMatch[1] || fileNameMatch[2];
          }
    
          const extension = fileName.split('.').pop().toLowerCase();
    
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
                <h1>CVE23</h1>
                <p>Essa vulnerabilidade </p>
              </div>
              <div class='input-box'>
                <input id='my-input' ref={this.inputReference} type='text' placeholder='Digite aqui'/>
                <button class='send-button' onClick={this.sendData}>Enviar</button>
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
                      3. ../../../../etc/passwd
                    </p>
                  </div>
              </div>
            </div>
        </body>
    ) 
  }
}


export default Relative;