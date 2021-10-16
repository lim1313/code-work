const router = require('express').Router();
const controller = require('./../controllers');

//! params 위치 중요
router.get('/:userId/orders', controller.orders.get);
router.post('/:userId/orders', controller.orders.post);

module.exports = router;
