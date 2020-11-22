//var data = JSON.parse(fs.readFileSync("./data_matches.json"));
var data = require("./data.json");
const League = require("../src/models/league");

var league = new League();
league.fromJson(data);

module.exports = (req,res) => {
    
    if (req.method == 'GET'){
        var name = req.query.name;

        if (name == null){
            res.status(200).send(league.players);
        }else {
            if (league.isPlayerInTheLeague(name)){

                var player = league.getPlayerByName(name);

                res.status(200).send(player);
                
            }else {
                res.status(200).send("Este jugador no juega la liga")
            }
        }
    }else if (req.method == 'POST'){

        const { name, email, tlf, level, age } = req.body;
        
        var myJson = JSON.parse(req.body);

        var player = league.addPlayerFromAPI(myJson);

        res.status(200).send({status: "Posted, new player id: "+ player.id });

    }
}