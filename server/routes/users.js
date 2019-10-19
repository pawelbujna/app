const express = require("express")
const router = express.Router()

const User = require('../models/User')

router.get("/", async (req, res, next) => {
  try {
    const users = await User.find()

    res.json(users)
  } catch (err) {
    res.json({ message: err })
  }
})

router.post("/add", async (req, res, next) => {
  const user = new User({
    name: req.body.name,
    surname: req.body.surname
  })

  user
    .save()
    .then(() => {
      res.sendStatus(200)
    })
    .catch(err => {
      console.log(err)
      res.json({ message: err })
    })
})

module.exports = router
