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

router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findById({ _id: req.params.id })
    res.json(user)
  } catch (err) {
    res.json({ message: err })
  }
})

router.post("/add", async (req, res, next) => {
  const user = new User({
    name: req.body.name,
    surname: req.body.surname
  })

  try {
    await user.save()
    res.sendStatus(200)
  } catch (error) {
    res.json({ message: error })
  }

})

router.post("/save", async (req, res, next) => {
  try {
    const user = await User.findOneAndUpdate({}, req.body)
    res.json(user)
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router
