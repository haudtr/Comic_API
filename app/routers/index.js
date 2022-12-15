const express = require('express');
const router = express.Router();

router.use('/items',require('./items'))
router.use('/account',require('./account'))
router.use('/comic',require('./comic'))
router.use('/chapter',require('./chapter'))
router.use('/rate',require('./rate'))
router.use('/comment',require('./comment'))
router.use('/favorite',require('./favorite'))

module.exports = router;
