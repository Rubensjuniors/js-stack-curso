const { Router } = require('express');
const ContactCotroller = require('./app/controllers/ContactCotroller');

const router = Router();

router.get(
  '/contacts',
  (request, response, next) => {
    console.log('middlerware');

    next();
  },
  ContactCotroller.index,
);
router.get('/contacts/:id', ContactCotroller.show);
router.get('/contacts/:id', ContactCotroller.delete);
router.post('/contacts', ContactCotroller.store);
router.put('/contacts/:id', ContactCotroller.update);

module.exports = router;
