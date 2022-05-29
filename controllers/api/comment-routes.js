const router = require("express").Router();
const { Comment } = require("../../models/");
const withAuth = require("../../util/auth");

router.post("/", withAuth, (req, res) => {
    Comment.create({ ...req.body, userId: req.session.userId })
      .then(newComment => {
        res.json(newComment);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  
  module.exports = router;