class Heroe {
    name
    position
    life
    dano
    experience
    constructor (name, position, life, dano, experience) {
        this.name = name;
        this.position = position;
        this.life = life;
        this.dano = dano;
        this.experience = experience;     
    }
}

function heroeName(name){
  const Name = new Heroe (name, "100", "100", "5","0");
  console.log(Name);
}

heroeName("spiderman");