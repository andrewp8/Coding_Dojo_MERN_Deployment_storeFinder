const { storeFinders } = require('../models/storeFinder.model');
module.exports = {
  getAll: (req, res) => {
    // storeFinders.find()
    storeFinders.aggregate([{ $sort: { storeNumber: 1 } }])
      .then(allStoreFinders => {
        res.json(allStoreFinders)
      })
      .catch(err => {
        res.status(400).json({ message: 'Something went wrong', error: err })
      });
  },
  getOne: (req, res) => {
    storeFinders.findOne({ _id: req.params.id })
      .then(storeFinder => {
        res.json(storeFinder)
      })
      .catch(err => {
        res.status(400).json({ message: 'Something went wrong', error: err })
      });
  },
  create: (req, res) => {
    storeFinders.create(req.body)
      // storeFinders.createIndex({ ...req.body, storeNumber }, { storeNumber: { unique: true } })
      .then(storeFinder => res.json(storeFinder))
      .catch(err => {
        res.status(400).json({ message: 'Something went wrong', error: err })
      })
  },
  update: (req, res) => {
    storeFinders.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then(updatedStoreFinder => {
        res.json(updatedStoreFinder)
      })
      .catch(err => {
        res.status(400).json({ message: 'Something went wrong', error: err })
      })
  },
  delete: (req, res) => {
    storeFinders.deleteOne({ _id: req.params.id })
      .then(delConfirm => {
        res.json(delConfirm);
      })
      .catch(err => {
        res.status(400).json({ message: 'Something went wrong', error: err })
      });
  }
}

