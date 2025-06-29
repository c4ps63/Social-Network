let session = new Session()
session = session.getSession()  //taking cookie

if(session !== "") {  //if cookie exists, user goes to hexa
	alert('Ulogovan si!')
} else {
	window.location.href = "/"
}