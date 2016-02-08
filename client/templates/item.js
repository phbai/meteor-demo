
Template.item.events({
	"click .play-movie": function(event) {
		
		$.post("http://api.iimovie.cc/vodapi.html", {data:'{"Action":"PlayFreeMovie","Message":{"UID":"243A17B2-1DF5-462B-A521-C6194732B375","Token":"800639D79EE24772AC2316E980A270B5","MovieID":' + this.MovieID + '}}'}, function(data){
			var player = new Clappr.Player({source: data.Message, parentId: "#player", width: 960, height:540});
		}, "json");
	}
});