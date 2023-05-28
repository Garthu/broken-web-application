import React, { Component } from 'react'
import { smoothScroll}  from '../../../scroll'
import BaseHeader from '../../BaseHeader'
import Users from '../../../services/user.services'
import setCookie from '../../../set-cookie'

class Login extends Component {
  constructor(props) {
    super(props)
    this.nameReference = React.createRef();
    this.emailReference = React.createRef();
    this.passwordReference = React.createRef();
    this.state = {
        showSucess: false,
        showFailure: false,
        name: ''
    }
  }

  componentDidMount() {
    let currentIndex = 0;
    var currentSection = document.querySelectorAll('.section');
    smoothScroll(currentSection, currentIndex);
  }

  sendData = () => {
    const emailReference = this.emailReference.current.value
    const passwordReference = this.passwordReference.current.value

    const data = {
      email: emailReference,
      password: passwordReference
    }

    Users.login(data)
    .then((response) => {
      if (response.status === 200) {
        this.setState({ showSucess: true })
        this.setState({ showFailure: false })
        this.setState({ name: response.data.name })

        setCookie('name', response.data.name, 7)
        setCookie('session', response.data.session, 7)
        setCookie('admin', response.data.admin, 7)
      }
    })
    .catch((err) => {
      console.error('Erro: ', err)
      this.setState({ showSucess: false })
      this.setState({ showFailure: true })
    })
  }

  render () {
    const { showSucess, showFailure, name } = this.state

    return (
      <body>
        <header id="main-header">
          <BaseHeader/>
        </header>
        <div class="section" id="start-section">
          <div id="content">
            <h1>Login Page</h1>
            <div class='input-box'>
              <input class="input-login" ref={this.emailReference} type='text' placeholder='E-mail'/>
            </div>
            <div class='input-box'>
              <input ref={this.passwordReference} type='text' placeholder='Senha'/>
              <button class='send-button' onClick={this.sendData}>Enviar</button>
            </div>
            {showSucess && <p class="p-success">Usuário logado: {name}</p>}
            {showFailure && <p class="p-failure">Login inválido</p>}
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


export default Login;