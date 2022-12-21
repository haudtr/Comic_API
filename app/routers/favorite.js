const express = require('express');
const router = express.Router();

const controllerName = 'favorite'
const MainModel = require(__path_models + controllerName)

router.get('/', async (req, res, next) =>{
  try {
    const data = await MainModel.listItems({},{'task':'all'})
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

router.get('/comic/:maTruyen', async (req, res, next) =>{
    try {
      const data = await MainModel.listItems({'maTruyen':req.params.maTruyen},{'task':'Truyen'})
      res.status(200).json(data)
    } catch (error) {
      res.status(400).json({
        success:false
      })
    }
  });
router.get('/account/:maDocGia', async (req, res, next) =>{
    try {
      const data = await MainModel.listItems({'maDocGia':req.params.maDocGia},{'task':'DocGia'})
      res.status(200).json(data)
    } catch (error) {
      res.status(400).json({
        success:false
      })
    }
  });
router.get('/:id', async (req, res, next) => {
  try {
    const data = await MainModel.listItems({'id':req.params.id},{'task':'one'})

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

router.post('/add', async (req, res, next) => {
  try {
    let params = []
    params.id = makeID(8)
    params.maDocGia = req.body.maDocGia
    params.maTruyen = req.body.maTruyen
    params.tenTruyen = req.body.tenTruyen

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
router.post('/delete/unLike', async (req, res, next) => {
  try {
    let params = []
    params.maDocGia = req.body.maDocGia
    params.maTruyen = req.body.maTruyen

    const data = await MainModel.deleteItems(params,{'task':'maDocGia'})

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