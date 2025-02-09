// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}
Soldier.prototype.attack = function(){
  console.log('ataqueeee')
  return this.strength;
  
}
Soldier.prototype.receiveDamage = function(damage){
  console.log('maeshopupa ioeputa');

  this.health =  this.health - damage;

}

// Viking
function Viking(name, health, strength) {

  Soldier.call(this);

  this.name = name;
  this.health = health;
  this.strength = strength;

}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage){
  this.health =  this.health - damage;
  if(this.health > 0){
    return  this.name + ' has received '+ damage +' points of damage';
  }else{
    return this.name + ' has died in act of combat';
  }
}
Viking.prototype.battleCry = function(){
  return 'Odin Owns You All!';
}

// Saxon
function Saxon(health, strength) {
  Soldier.call(this);
  this.health = health;
  this.strength = strength;
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage){
  console.log('maeshopupa ioeputa');
  this.health =  this.health - damage;
  if (this.health > 0){
    return 'A Saxon has received '+ damage +' points of damage'
  }else{
    return 'A Saxon has died in combat'
  }
}

// War
function War() {

  this.vikingArmy = [];
  this.saxonArmy = [];

  War.prototype.addViking = function(viking){
    this.vikingArmy.push(viking);
  };

  War.prototype.addSaxon = function(saxon){
    this.saxonArmy.push(saxon);
  }
  
  War.prototype.vikingAttack = function(){
    
    function randomize(maximum){
      return Math.floor(Math.random() * maximum)
    }
    this.randomNumSaxon = randomize(this.saxonArmy.length);
    this.saxon = this.saxonArmy[this.randomNumSaxon];
    this.randomNumViking = randomize(this.vikingArmy.length);
    this.viking = this.vikingArmy[this.randomNumViking];

    this.damaged = this.saxon.receiveDamage(this.viking.strength);

    if(this.saxon.health <= 0){
      this.saxonArmy.splice(this.randomNumSaxon,1);
    }

  return this.damaged;

  }


  War.prototype.saxonAttack = function(){
    
    function randomize(maximum){
      return Math.floor(Math.random() * maximum)
    }
    this.randomNumSaxon = randomize(this.saxonArmy.length);
    this.saxon = this.saxonArmy[this.randomNumSaxon];
    this.randomNumViking = randomize(this.vikingArmy.length);
    this.viking = this.vikingArmy[this.randomNumViking];

    this.damaged = this.viking.receiveDamage(this.saxon.strength);

    if(this.viking.health <= 0){
      this.vikingArmy.splice(this.randomNumSaxon,1);
    }

  return this.damaged;

  }

  War.prototype.showStatus = function(){
    if(this.saxonArmy.length === 0){
      return 'Vikings have won the war of the century!';
    };
    if(this.vikingArmy.length === 0){
      return 'Saxons have fought for their lives and survive another day...';
    };
      return 'Vikings and Saxons are still in the thick of battle.';
  };
};
