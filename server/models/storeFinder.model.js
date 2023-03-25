const mongoose = require('mongoose');
const StoreFinderSchema = new mongoose.Schema({
  storeName: {
    type: String,
    required: [true, "Store name is required"],
    minLength: [3, "Store name must be at least 3 characters"]
  },
  storeNumber: {
    type: Number,
    required: [true, "Store number is required", { index: { unique: true, dropDups: true } }],
    min: [0, "Store number must be a number greater than 0."]
  },
  storeStatus: {
    type: Boolean,
    required: [true, "Must specify if store status is opened or not."]
  }
}, { timestamps: true });
module.exports.storeFinders = mongoose.model('storeFinders', StoreFinderSchema);