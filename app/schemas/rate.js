const mongoose = require('mongoose')
const databaseConfig = require(__path_configs + 'database')

const schema = new mongoose.Schema({
    id: String,
    maDocGia:String,
    maTruyen:String,
    rate:String,
    noiDung:String,
    ngayViet:String
})
module.exports = mongoose.model(databaseConfig.col_rate,schema)