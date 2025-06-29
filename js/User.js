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
			headers: {   //What do we actually send to the server (JSON)
				'Content-Type': 'application/json'
			},
			body: data
		})
		.then(response => response.json()) //When user is created it will return JSON and say User created
		.then(data =>{
			console.log('User created')
		})
	}

}