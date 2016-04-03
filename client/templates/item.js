
Template.item.events({
	"click .play-movie": function(event) {
		var Token = "";
		var isPassed;

		$("#player").empty();

    /*
    $.ajax({
        url: "http://api.iimovie.cc/vodapi.html",
        type: "POST",
        async: false,
        dataType: "json",
        data: {data:'{"Action":"CheckToken","Message":{"UID":"243A17B2-1DF5-462B-A521-C6194732B375","Token":"' + Session.get("Token") + '"}}'},
        success: function(data) {
            
            alert(data.Message);
            isPassed = data.Result;
        }
    });
    */

	// if(!isPassed) {
		$.ajax({
			url: "http://api.iimovie.cc/vodapi.html",
			type: "POST",
			async: false,
			dataType: "json",
			data: {data:'{"Action":"CreateToken","Message":{"UID":"243A17B2-1DF5-462B-A521-C6194732B375"}}'},
			success: function(data) {
				Token = data.Message.Token;
				Session.set("Token", Token);
			}
		});
	// } 

	
		$.post("http://api.iimovie.cc/vodapi.html", {data:'{"Action":"PlayFreeMovie","Message":{"UID":"243A17B2-1DF5-462B-A521-C6194732B375","Token":"' + Token + '","MovieID":' + this.MovieID + '}}'}, function(data){
		    var player = new Clappr.Player({source: data.Message, parentId: "#player", width: 960, height: 540, autoPlay: true});
		}, "json");
	}
});

