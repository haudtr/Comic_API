const mongoose = require('mongoose')
const databaseConfig = require(__path_configs + 'database')





const schema = new mongoose.Schema({
    id: String,
    maDocGia:String,
    tenDocGia:String,
    maTap:String,
    noiDung:String,
    ngayBinhLuan:{ type: Date, required: true, default:  Date.now  }
})
module.exports = mongoose.model(databaseConfig.col_comment,schema)