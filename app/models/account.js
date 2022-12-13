const MainModel = require(__path_schemas + 'account')

module.exports ={
    listItems:(params,option)=>{
        if(option.task === 'all'){
            return MainModel
                .find({})
                .select('id tendn email password phoneNumber')
        }
        else if(option.task === 'one')
            return MainModel
                .find({id:params.id})
                .select('id tendn email password phoneNumber')
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