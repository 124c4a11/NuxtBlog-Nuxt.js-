const path = require('path')
const multer = require('multer')
const moment = require('moment')


const storage = multer.diskStorage({
  destination(req, file, done) {
    done(null, path.resolve(__dirname, '../..', 'static', 'img'))
  },

  filename(req, file, done) {
    done(null, `${moment().format('DDMMYY-HHmmss_SSS')}-${file.originalname}`)
  }
})


const fileFilter = (req, file, done) => {
  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
    done(null, true)
  } else {
    done(null, false)
  }
}


module.exports = multer({
  storage,
  fileFilter,
  limits: { fileSize: 1024 * 1024 * 5 }
})
