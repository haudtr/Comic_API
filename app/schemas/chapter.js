const mongoose = require('mongoose')
const databaseConfig = require(__path_configs + 'database')

const noiDung = []

const schema = new mongoose.Schema({
    id: String,
    maTruyen:String,
    tenTruyen:String,
    tapSo:Number,
    ten:String,
    ngayDang:String,
    noiDung:[{ anh:String, }]
})
module.exports = mongoose.model(databaseConfig.col_chapter,schema)