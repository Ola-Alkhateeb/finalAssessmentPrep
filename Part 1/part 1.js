//=============================================================================
/*                                  Part 1                                   */
//=============================================================================
/* (1) Think of some way to represent all of the students in RBK cohort2, if you know
		that each one have the following attributs:
		- name - age - education - nationality

	a- represent 2 of your frineds in rbk using the model that you have made and name them as your frineds name

	b- create a function called showFriend() that accepts one parameter, and output representation of your frined like the following
		showFriend(frinedData) // "Fatema with the age of 26 and with computer engineering education" 

	c- create a function called avergeStudents() to calculate the average age of your class students, is it possible to pass all your class students one by one ? think of a way to pass them in your function
	*/
// write your code here ...
var students = [] ;
function factory (name , age , education , nationality){
	students.push({
		name:name ,
		age:age,
		education:education,
		nationality:nationality 
	})
	return students ;
}

factory("Marwa", 24 , "CS","Syrian")
factory("Sajeda", 23, "CIS" , "Jordanian")

function showStudent(obj){
	return obj['name']+" with the age of "+ obj['age'] + " and with " +obj['education']+" education " ;
}


function avergeStudents(array){
	var sum = 0 ;
	for (var i = 0; i < array.length; i++) {
		sum+=array[i]['age'];
	}
	return sum/(array.length)
}

/*
 b-create a function called rangeSquared in which it will accept two parameters, and will output the squared numbers between these two parameter if the number is even 
	in order to square the numbers create a function called square and call it inside rangeSquared function
	rangeSquared(2)// [4];
	rangeSquared(3) // null
	rangeSquared(2,10)// [4,16,12,16,100];
	*/
// write your code here ...

function square(n){
	return n*n ;
}

function rangeSquared(start , end){
	var arr =[] ;
	if(end === undefined && start%2 === 0){
		arr.push(square(start));
	}
	for (var i = start; i <= end; i++) {
		if(i%2==0){
			arr.push(square(i))
		}
	}
	if(arr.length===0){
		return null
	}
	return arr ;
	
}


/* c- Find all leaders in an array. A leader is an element larger than all elements to the right of it.
 	Example:
	leader([98, 20, 30, 5, 11, 27]) // output: [98, 30, 27]
	*/

// write your code here ....


function leader(array){
	var arr= [] ;
	var max= array[array.length-1]
	arr.unshift(max)
for (var i = array.length - 1; i >= 0; i--) {
	if(max < array[i]){
		max = array[i]
		arr.unshift(max)
	}
}
return arr ;
}
