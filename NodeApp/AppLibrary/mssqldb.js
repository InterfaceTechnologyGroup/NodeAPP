const cfg = require('../package.json');
const sql = require('mssql')
const config = {
    user: cfg.ms.user,
    password: cfg.ms.password,
    server: cfg.ms.server,
    database: cfg.ms.database,
    options: {
        encrypt: false,
        enableArithAbort: true
    }

}

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        return pool
    })
    .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

module.exports = {
    sql,
    poolPromise
}