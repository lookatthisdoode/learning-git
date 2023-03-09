var database = [
	{
		username: "andrei",
		password: "123"
	},
	{
		username: "jaro",
		password: "123"
	},
	{
		username: "sasha",
		password: "123"
	},
	{
		username: "jim",
		password: "123"
	},
	{
		username: "pam",
		password: "123"
	},
	{
		username: "michael",
		password: "123"
	},
	
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [
	{
		username: "Bobby \n",
	  	timeline: "So tired from all that learning! \n \n "
	},
	{
		username: "Sally \n",
		timeline: "Javascript is sooooo cool! \n \n "
	},
	{
		username: "Mitch \n",
		timeline: "Javascript is preeetyy cool! \n \n "
	}
];

var userNamePrompt;
var passPrompt;

var news = document.getElementById('news');
var btn = document.getElementById('btn');




function userValid() {
	var userNamePrompt = prompt("What`s your username?");
	var passPrompt = prompt("What`s your password?");
	for (var i = database.length - 1; i >= 0; i--) {
		if (userNamePrompt === database[i].username && passPrompt === database[i].password){
			return true;
		}
	}
	return false;
}



function signIn() {
	if (userValid()){
		news.innerText = "";
		for (var i = newsfeed.length - 1; i >= 0; i--) {
		news.innerText += newsfeed[i].username;
		news.innerText += newsfeed[i].timeline;
		} 
		btn.innerText = "Logout";
		document.getElementById("btn").setAttribute("onclick", "signOut()");
		return;
	} else {
		alert("Try again")
	}
}

function signOut() {
	news.innerText = "";
	news.innerText = "Hello, welcome to Bookface";
	btn.innerText = "Login";
	document.getElementById("btn").setAttribute("onclick", "signIn()");
}

function bravo6() {
	document.querySelector("body").classList.toggle("dark");
}