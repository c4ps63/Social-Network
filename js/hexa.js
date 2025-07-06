/*
1. Take cookie
2. If cookie exists useer goes to home page
*/
window.addEventListener('pageshow', ()=>{
	let session = new Session()
	session = session.getSession()

	if(session !== "") {  //if cookie exists, user goes to hexa
		//alert('Ulogovan si!')
	} else {
		window.location.href = "/"
	}
})