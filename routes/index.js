const path = require("path");
const router = require("express").Router();
const db = require("../models");

router.post("/api/newbook",function(req,res){
  db.create(req.body)
  .then(function(savedBook){
    console.log("Post",savedBook)
    res.json(savedBook)
  })
})


// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
