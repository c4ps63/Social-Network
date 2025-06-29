class User {
	user_id = '';
	username = '';
	email = '';
	password = '';
	api_url = 'https://6860df148e748640844437ac.mockapi.io';

	create() {
		let data = {
			username: this.username,
			email: this.email, 
			password: this.password
		}

		//Converting data into json
		data = JSON.stringify(data)

		fetch(this.api_url + '/Users', {
			method: 'POST',
			headers: {   								//What do we actually send to the server (JSON)
				'Content-Type': 'application/json'
			},
			body: data
		})
		.then(response => response.json()) 				//When user is created it will return JSON and say User created
		.then(data =>{
		//console.log('User created')
		
		//Creating session
		let session = new Session()
		session.user_id = data.id; 						//We use user_id that we got as returned information
		session.startSession()

		window.location.href = 'hexa.html'				//Redirecting user to hexa if all goes well
		})
	}

	login(){
		fetch(this.api_url + '/Users')
		.then(response => response.json()) 				//No need to specify method if it is GET method
		.then(data => {
		/*
		1. console.log(data) Returns all data from database
		2. We will use loop to go through all of them
		3. Compare it with the ones we god in the login form
		*/
			let login_successful = 0
			data.forEach(db_user => {
				if(db_user.email === this.email && db_user.password === this.password) {
					
					let session = new Session()
					session.user_id = db_user.id
					session.startSession()

					login_successful = 1
					window.location.href = 'hexa.html'
				} 
			})

			if(login_successful === 0) {
				alert('Wrong email or password!')
			}
		})
	}
}