const router = require('express').Router()

router.get('/', (req, res) => {
  res.sendFile('index')
})

module.exports = router