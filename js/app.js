let session = new Session()
session = session.getSession()  //taking cookie

if(session !== "") {  //if cookie exists, user goes to hexa
	window.location.href = "hexa.html"
}

//Registration pop-up modal control

document.querySelector('#registration').addEventListener('click', ()=>{
	document.querySelector('.custom-modal').style.display = 'block'
})

document.querySelector('#closeModal').addEventListener('click', ()=>{
	document.querySelector('.custom-modal').style.display = 'none'
})

//Validator configuration

let config = { 
	'username': {
		required: true, 
		minlength: 5,
		maxlength: 50
	},
	'registration_email': {
		required: true,
		email: true,
		minlength: 5,
		maxlength: 50
	},
	'registration_password': {
		required: true,
		minlength: 8,
		maxlength: 25,
		matching: 'repeat_password'
	},
	'repeat_password': {
		required: true,
		matching: 'registration_password'
	}
}

let validator = new Validator(config, '#registrationForm')

//User registration

document.querySelector('#registrationForm').addEventListener('submit', e=>{
	e.preventDefault()

	if(validator.validationPassed()){

		let user = new User()
		user.username = document.querySelector('#username').value
		user.email = document.querySelector('#registration_email').value
		user.password = document.querySelector('#registration_password').value

		user.create()

	} else {
		alert('form is not filled correctly!')
	}
})





























