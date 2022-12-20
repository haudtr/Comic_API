const mongoose = require('mongoose')
const databaseConfig = require(__path_configs + 'database')

const schema = new mongoose.Schema({
    id: String,
    email:{type:String,unique:true},
    password:String,
    phoneNumber:String,
    avatar:String,
    tenUser:String,
})
module.exports = mongoose.model(databaseConfig.col_account,schema)