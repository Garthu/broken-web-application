const path = require('path')

exports.download = (req, res) => {
  const filename = req.query.filename
  const filePath = path.resolve(__dirname, filename)

  res.setHeader('Content-Disposition', `attachment; filename=${filename}`)
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Disposition')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Content-Type', 'application/octet-stream')

  res.download(filePath, (err) => {
    if (err) {
      console.error('Erro ao fazer o download do arquivo:', err)
      res.status(404).send('Arquivo não encontrado')
    }
  })
}