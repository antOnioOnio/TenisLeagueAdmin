const enumLevels = ["PRINCIPIANTE" , "MEDIO","AVANZADO","PRO"];

class Player {
    constructor(name, email, tlf, level, age){
        this._id = '_' + Math.random().toString(36).substr(2, 9);
        this._name = name;
        this._email = email;
        this._tlf = tlf;
        this._level = level;
        this._age = age;
    }


    // getters

    get id(){return this._id;}

    get name(){return this._name;}

    get email(){return this._email;}

    get tlf(){return this._tlf;}

    get level(){return this._level;}

    get age(){return this._age;}

    // setters

    set id(id){this._id = id;}

    set name(name){this._name = name;}

    set email(email){this._email = email;}

    set tlf(tlf){this._tlf = tlf;}

    set level(level){
        var isGoodLevel = false;
        enumLevels.forEach(element => {
            if(level == element){
                isGoodLevel = true;
            }
            
        });
    }

    set age(age){
        if (age<0)
            throw new Error("edad inválida");
        else{
              this._age = age;
        }
          
    }
        

    static validAge(age){
        return age > 0 ? true : false;
    }

    static validLevel(level){
        return level> 0 && level <4 ? true: false;
    }

    static isAtlf(tlf){
        return !isNaN(tlf) && tlf.toString().length == 9 ;
    }



    toString(){
        return "id---> " +this._id + "\nName-->" +this._name ;
    }
}

module.exports = Player;