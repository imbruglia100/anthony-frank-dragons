const FriendlyDragon = require("./classes/friendly-dragon");
const EvilDragon = require("./classes/evil-dragon");
const Dragon = require("./classes/dragon");

let lifeGoals = ["save Atreyu from the swamp", "save Atreyu from the Nothing", "scare the local bullies into a dumpster"];
let evilDoings = ["take over your mountain kingdom", "steal all your dwarven gold", "burn down your floating village"];


const falkor = new FriendlyDragon("Falkor", "white", lifeGoals, "Bastian" );

const smaug = new EvilDragon("Smaug", "black", evilDoings, "Dwarf King");

let allDragons = Dragon.getDragons(falkor, smaug);


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports.falkor = falkor
  module.exports.smaug = smaug
  module.exports.allDragons = allDragons;
} catch {
  module.exports = null;
}
