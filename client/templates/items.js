
$.ajax({
	url: "http://api.iimovie.cc/vodapi.html",
	type: "POST",
	async: false,
	dataType: "json",
	data: {data:'{"Action":"GetMovies","Message":{"PageIndex":"1","PageSize":"10","Type":"1","ID":[-1],"Data":""}}'},
	success: function(data) {
		Session.set("items", data.Message.Movies);
	},
	error: function() {
		alert("some error happend");
	}
});


Template.body.helpers({
	items: function() {
		return Session.get("items");
	}
});

