const { Router } = require('express');
const ContactCotroller = require('./app/controllers/ContactCotroller');
const CategoriesControllers = require('./app/controllers/CategoriesControllers');

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
router.delete('/contacts/:id', ContactCotroller.delete);
router.post('/contacts', ContactCotroller.store);
router.put('/contacts/:id', ContactCotroller.update);

router.get('/categories', CategoriesControllers.index);
router.get('/categories/:id', CategoriesControllers.show);
router.delete('/categories/:id', CategoriesControllers.delete);
router.post('/categories', CategoriesControllers.store);
router.put('/categories/:id', CategoriesControllers.update);

module.exports = router;
