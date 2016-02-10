
Template.item.events({
	"click .play-movie": function(event) {
		var Token = "";

		$("#player").empty();

		if(!Session.get("hasToken")) {
			$.ajax({
				url: "http://api.iimovie.cc/vodapi.html",
				type: "POST",
				async: false,
				dataType: "json",
				data: {data:'{"Action":"CreateToken","Message":{"UID":"243A17B2-1DF5-462B-A521-C6194732B375"}}'},
				success: function(data) {
					Token = data.Message.Token;
					Session.set("hasToken", true);
					Session.set("Token", Token);
				}
			});
		}
	
		$.post("http://api.iimovie.cc/vodapi.html", {data:'{"Action":"PlayFreeMovie","Message":{"UID":"243A17B2-1DF5-462B-A521-C6194732B375","Token":"' + Token + '","MovieID":' + this.MovieID + '}}'}, function(data){
			var player = new Clappr.Player({source: data.Message, parentId: "#player", width:960, height: 540});
		}, "json");
	}
});