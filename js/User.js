class User {
	user_id = '';
	username = '';
	email = '';
	password = '';
	api_url = 'https://6860df148e748640844437ac.mockapi.io'

	create() {
		let data = {
			username: this.username,
			email: this.email ,
			password: this.password
		}

		console.log(data)
	}

}