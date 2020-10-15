class Player {
    constructor(id, name, email, tlf, level){
        this.id = id;
        this.name = name;
        this.email = email;
        this.tlf = tlf;
        this.level = level;
        this.age = age;
    }


    // getters

    get id(){return this.id;}

    get name(){return this.name;}

    get email(){return this.email;}

    get tlf(){return this.tlf;}

    get level(){return this.level;}

    get age(){return this.age;}

    // setters

    set id(id){this.id = id;}

    set name(name){this.name = name;}

    set email(email){this.email = email;}

    set tlf(tlf){this.tlf = tlf;}

    set level(level){this.level = level;}

    set age(age){this.age = age;}


    static validAge(age){
        return age > 0 ? true : false;
    }

    static validLevel(level){
        return level> 0 && level <4 ? true: false;
    }

    static isAtlf(tlf){
        
    
        return !isNaN(tlf) && tlf.toString().length == 9 ;
    }

}

module.exports = Player;