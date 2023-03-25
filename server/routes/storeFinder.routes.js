const StoreFinderController = require('../controllers/storeFinder.controller');

module.exports = (app) => {
  app.get('/api', StoreFinderController.getAll);
  app.post('/api/stores/add', StoreFinderController.create);
  app.get('/api/stores/:id', StoreFinderController.getOne);
  app.put('/api/stores/edit/:id', StoreFinderController.update);
  app.delete('/api/stores/:id', StoreFinderController.delete)
};