const { Router } = require('express')

const router = Router()

const db = require('../../models/index')


const users = [
  { content: 'Alexandre' },
  { content: 'Pooya' },
  { content: 'Sébastien' }
]

/* GET users listing. */
router.get('/reflections', function (req, res, next) {
  db.Reflection.findAll().then(rfs => {
    res.send(rfs)
  })
})

module.exports = router
