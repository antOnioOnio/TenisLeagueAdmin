//var data = JSON.parse(fs.readFileSync("./data_matches.json"));
var data = require("./data_matches.json");
const League = require("../src/models/league");

var league = new League();
league.fromJson(data);

module.exports = (req,res) => {
    console.log(req.query);
    console.log(req.query.name);

    
    if (req.method == 'GET'){
        var name = req.query.name;

        if (league.isPlayerInTheLeague(name)){
            var matches = league.getMatchesOfPlayer(name);
            console.log(matches);
            res.json({
                matches
            })
        }
    }
}