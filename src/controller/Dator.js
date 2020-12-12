
/**
 * @abstract
 */
class Dator{
    
    constructor(){
        if (this.constructor === Dator) {
            throw new TypeError('Abstract class "Dator" cannot be instantiated directly.'); 
        }
    }

    newLeague(league){
        throw new TypeError('This method has to be implemented'); 
    }

    getLeagues(){
        throw new TypeError('This method has to be implemented');
    }

    getLeague(year){
        throw new TypeError('This method has to be implemented');
    }

    getPlayer(id){
        throw new TypeError('This method has to be implemented');
    }

    addPlayer(player, leagueId){
        throw new TypeError('This method has to be implemented');
    }

    updatePlayer(player){
        throw new TypeError('This method has to be implemented');
    }

    addMatch(match, leagueId){
        throw new TypeError('This method has to be implemented');
    }

    getMatch(id){
        throw new TypeError('This method has to be implemented');
    }

    updateMatch(match){
        throw new TypeError('This method has to be implemented');
    }



}

module.exports ={ Dator };