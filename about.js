console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submitted successfully!');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let catpic = document.querySelector('img')
catpic.addEventListener('mouseover', () => {
	alert(`You're great!`)
})