module.exports = (req,res) => {
    console.log(req.query);
    console.log(req.query.name);
    
    if (req.method == 'GET'){
        res.json([
            {nombre : "Paquito"},
            {nombre : "Alfonsito"},
        ])
    }else{

    }
}