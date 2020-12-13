//var data = JSON.parse(fs.readFileSync("./data_matches.json"));
var data = require("../src/Data/data.json");
const {League} = require("../src/models/league");

var league = new League();
league.fromJson(data);

module.exports = (req,res) => {

    if (req.method == 'GET'){
        var name = req.query.name;
        var date = req.query.date;
        var matches 

        // if we dont pass name nor date we assume we want every match
        if (name == null && date == null){
            res.status(200).send(league.matches);
        }else {
            if ( name != null){
                // check first if the player is playing the league
                if (league.isPlayerInTheLeague(name)){
                    matches = league.getMatchesOfPlayer(name);
                    
                    if ( matches.length > 0){
                        res.status(200).send(matches)
                    }else {
                        res.status(204).send({status: "Player has not played yet"})
                    }
                }else {
                    res.status(204).send({status: "Bad request, that player is not in our league"})
                }
            }else if ( date != null){
                matches = league.getMatchesOfToday(date);
                
                if ( matches != null){
                    res.status(200).send(matches)
                }else {
                    res.status(204).send({status: "There are no matches today"});

                }
            }
        }

    }else if (req.method == 'POST'){
        
        var myJson = JSON.parse(req.body);

        var validData = league.checkDataMatch(myJson);

        if ( validData){
            var match = league.addMatchFromAPI(myJson, false);
            res.send(201).send({status: "Posted, new match id: " + match.id });
        }else {
            res.status(404).send({status: "Bad request, json format not accepted "});
        }

    }else if (req.method == "PUT"){
        
        
        var myJson = JSON.parse(req.body);

        var validData = league.checkDataMatchWithId(myJson);

        if(validData){
            console.log("is valid")
            var match = league.getMatch(myJson.id);
            if ( match == null){
                res.status(404).send({status: "Bad request, no match found "});
            }else{

                league.updateMatch(myJson);
                res.status(200).send({status: "Updated match id: "+ match.id });
            }

        }else {

            res.status(404).send({status: "Bad request, json format not accepted "});
        }
    }
}