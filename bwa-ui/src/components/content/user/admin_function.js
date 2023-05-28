import React, { Component } from 'react'
import { smoothScroll}  from '../../../scroll'
import BaseHeader from '../../BaseHeader'
import Users from '../../../services/user.services'

class AdminFunction extends Component {
  constructor(props) {
    super(props)
    this.emailReference = React.createRef()
    this.passwordReference = React.createRef()
    this.state = {
      showSucess: false,
      showFailure: false,
      hasCookie: false,
      isAdmin: false
    }
  }

  componentDidMount() {
    let currentIndex = 0
    var currentSection = document.querySelectorAll('.section')
    smoothScroll(currentSection, currentIndex)

    const cookie = document.cookie
    const cookieSession = 'session=active'
    const adminCookieSession = 'admin=1'
    const hasCookie = cookie.indexOf(cookieSession) !== -1
    const isAdmin = cookie.indexOf(adminCookieSession) !== -1

    this.setState({ hasCookie })
    this.setState({ isAdmin })
  }

  sendData = () => {
    const emailReference = this.emailReference.current.value
    const passwordReference = this.passwordReference.current.value

    const data = {
      email: emailReference,
      password: passwordReference
    }

    Users.setPassword(data)
    .then((response) => {
      if (response.status === 200) {
        this.setState({ showSucess: true })
        this.setState({ showFailure: false })
      }
    })
    .catch((err) => {
      console.error('Erro: ', err)
      this.setState({ showSucess: false })
      this.setState({ showFailure: true })
    })
  }

  render () {
    const { showSucess, showFailure, isAdmin, hasCookie } = this.state

    if (!hasCookie || !isAdmin) {
      return (
        <body>
          <header id="main-header">
            <BaseHeader/>
          </header>
          <div class="section" id="start-section">
            <div id="content">
              <h1>Página de acesso administrativo</h1>
            </div>
          </div>
          <div class="section">
            <div id="content">
              <div class="center">
                <h1>Exploração</h1>
                <p>
                  Talvez o site não verifique bem o tipo de usuário
                </p>
              </div>
            </div>
          </div>
        </body>
      )
    }

    return (
      <body>
        <header id="main-header">
          <BaseHeader/>
        </header>
        <div class="section" id="start-section">
          <div id="content">
            <h1>Definir senha de usuário</h1>
            <div class='input-box'>
              <input class="input-login" ref={this.emailReference} type='text' placeholder='E-mail'/>
            </div>
            <div class='input-box'>
              <input ref={this.passwordReference} type='text' placeholder='Senha'/>
              <button class='send-button' onClick={this.sendData}>Enviar</button>
            </div>
            {showSucess && <p class="p-success">Senha atualizada</p>}
            {showFailure && <p class="p-failure">Usuário não encontrado</p>}
          </div>
        </div>
      </body>
    ) 
  }
}


export default AdminFunction;