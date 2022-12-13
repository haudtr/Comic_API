const mongoose = require('mongoose')
const databaseConfig = require(__path_configs + 'database')

const schema = new mongoose.Schema({
    id: String,
    tenTruyen:String,
    tacGia:String,
    nhanVatChinh:String,
    moTa:String,
    anhDaiDien:String,
    anhBia:String,
    luocXem:String,
    status:String
})
module.exports = mongoose.model(databaseConfig.col_comic,schema)