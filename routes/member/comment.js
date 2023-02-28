const router = require('express').Router();
const models = require('../../models');

router.get('/:id', async (req, res) => {
  try {
    console.log(req.params.id);
    const comments = await models.comment
      .find({ targetID: req.params.id })
      .sort({ createdAt: 'desc' });

    res.status(200).json(comments);
  } catch (error) {
    console.log(error);
    throw error;
  }
});

router.post('/add', async (req, res) => {
  try {
    const { name, content, targetType, targetID } = req.body;

    if (!name || !content) {
      res.status(406).json({ ERROR: 'invalid params' });
    } else {
      const comment = await models
        .comment({
          name,
          content,
          targetType,
          targetID,
        })
        .save();

      res.status(201).json(comment);
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
});

module.exports = router;
