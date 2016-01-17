//Saturday 13:00

//apply({},arguments); - вміє приймати...


var a = "Hello!";


/*
document.write('<h1>write</h1>');

window.onload=function(){
	document.write('<h3>h3 tag</h3>');
	document.write('<h3>'+a+'</h3>');
};

var d = document.createElement('div');
d.innerHTML = '<h1>' + a + '</h1>';
document.body.appendChild(d);
*/


window.onload=function(){
	var d = document.createElement('div');
	var h = document.createElement('h1');
	h.innerHTML = a;
	d.appendChild(h);
	h.onclick = function(){alert('Hello!')}
	document.body.appendChild(d);
}


//?????

/*
var users= [];
users.push({name:'A', age:'18'});
users.push({name:'abc', age:'20'});
var template = document.getElementById('template').innerHTML;
	for (var i = 0; i < users.length; i++){
		document.getElementById('content').innerHTML+=parseTemplate(users[i]);
	};

function parseTemplate(data){
	var result = template;
	for (var k in data){
		result = result.replace(k.toUpperCase(), data[k]);
	}
	return result;
}
*/


//	Singleton
//	Handlebars


/*
var users= [];
users.push({name:'A', age:'18'});
users.push({name:'abc', age:'20'});
var template = document.getElementById('template').innerHTML;
	for (var i = 0; i < users.length; i++){
		document.getElementById('content').appendChild(parseTemplate(users[i]))
	};

function parseTemplate(data){
	var result = template;
	for (var k in data){
		result = result.replace(k.toUpperCase(), data[k]);
	}
	var d = document.createElement('div');
	d.innerHTML = result;
	return d;
}
*/




var USERS= [];
USERS.push({name:'A', age:'18'});
USERS.push({name:'abc', age:'20'});

	for (var i = 0; i < USERS.length; i++){
		addUser(USERS[i]);
	};


function BuildUser(data){
	var d = document.createElement('div');
	var p1 = document.createElement('p');
	p1.innerHTML = data.name;
	var p2 = document.createElement('p');
	p2.innerHTML = data.age;
	d.appendChild(p1);
	d.appendChild(p2);

	var b = document.createElement('button');
	b.innerHTML = 'delete';
	b.onclick = function(){
		deleteUser(data, d);
	}
	d.appendChild(b);

	return d;
}

function addUser(user){
	document.getElementById('content').appendChild(BuildUser(user));
}

function newUser(){
	var user = {
		name:document.getElementById('name').value,
		age:document.getElementById('age').value
	}
	addUser(user);
	USERS.push(user);
}

Array.prototype.without = function(item){
	var n = [];
	for (var i=0; i<this.length; i++){
		if (notequil(this[i], item)){
			n.push(this[i]);
		}
	}
	return n;
}

function notequil(a,b){
	return JSON.stringify(a)!=JSON.stringify(b);
}
function deleteUser(user, d){
	USERS = USERS.without(user);
	d.parentElement.removeChild(d)
}


//HomeWork
