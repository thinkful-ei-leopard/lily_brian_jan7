'use strict';

function createCharacter(name, nickname, race, origin, attack, defence){
  return {
    name: name,
    nickname: nickname,
    race: race,
    origin: origin,
    attack: attack,
    defence: defence,
    describe: function(){
      console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
    },
    evaluateFight: function(character){
      if (this.defence > character.attack){
        console.log('You took no damage');
      }
      else{
        let x = character.defence - this.attack;
        let y = this.defence - this.attack;
        console.log(`Your opponent takes ${x} damage and you recieve ${y} damage`);
      }
    }
  };
}

const characters = [createCharacter('Gandalf the White', 'gandalf','Wizard', 10, 6)]

//still need to check if this works, left off at the 'Using array literal syntax' bullet