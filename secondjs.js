var gitHub = localStorage.getItem('go');
var url = 'https://api.github.com/users/' + gitHub;

function gitInfo() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, false);
	xhr.send();
	if(xhr.status == 200 && xhr.readyState == 4) {
		var data = JSON.parse(xhr.responseText);
		console.log(data);
		var images = data.avatar_url;
		var log = data.login;
		var respons = data.public_repos;
		var date = data.created_at;
		var urlHtml = data.html_url;
		infoAll(images, log, respons, date, urlHtml);
	}
}

	gitInfo();

	function infoAll(imag, login, repos, data, url) {
		document.getElementById('first').innerHTML = '<img id="imag" src=' + imag + '/>';
		document.getElementById('first').innerHTML +='<div id="logo">' + login + '</div>';
		document.getElementById('second').innerHTML += '<div id="rep">' + "Количество репозиториев: " + repos + '</div>';
		document.getElementById('second').innerHTML += '<div id="dat">' + 'Дата регистрации: ' + data + '</div>';
		document.getElementById('footer').innerHTML += '<a id="gogo" target="_blank" href=' + url + '>Страница GitHub</a>'
	}