var bton = document.getElementById('btn');
bton.onclick = function() {
	var inp = document.getElementById('git').value;
	localStorage.setItem('go', inp);

}