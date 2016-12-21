
//=============================================================================
/*                                  Part 2                                   */
//=============================================================================
 /*

  Hint: write the function in question (b, c, d) outside the Player scope 

  Note : do not use (for, while, recursion) but you allowed to use the High order function
    like (.map, .each, .filter, .reduce,.....) if you don't know how to use it just Google it 
 
 today we will create a football team using what we learn,

 	a - we need to create the players using OOP the player declaration
    should take the name of the player  	==> var player1 = Player("jony")

  b - after that we need function to add the other info for the player with addInfo function
		==> player1.addInfo(age, position, level, availability );

	c- and create another function to increase the the level for the player by n value 
		==> player1.increaseLevel(4); 

	d - we need another function to check if the player is available or not it should return true or false
		==> player1.isAvailable();  true / false

	e - then we need to create 4 players and add the info for them and put them inside the arrayOfPlayers

	f - write function to iterate over the all players to decrease the level for the player if age larger the 30

  g - sort the players in the arrayOfPlayers by the key
		sortPalyerBy(arrayOfPlayers, "age");
		sortPalyerBy(arrayOfPlayers, "name");
		*/

//writ your code here .....

var arrayOfPlayers = [] ; 
var Player = function(name){
	var players ={};
	players.name = name;
	players.addInfo = addInfo;
	players.increaseLevel =increaseLevel ;
	players.isAvailable = isAvailable;
	players.decrease = decrease ;
	players.sortPalyerBy = sortPalyerBy;

	return players ;
}


var addInfo = function(age, position, level, availability){
	return arrayOfPlayers.push({
		name:this.name,
		age:age,
		position:position,
		level:level,
		availability:availability
	})
}
var increaseLevel = function(n){
	var c=this.name
	arrayOfPlayers.forEach(function(elem , i){
		if(elem['name']===c){
			elem['level']= elem['level'] + n ;
		}
	})
}

var isAvailable = function(){
	var n = this.name;
	var x = false;
	arrayOfPlayers.forEach(function(elem, i){
		if(elem['name']===n){
			x =elem['availability'] ;
		}
	})
	return x;
	
}

var decrease = function(){
	arrayOfPlayers.forEach(function(elem ,i){
		if (elem['age'] > 30){
			elem['level']=elem['level'] -1
		}
	})
}

var sortPalyerBy = function(array , key){
	return  array.sort(function(a,b){
		return a[key] - b[key]
	})
}

var player1 = Player("Jony");
var player2 = Player("Ibrahim");
var player3 = Player("Fatima");
var player4 = Player("Majd");

player1.addInfo(33 , "xx" , 3 , true)
player2.addInfo(23 , "yy" , 1 , false)
player3.addInfo(31 , "kk" , 5 , true)
player4.addInfo(25 , "zz" , 8 , false)