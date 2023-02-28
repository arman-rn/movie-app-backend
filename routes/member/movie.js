const router = require('express').Router();
const models = require('../../models');

router.get('/id/:id', async (req, res) => {
  try {
    const movies = await models.movie.findOne({ id: req.params.id });
    res.status(200).json(movies);
  } catch (error) {
    console.log(error);
    throw error;
  }
});

router.get('/popular', async (req, res) => {
  try {
    const movies = await models.movie.find().sort({ popularity: 'desc' });
    // .limit(20)
    // .skip(req.query.page * 20);
    res.status(200).json({
      results: movies,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
});

router.get('/top_rated', async (req, res) => {
  try {
    const movies = await models.movie.find().sort({ vote_average: 'desc' });
    // .limit(20)
    // .skip(req.query.page * 20);
    res.status(200).json({
      results: movies,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
});

module.exports = router;
