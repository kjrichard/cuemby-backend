const jwt = require('jsonwebtoken');
const config = require('../../config');

function verifyToken(req, res, next){
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.status(401).json({
            auth: false,
            message: 'Notienes autorizacion'
        })
    }
    const decode = jwt.verify(token, config.privateKey);
    req.adminId = decode.id;
    next();
   
}
module.exports = verifyToken;