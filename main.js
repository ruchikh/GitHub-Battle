var battle_btn = document.querySelector('.battle-btn');
var maindiv = document.querySelector('.main');
var winner = document.querySelector('.win');
var header = document.querySelector('.header')

var store1;
var store2;

function battelPage(){

	var div = document.createElement('div');
	div.innerHTML = `<section class="main-section"><div><h2>Player One</h2> <input type="text" value="" class="input-value"/><button class="user-btn" >Submit</button></div>
	<div><h2>Player Two</h2> <input type="text" value="" class="input2-value"/><button class="user-btn2" >Submit</button></div>
</section>`
	maindiv.appendChild(div);
	var input1 = document.querySelector('.input-value');
	var btn1 = document.querySelector('.user-btn');

	btn1.addEventListener('click', function userDetails(){
	var data = fetch(`https://api.github.com/users/${input1.value}`).then(d => d.json()).then(data => store1 = data).then(displayData);

});

	var input2 = document.querySelector('.input2-value');
	var btn2 = document.querySelector('.user-btn2');
	btn2.addEventListener('click', function userDetails2(){
	var data = fetch(`https://api.github.com/users/${input2.value}`).then(d => d.json()).then(data => store2 = data).then(displayData2);

});
	 header.style.display = "none";
}


	function displayData(){
		console.log('store1', store1.name)
		var mainSection = document.querySelector('.main-section')
		var displayDiv = document.createElement('div')
		var img = document.createElement('img')
		img.setAttribute('src', `${store1.avatar_url}`)
		displayDiv.innerHTML = `<br> User-Name:${store1.name}<br> Followers: ${store1.followers} <br> Following: ${store1.following} <br> public_repos: ${store1.public_repos} <br> url: ${store1.url}`;
		mainSection.appendChild(displayDiv);
		displayDiv.prepend(img);
	}

function displayData2(){
		console.log('store2',store2.name)
		var mainSection = document.querySelector('.main-section')
		var displaySecondUser = document.createElement('div')
		var img = document.createElement('img')
		img.setAttribute('src', `${store2.avatar_url}`)
		displaySecondUser.innerHTML = `<br> User-Name:${store2.name}<br> Followers: ${store2.followers} <br> Following: ${store2.following} <br> public_repos: ${store2.public_repos} <br> url: ${store2.url}`;
		mainSection.appendChild(displaySecondUser);
		displaySecondUser.prepend(img);
		battleFunc();
	}

function battleFunc() {
	console.log('ssavdkadgjasdbkjad');
	var mainSection = document.querySelector('.main-section')
	var battleStart = document.createElement('button');
	battleStart.innerText = "Start Battle"
	mainSection.appendChild(battleStart);
	battleStart.addEventListener('click', battleFunction);
}

function battleFunction(){
	var user1 = store1.public_repos + store1.followers ;
	var user2 = store2.public_repos + store2.followers ;
	if(user1 > user2){
		win.textContent = `${store1.name} is Winner`;
	}else if(user2 > user1){
		win.textContent=`${store2.name} is Winner`;
	}

}







battle_btn.addEventListener('click',  battelPage);





