

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let counter = 0

function increment(){
	
	counter ++
	countEl.textContent = counter
}

function save() {
	
	let saveStr = " " + counter + " - "
	saveEl.textContent += saveStr
	counter = 0
	countEl.textContent = counter

}