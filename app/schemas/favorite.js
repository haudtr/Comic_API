const mongoose = require('mongoose')
const databaseConfig = require(__path_configs + 'database')

const schema = new mongoose.Schema({
    id: String,
    maTruyen:String,
    tenTruyen:String,
    maDocGia:String,
})
module.exports = mongoose.model(databaseConfig.col_favorite,schema)