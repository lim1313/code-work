const router = require('express').Router();
const controller = require('./../controllers');

//! params μμΉ μ€μ
router.get('/:userId/orders', controller.orders.get);
router.post('/:userId/orders', controller.orders.post);

module.exports = router;
