const fs = require('fs');
const path = require('path');

exports.dns = (req, res) => {
  const filename = req.query.filename
  console.log(filename)
  const filePath = path.resolve(__dirname, '../../img/result.txt')
  const command = `result=$(dig ${filename}) && echo "$result" > '/bwa-api/img/result.txt'`
  console.log(command)

  require('child_process').exec(command, (err, stdout, stderr) => {
    res.setHeader('Content-Disposition', `attachment; filename=result.txt`)
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Disposition')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Content-Type', 'application/octet-stream')

    if (err) {
      console.error('Erro na execução', err)
    }

    res.download(filePath, (err) => {
      if (err) {
        console.error('Erro ao fazer o download do arquivo:', err)
        res.status(404).send('Arquivo não encontrado')
      }
    })
  })
}