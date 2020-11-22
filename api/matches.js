//var data = JSON.parse(fs.readFileSync("./data_matches.json"));
var data = require("./data_matches.json");
const League = require("../src/models/league");

module.exports = (req,res) => {
    console.log(req.query);
    console.log(req.query.name);

    if (req.method == 'GET'){
    
        var league = new League();

        league.fromJson(data);

        res.json([
            {nombre : "Paquito"},
            {nombre : "Alfonsito"},
        ])
    }else{

    }
}