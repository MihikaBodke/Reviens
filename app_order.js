// Initialize Firebase
var config = {
	apiKey: "AIzaSyBoHuRSqFvoYhhgZlm0Hvbr8KCSHSqC7F8",
	authDomain: "reviens2-239ca.firebaseapp.com",
	databaseURL: "https://reviens2-239ca.firebaseio.com",
	projectId: "reviens2-239ca",
	storageBucket: "reviens2-239ca.appspot.com",
	messagingSenderId: "434928585529"
  };
  firebase.initializeApp(config);
  

const dbRef = firebase.database().ref();
const usersRef = dbRef.child('Requests');
const userListUI = document.getElementById("userList");
const button1=document.getElementById("next");
usersRef.on("child_added", snap => {

	let user = snap.val();

	let $li = document.createElement("li");
	$li.innerHTML = user.name;
	$li.setAttribute("child-key", snap.key);
	$li.addEventListener("click", userClicked)
	
	userListUI.append($li);
});

function confirmed()
	{
		var credRef=firebase.database().ref('users/'+sapid);
		credRef.on("child_added", snap => {
			if(snap.key=='credits')
			{
				creds=snap.val()
			}});
			creds=parseInt(creds);
			total=total.slice(-5,-3);
			total=parseInt(total);
			if(creds>total)
			{
			creds=creds-total;
			var credRef=firebase.database().ref('users/'+sapid);
			credRef.update({'credits':creds}); 
			alert("Confirmed");
			}
			else
			{
				alert("Balance Low");
			}
	}
function prepared()
	{
		//var userRef=firebase.database().ref('Requests/'+userID);
		//userRef.update({'status':2});
		alert("Prepared");
	}

	
function userClicked(e) {
	
	userID = e.target.getAttribute("child-key");
	const userRef = dbRef.child('Requests/'+userID);
	const userDetailUI = document.getElementById("userDetail");
	userDetailUI.innerHTML = ""
	userRef.on("child_added", snap => {
		var $p = document.createElement("p");
		if(snap.key=='sapid')
		{
			sapid=snap.val()
		}
		else if(snap.key=='total')
		{
			total=snap.val()
		}
		if(snap.key!='foods')
		{ if(snap.key=='status')
			{
				$p.innerHTML = snap.key  + " - Placed";
			}
			else{
			
			}
		userDetailUI.append($p);
		}
	});
	
	userRef.child("foods").on("value", function val1(snapshot) {
	val=snapshot.numChildren();
	return val;
	})
	if(val<=1)
	{	i=0;
		display(i);
		const userDetailUI = document.getElementById("userOrder1");
				userDetailUI.innerHTML = " "
	}
	else if(val>1)
	{
		i=0;
		display(i);
		i++;
		display1(i);
	}
	
	
	
	function display(i)
	{
				const userRef = dbRef.child('Requests/'+userID+'/foods/'+i);
				const userDetailUI = document.getElementById("userOrder");
				userDetailUI.innerHTML = ""
				userRef.on("child_added", snap => {
				var $p = document.createElement("p");
				$p.innerHTML = snap.key  + " - " +  snap.val();
				userDetailUI.append($p);
				});	
	}
	function display1(i)
	{
				const userRef = dbRef.child('Requests/'+userID+'/foods/'+i);
				const userDetailUI = document.getElementById("userOrder1");
				userDetailUI.innerHTML = ""
				userRef.on("child_added", snap => {
				var $p = document.createElement("p");
				$p.innerHTML = snap.key  + " - " +  snap.val();
				userDetailUI.append($p);
				});	
	}
	
}
