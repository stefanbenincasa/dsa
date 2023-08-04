var ServerConnectionFactory = (function(){
	function ServerConnection(ip, password) {
		this.ip = ip
		this.password = password 
	}

  var instance;

  return {
    getInstance: function(){
      if(!instance) {
        instance = new ServerConnection("123.123.123.123", "abc");
				return instance;
      }
			else {
				throw Error("Only one ServerConnection can exist at a time!")
			}
    }
  };
})();

try {
	let demonstrateSingleton = false, singleServerConnection, additionalConnection

	singleServerConnection = ServerConnectionFactory.getInstance()
	if(demonstrateSingleton) {
		additionalConnection = ServerConnectionFactory.getInstance()
	}
	console.log(singleServerConnection)
}
catch(error) {
	console.log(error)
	return
}

