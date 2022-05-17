const pgp = require('pg-promise')()
const db = pgp({
    host: process.env.host,
    port: process.env.port,
    database: process.env.database,
    user: process.env.user,
    password: process.env.password
})

const tableRow = async () => {
    console.log(process.env.password)
    const tableRow = await db.any('SELECT * FROM auth_user')
    console.log(tableRow)
}

tableRow().then(() => {
    console.log('Finished?')
})
