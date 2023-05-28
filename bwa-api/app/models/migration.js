module.exports = async function createData(db) {
  try {
    const fs = require('fs')
      
    await db.conn.sync({ force: true })

    let baseUsers = {}

    fs.readFile('/bwa-api/app/data/users.json', 'utf-8', async (err, data) => {
      if (err) {
        console.error('Erro: ', err)
      }
      
      baseUsers = JSON.parse(data)
      
      for (const user of baseUsers.users) {
        await db.Users.bulkCreate([
          {
            name: user.name,
            password: user.password,
            email: user.email,
            admin: user.admin
          }
        ]) 
      }
    })
  } catch (err) {
    console.error('erro', err)
  }
}