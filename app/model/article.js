'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const UserSchema = new mongoose.Schema({
    title: { type: String },
    auther: { type: String },
    subTitle: { type: String },
    content: { type: String },
    createTime: { type: String },
  });

  return mongoose.model('Article', UserSchema);
};
