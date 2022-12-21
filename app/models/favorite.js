const MainModel = require(__path_schemas + 'favorite')

module.exports ={
    listItems:(params,option)=>{
        if(option.task === 'all'){
            return MainModel
                .find({})
                .select('id maTruyen tenTruyen maDocGia')
        }
        else if(option.task === 'DocGia')
            return MainModel
                .find({maDocGia:params.maDocGia})
                .select('id maTruyen tenTruyen maDocGia')
        else if(option.task === 'Truyen')
            return MainModel
                .find({maTruyen:params.maTruyen})
                .select('id maTruyen tenTruyen maDocGia')
    },
    deleteItems:(params,option)=>{
        if(option.task === "one")
            return MainModel
                .deleteOne({id:params.id})
        else(option.task==="maDocGia")
        return MainModel
                .deleteOne({maDocGia:params.maDocGia,maTruyen:params.maTruyen})
    },
    create: (item) =>{
        return new MainModel(item).save()
    }
}