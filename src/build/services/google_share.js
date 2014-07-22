services_lib['google-plus-share'] = {
    extractParams: _defaultParams,
    makeUrl: function(params) {
    	var href_url = 'https://plus.google.com/share?url=' + params.src_url;
    	return href_url;
    },
    getCount: function(url, callback) {
    	$.ajax({
          url: "https://clients6.google.com/rpc",
          success: function(data) {
            console.log(data);
          },
          crossDomain: true,
          datatype: "jsonp",
          body: [{
			    "method":"pos.plusones.get",
			    "id":"p",
			    "params":{
			        "nolog":true,
			        "id":url,
			        "source":"widget",
			        "userId":"@viewer",
			        "groupId":"@self"
			        },
			    "jsonrpc":"2.0",
			    "key":"p",
			    "apiVersion":"v1"
			}]
        });
    },
    icon: 'google-plus'
};
