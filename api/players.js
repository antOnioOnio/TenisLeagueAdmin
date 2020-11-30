//var data = JSON.parse(fs.readFileSync("./data_matches.json"));
var data = require("./data.json");
const League = require("../src/models/league");

var league = new League();
league.fromJson(data);

module.exports = (req,res) => {
    
    
    if (req.method == 'GET'){
        var name = req.query.name;

        // If we dont pass any name we assume we want every player
        if (name == null){
            res.status(200).send(league.players);
        }else {
            // lets check if the name we´ve passed is actually playing our league
            if (league.isPlayerInTheLeague(name)){
                
                // get our player and returns it
                var player = league.getPlayerByName(name);

                res.status(200).send(player);
                
            }else {
                res.status(404).send("Bad request, that player is not in our league")
            }
        }
    }else if (req.method == 'POST'){
        
        var myJson = JSON.parse(req.body);

        var validData = league.checkDataPlayer(myJson);

        if ( validData){
            var player = league.addPlayerFromAPI(myJson,false);
    
            res.status(200).send({status: "Posted, new player id: "+ player.id });
        }else {
            res.status(404).send({status: "Bad request, json format not accepted "});
        }
            
    }else if (req.method == "PUT"){
        
        var myJson = JSON.parse(req.body);

        var validData = league.checkDataPlayerWithId(myJson);

        if(validData){

            var player = league.getPlayerById(myJson.id);
    
            if ( player == null ){
                res.status(404).send({status: "Bad request, no player found "});

            }else {
                league.updatePlayer(myJson);
                res.status(200).send({status: "Updated player id: "+ player.id });
            }

        }else {
            res.status(404).send({status: "Bad request, json format not accepted "});
        }

    }
}