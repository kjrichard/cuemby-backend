const { urlencoded } = require('express');
const Admin = require('../model/adminModel');
const jwt = require('jsonwebtoken');
const config = require('../../config');
const adminModel = require('../model/adminModel');
const verifyToken = require('../middelwares/authenticated');
const authCtrl = {};

authCtrl.signup = async (req, res) =>{
    const { username, email, password } = req.body;
    if (!username || !password || !email) return res.status(400).send("Todos los campos son obligatorios");
    try {
        const admin = new Admin({  username, email,  password });
        const findEmail = await Admin.findOne({email: email});
        if(findEmail) return res.status(200).send({message: 'El email esta en uso'});
        if(!findEmail){
            admin.password = await admin.encryptPassword(password);
            await admin.save();
            const token = jwt.sign({ id: admin.id }, config.privateKey, { expiresIn: 60 * 60 * 24});
            res.json({ auth: true, admin, token });
        }
    } catch (e) {
        console.log(e);
        res.status(500).send("Ocurrio un problema al registrar al usuario");
    }
} 

authCtrl.signin = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    if (!password || !email) return res.status(400).send({status: 400, message: "Todos los campos son obligatorios"});
    try {
        const admin = await Admin.findOne({email: req.body.email});
        if(!admin) return res.status(404).send({status: 404, message: 'El email no existe'});
        const validPassword = await admin.comparePassword(req.body.password, admin.password);
        if(!validPassword) return res.status(401).send({estatus: 401, message: 'Contraseña incorrecta', auth: false, token: null});
        const token = jwt.sign({ id: admin.id }, config.privateKey, { expiresIn: 60 * 60 * 24, });
        return res.status(200).send({ status: 200, message: 'Autenticacion Exitosa', admin, token });
      
    } catch (e) {
        console.log(e);
        res.status(500).send("Ocurrio un problema al registrar al usuario");
    }
}
module.exports = authCtrl;