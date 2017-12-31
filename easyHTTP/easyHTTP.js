function easyHTTP() {
	this.http = new XMLHttpRequest()
}

//Make Get Request

easyHTTP.prototype.get = function(url, callback){
	this.http.open('GET', url, true)
	
	let self = this
	
	this.http.onload = function(){
	
		if(self.http.status === 200){
			callback(null, self.http.responseText)
		} else {
			callback('Error: ' + self.http.status)
		}
	}
	
	this.http.send()
}



//Make Post Request

easyHTTP.prototype.post = function(url, data, callback){
	this.http.open('POST', url, true)
	
	this.http.setRequestHeader('Content-type', 'application/json')
	
	const self = this
	
	this.http.onload = function(){
		
		callback(null, self.http.responseText)
	}
	
	this.http.send(JSON.stringify(data))
}

//Make Delete Request

//Make Put Request