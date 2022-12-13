const MainModel = require(__path_schemas + 'comic')

module.exports ={
    listItems:(params,option)=>{
        if(option.task === 'all'){
            return MainModel
                .find({})
                .select('id tenTruyen tacGia nhanVatChinh moTa anhDaiDien anhBia luocXem status')
        }
        else if(option.task === 'one')
            return MainModel
                .find({id:params.id})
                .select('id tenTruyen tacGia nhanVatChinh moTa anhDaiDien anhBia luocXem status')
    },
    deleteItems:(params,option)=>{
        if(option.task === "one")
            return MainModel
                .deleteOne({id:params.id})
    },
    editItem:(params,option)=>{
        if(option.task === "edit")
            return MainModel
                .updateOne({id:params.id},params.body)
    },
    create: (item) =>{
        return new MainModel(item).save()
    }
}