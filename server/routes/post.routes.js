const passport = require('passport')
const { Router } = require('express')
const router = Router()

const postController = require('../controllers/post.controller')

const upload = require('../middleware/upload')


// Admin
// /api/post/admin
router.post(
  '/admin/',
  passport.authenticate('jwt', { session: false }),
  upload.single('image'),
  postController.create
)

router.get(
  '/admin/',
  passport.authenticate('jwt', { session: false }),
  postController.getAll
)

router.get(
  '/admin/:id',
  passport.authenticate('jwt', { session: false }),
  postController.getById
)

router.put(
  '/admin/:id',
  passport.authenticate('jwt', { session: false }),
  postController.update
)

router.delete(
  '/admin/:id',
  passport.authenticate('jwt', { session: false }),
  postController.remove
)


// Base
// /api/post
router.get('/', postController.getAll)

router.get('/:di', postController.getById)

router.put('/add/view/:id', postController.addView)


module.exports = router
