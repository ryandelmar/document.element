html files

<p class="stem">Donald Trump</p>
<p class="stem">Hitler</p>
<p class="stem">Kim Jong Un</p>
<p class="stem">Kim Kardishian</p>

<button onclick="deathNote()">Random Death</button>

js file

function deathNote() {
	var death = Math.floor(Math.random()*4);
	document.getElementsByClassName('stem')[death].innerHTML = "<img src= 'https://upload.wikimedia.org/wikipedia/en/3/30/Ryukk.png' width='20%'>"
}
