const MainModel = require(__path_schemas + 'comment')

module.exports ={
    listItems:(params,option)=>{
        if(option.task === 'all'){
            return MainModel
                .find({})
                .select('id maDocGia maTap noiDung ngayBinhLuan')
        }
        else if(option.task === 'one')
            return MainModel
                .find({id:params.id})
                .select('id maDocGia maTap noiDung ngayBinhLuan')
        else if(option.task === 'tap')
            return MainModel
                .find({maTap:params.id})
                .select('id maDocGia maTap noiDung ngayBinhLuan')
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