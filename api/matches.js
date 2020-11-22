//var data = JSON.parse(fs.readFileSync("./data_matches.json"));
var data = require("./data.json");
const League = require("../src/models/league");

var league = new League();
league.fromJson(data);

module.exports = (req,res) => {

    if (req.method == 'GET'){
        var name = req.query.name;

        if (name == null){
            res.status(200).send(league.matches);
        }else {
            if (league.isPlayerInTheLeague(name)){
                var matches = league.getMatchesOfPlayer(name);
                
                if ( matches.length > 0){
                    res.status(200).send(matches)
                }else {
                    res.status(200).send("Este jugador todavía no ha jugado")
                }
            }else {
                res.status(200).send("Este jugador no juega la liga")
            }
        }
    }else if (req.method == 'POST'){

        const { date, played, result, player1, player2 } = req.body;
        
        var myJson = JSON.parse(req.body);

        var match = league.addMatchFromAPI(myJson);

        res.send({status: "Posted, new match id: " + match.id });

    }
}