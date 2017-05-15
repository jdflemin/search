import * as express from 'express';
import Answer from '../models/answers';

let router = express.Router();

router.get('/search/:search', (req, res) => {
  Answer.find({aContent: {"$regex": req.params.search, "$options": "i"}})
  .then((matches) => res.json(matches));
});

export default router;
