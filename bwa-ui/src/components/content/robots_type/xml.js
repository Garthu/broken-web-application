import React, { Component } from 'react'

class XML extends Component {
  render () {
    return (
        <body>
          <pre class="blank">
            &lt;?xml version="1.0" encoding="UTF-8"?&gt;<br/>
            &lt;dadosPessoais&gt;<br/>
              &lt;nome&gt;Broken Aplication&lt;/nome&gt;<br/>
              &lt;cpf&gt;123.456.789-00&lt;/cpf&gt;<br/>
              &lt;endereco&gt;<br/>
                &lt;rua&gt;Rua Fictícia, 123&lt;/rua&gt;<br/>
                &lt;cidade&gt;Cidade Fictícia&lt;/cidade&gt;<br/>
                &lt;estado&gt;Estado Fictício&lt;/estado&gt;<br/>
              &lt;/endereco&gt;<br/>
              &lt;telefone&gt;(00) 1234-5678&lt;/telefone&gt;<br/>
              &lt;email&gt;broken.aplication@bwa.com&lt;/email&gt;<br/>
              &lt;cartaoCredito&gt;<br/>
                &lt;numero&gt;**** **** **** 1234&lt;/numero&gt;<br/>
                &lt;validade&gt;12/24&lt;/validade&gt;<br/>
                &lt;cvv&gt;123&lt;/cvv&gt;<br/>
              &lt;/cartaoCredito&gt;<br/>
            &lt;/dadosPessoais&gt;<br/>
          </pre>
        </body>
    ) 
  }
}


export default XML;