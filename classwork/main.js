function avatar(name, race, attack, weapon) {

	// function weapon(guess) {
	// 	// 	var avatarWeapon = 'wand';

	// 	// if(guess == avatarWeapon) {
	// 	// 	return true;
	// 	// }
	// }
	this.name = name;
	this.race = race;
	this.attack = attack;
	this.allies = ['john',
	'jimmy'
	];
	this.specialMove = function() {
		return 'Special Move just activated';
	};
	this.weapon = function(guess) {
		if(guess == weapon){
			return true;
		}
	};
}

var mage = new avatar('Doug', 'wizard', 'magic', 'sword');

console.log(mage);
