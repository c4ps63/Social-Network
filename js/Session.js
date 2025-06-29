/*
Task: 
1. Start session when someone registers
2. Take session to be able to check
3. Destroy session when someone loggs off 
*/

class Session {
	user_id = ''; 

	startSession() {
		const d = new Date()
		d.setTime(d.getTime()+(2*24*60*1000)) //Expiration date

		let expires = "expires=" + d.toUTCString()
		document.cookie = "user_id=" + this.user_id + ";" + expires

	}

	getSession() {
		let name = 'user_id=' //cookie name
		let ca = document.cookie.split(';')

		//Checking through split cookie to see if it exists
		for(let i=0; i<ca.length; i++){
			let c = ca[i]
			while (c.charAt(0) == ' '){
				c = c.substring(1)
			}
			if(c.indexOf(name) == 0) {
				return c.substring(name.length, c.length)
			}
		}
		return "";
	}
 
	destroySession() {
		let cookies = document.cookie.split(";")

		for(let i=0; i<cookies.length; i++){
			let cookie = cookies[i]
			let eqPos = cookie.indexOf("=")
			let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
			document.cookie = name + "=,expires=Thu, 01 Jan 1970 00:00:00 GMT"
		}
	}




}