const express = require('express');
const router = express.Router();

const controllerName = 'account'
const MainModel = require(__path_models + controllerName)


router.get('/', async (req, res, next) =>{
  try {
    const data = await MainModel.listItems({},{'task':'all'})
    res.status(200).json(
      data)
  } catch (error) {
    res.status(400).json({
      success:false
    })
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const data = await MainModel.listItems({'id':req.params.id},{'task':'one'})

    res.status(200).json(
      data)
  } catch (error) {
    res.status(400).json({
      success:false
    })
  }
});

router.get('/user/:email', async (req, res, next) => {
  try {
    const data = await MainModel.listItems({'email':req.params.email},{'task':'email'})
    res.status(200).json(data)

  } catch (error) {
    res.status(400).json({
      success:false
    })
  }
});

router.post('/add', async (req, res, next) => {
  try {
    let params = []
    params.id = makeID(8)
    params.email = req.body.email
    params.password = req.body.password
    params.phoneNumber = req.body.phoneNumber
    params.avatar = req.body.avatar
    params.tenUser = req.body.tenUser

    const data = await MainModel.create(params)

    res.status(201).json({
      success:true,
      data:data
  })
  } catch (error) {
    res.status(400).json({
      success:false
    })
  }
});

router.post('/login', async (req,res,next)=>{
  try {
    var email = req.body.email;
    var password = req.body.password;

    const data = await MainModel.login(email,password)

    if(data.email==email) res.status(200).json('Đăng nhập thành công')
    else res.status(300).json('Đăng nhập thất bại')

  } catch (error) {
    res.status(400).json({
      success:false
    })
  }
})

router.put('/edit/:id', async (req, res, next) => {
  try {
    let body = req.body

    const data = await MainModel.editItem({'id': req.params.id,'body':body},{"task":"edit"})

    res.status(200).json({
      success:true,
      data:data
  })
  } catch (error) {
    res.status(400).json({
      success:false
    })
  }
});

router.delete('/delete/:id',async (req,res,next)=>{
  try {
    const data = await MainModel.deleteItems({'id':req.params.id},{'task':'one'})

    res.status(200).json({
      success:true,
      data:data
  })
  } catch (error) {
    res.status(400).json({
      success:false
    })
  }
})
module.exports = router;








makeID = (number)=> {
  var text = ""
  var possible ="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for(let i =0;i<number;i++){
    text += possible.charAt(Math.floor(Math.random()*possible.length))
  }

  return text
}