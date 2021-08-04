const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');



const adminSchema = new Schema(
   { 
    username: String,
    password: String,
    email: String,
    image: String
   },
   {
       timestamps: true,
       versionKey: false
   }
);

adminSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

adminSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};


module.exports = mongoose.model('Admin', adminSchema);
