const mongoose = require('mongoose')
const databaseConfig = require(__path_configs + 'database')

const schema = new mongoose.Schema({
    id: String,
    maDocGia:String,
    maTap:String,
    noiDung:String,
    ngayBinhLuan:String,
})
module.exports = mongoose.model(databaseConfig.col_comment,schema)