import React, { Component } from 'react'
import { smoothScroll}  from '../../../scroll'
import BaseHeader from '../../BaseHeader'

class AdminControl extends Component {
  render () {
    return (
        <body>
            <header id="main-header">
              <BaseHeader/>
            </header>
            <div class="section" id="start-section">
              <div id="content">
                <h1>Admin Control</h1>
                <p>Usuários administrativos: admin@bwa.com | hacking@bwa.com</p>
              </div>
            </div>
        </body>
    ) 
  }
}


export default AdminControl;