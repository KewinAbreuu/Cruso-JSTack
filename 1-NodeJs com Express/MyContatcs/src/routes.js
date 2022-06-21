const { Router } = require('express')

const ContactControler = require('./app/controllers/ContactController')

const router = Router()

router.get('/contacts', ContactControler.index)
router.get('/contacts/:id', ContactControler.show)
router.delete('/contacts/:id', ContactControler.delete)

module.exports = router
