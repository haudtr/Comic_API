const mongoose = require('mongoose')
const databaseConfig = require(__path_configs + 'database')

const schema = new mongoose.Schema({
    id: String,
    maDocGia:String,
    avtDocGia:String,
    maTruyen:String,
    rate:Number,
    noiDung:String,
    ngayViet: { type: Date, required: true, default: Date.now }
})
module.exports = mongoose.model(databaseConfig.col_rate,schema)