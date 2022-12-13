const mongoose = require('mongoose')
const databaseConfig = require(__path_configs + 'database')

const schema = new mongoose.Schema({
    id: String,
    tendn:String,
    email:String,
    password:String,
    phoneNumber:String
})
module.exports = mongoose.model(databaseConfig.col_account,schema)