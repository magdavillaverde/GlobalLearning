class Heroe {
  name
  position
  life
  dano
  experience

  //constructor (name) {
  constructor (name="heroe") {
      //this.name = name || "heroe";
      this.position = "00";
      this.life = 100;
      this.dano = 5;
      this.experience = 0;     
  }
}

function heroeName(name){
const Name = new Heroe (name);
console.log(Name);
}

heroeName("Spier");