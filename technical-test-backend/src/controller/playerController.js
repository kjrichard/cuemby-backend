const Player = require('../model/playersModel');
const playerCtrl = {};

playerCtrl.getplayersWithTeam = async (req, res) =>{
    try {
        const {name, page} = req.body;
        const player = await Player.paginate({club: { $regex: name, $options:'i' } }, { page, limit: 10, sort: {name: 1}}, (err, result) => {
            return {
                Page: result.page,
                totalPages: result.totalPages,
                Items: result.limit,
                totalItems: result.totalDocs,
                Players: result.docs
            }
        });
        console.log(player);
        return res.send({player})
    } catch (err) {
       return  res.send({message: err.message});
    }
   
  
} 

 playerCtrl.getPlayersWithName = async (req, res) =>{
    try {
    const {search, page, order} = req.query;
    let or = order == undefined ? 1 : order;
    const player = await Player.paginate({name: { $regex: '.*' + search + '.*', $options:'i' }}, { page, limit: 10, sort: {name: or == 'asc' ? 1 :-1}},(err, result) => {
        if(err) return res.status(500).send({message: err.message});
        return {
            Page: result.page,
            totalPages: result.totalPages,
            Items: result.limit,
            totalItems: result.totalDocs,
            Players: result.docs
        }
    });
    return res.send({player})
    } catch (err) {
        return  res.send({message: err.message});
    }
  
}  

module.exports = playerCtrl;

