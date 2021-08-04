const app = require('./app');
require('./database');
require('./configData');

async function init(){
   await app.listen(3000);
   console.log('server on port 3000');

}
init();
