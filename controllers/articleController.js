const path = require("path");
const router = require("express").Router();
const db = require("../models");
const axios = require("axios");

const articleFunction = {

  getSavedArticles: function (req, res) {
    db.Article
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  saveArticle: function (req, res) {
    db.Article
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  remove: function (req, res) {
    db.Article
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  getNYTArticles: function (req, res) {
    axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
      params: {
        "api-key": "2bac998bc7e9497eac7b13a57242f19d",
        "q": req.query.searchTopic,
        "begin_date": req.query.startDate,
        "end_date": req.query.endDate
      }
    }).then(function (data) {
      res.json(data.data.response);


    }).catch(function (err) {
      console.log(err);
    })
  }
}

router.get("/api/articles", articleFunction.getNYTArticles)

router.get("/api/articles/saved", articleFunction.getSavedArticles)

router.post("/api/articles", articleFunction.saveArticle)

// router.delete("/api/books/:id", articleFunction.remove)

router.delete("/api/articles/delete:id", articleFunction.remove)

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
