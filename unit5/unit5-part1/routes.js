
const express = require('express')
const router = express.Router()

const db = require('./db')

function handler (req, res) {
  res.send(req.headers['content-type'])
}

router.get('/', handler)

// express waits until it gets a GET request at the / endpoint
// when it gets that request, it creates a req and res object
// THEN it calls handler and passes it those two objects
// (handler is a function that takes in those objects as arguments)


router.get('/all', (req, res) => {
  res.json(db)
})

router.get('/:id', (req, res) => {
  console.log(req.params.id)

  // find appropriate post
  const post = db.find(post => post.id === req.params.id)

  // send it back to the user
  res.json(post)
})

router.get('/author/:name', (req, res) => {
  const posts = db.filter(
    post => post.author === req.params.name
  )
  res.json(posts)
})

router.post('/new', (req, res) => {
  // db.sort((a, b) => parseInt(a.id) < parseInt(b.id))
  // console.log(db)
  // console.log(parseInt(db.at(-1).id) + 1)

  const ids = db.map(p => parseInt(p.id))
  let newId = Math.max(...ids) + 1
  newId = newId.toString().padStart(3, '0')

  req.body.id = newId

  db.push(req.body)

  res.send('added new post')
})

router.put('/:id', (req, res) => {
  let postIndex = db.findIndex(
    post => parseInt(post.id) === parseInt(req.params.id)
  )
  
  const id = db[postIndex].id

  db[postIndex] = req.body
  db[postIndex].id = id

  res.json({
    message: 'update successful',
    recordUpdated: req.body
  })  
})

// write the code for a PATCH endpoint at '/:id'
router.patch('/:id', (req, res) => {
  // your code goes here!

  // find the right object in the db

  // modify it appropriately
  // NOTE: do not replace the entire object,
  //       just find a way to change the parts that the
  //       request specified

  // send something back to the client confirming the edit
})



router.delete('/:id', (req, res) => {
  // this code has to actually do the deleting

  const index = db.findIndex(
    post => parseInt(post.id) === parseInt(req.params.id)
  )
  const deleted = db.splice(index, 1)

  res.json({
    message: 'deletion successful',
    recordsDeleted: deleted
  })
})


module.exports = router