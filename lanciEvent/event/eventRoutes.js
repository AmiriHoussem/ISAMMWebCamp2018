var express = require('express');
var router = express.Router();
var eventController = require('./eventController.js');

/*
 * GET
 */
router.get('/', eventController.list);

/*
 * GET
 */
router.get('/:id', eventController.show);

/*
 * POST
 */
router.post('/', eventController.create);

/*
 * PUT
 */
router.put('/:id', eventController.update);

/*
 * DELETE
 */
router.delete('/:id', eventController.remove);
/*
* Search
*/
router.post('/searsh/:ch', eventController.search);
module.exports = router;
