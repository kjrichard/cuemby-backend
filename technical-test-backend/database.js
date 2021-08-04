
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://kjrichard:J@ir0425@cluster0.kqfsu.mongodb.net/cuembyDB?retryWrites=true&w=majority', {useUnifiedTopology:true,useNewUrlParser: true})
    .then(()=>{
        console.log('conexion exitosa a la base de datos.');
    })
    .catch(err=> console.log(err));
   
