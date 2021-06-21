const { Router } = require('express')

const router = Router()

const sqlite3 = require('sqlite3')

const db = new sqlite3.Database('db-dev.sqlite3')


/* GET users listing. */
router.get('/reflections', function (req, res, next) {
  db.serialize(() => {
    db.all("select * from Reflections", (err, rows) => {
      if (!err) {
        res.send(rows)
      }
    })
  })
  // res.json(users)
})

module.exports = router
