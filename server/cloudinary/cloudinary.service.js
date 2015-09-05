var config = require('../config/environment');
var cloudinary = require('cloudinary');

function upload(file) {
  return cloudinary.uploader.upload(file);
}

function remove(publicId) {
  return cloudinary.api.delete_resources([publicId]);
}

exports.upload = upload;
exports.remove = remove;
