const MainModel = require(__path_schemas + 'favorite')

module.exports ={
    listItems:(params,option)=>{
        if(option.task === 'all'){
            return MainModel
                .find({})
                .select('id maTruyen maDocGia')
        }
        else if(option.task === 'idDocGia')
            return MainModel
                .find({maDocGia:params.id})
                .select('id maTruyen maDocGia')
        else if(option.task === 'idTruyen')
            return MainModel
                .find({maTruyen:params.id})
                .select('id maTruyen maDocGia')
    },
    deleteItems:(params,option)=>{
        if(option.task === "one")
            return MainModel
                .deleteOne({id:params.id})
    },
    create: (item) =>{
        return new MainModel(item).save()
    }
}