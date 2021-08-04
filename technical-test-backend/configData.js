const Player = require('./src/model/playersModel');
const axios = require('axios');

async function player(){
   const players = await Player.find();
   if(players.length > 0) return console.log('los jugadores ya estan registrados');
    else{
        axios.default.get(`https://www.easports.com/fifa/ultimate-team/api/fut/item?page=1`)
        .then(async (response) =>{  
            response.data.items.forEach(async (element)  =>  {
              let player = {
                    name: element.name,
                    club: element.club.abbrName,
                    nation: element.nation.abbrName,
                    position: element.position
                };
                const newPlayer =  new Player(player);
                await  newPlayer.save(); 
            }); 
            return console.log('jugadores registrados exitosamente');  
           
        });
    }
 }
 player();