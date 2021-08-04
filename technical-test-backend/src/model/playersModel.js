const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');

const playerSchema = new Schema(
   { 
    name: String,
    club: String,
    nation: String,
    position: String

   },
   {
       timestamps: true,
       versionKey: false
   }
);
playerSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Player', playerSchema);