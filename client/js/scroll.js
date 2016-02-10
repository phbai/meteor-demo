/*
$(document).scroll(function(){
    if ($(document).scrollTop() == $(document).height() - $(window).height() - 200) {
        var index = 1;
        var items_array = [];

        if (Session.get("index")) {
            index = Session.get("index");
        }

        index++;
        Session.set("index", index);
        alert(index);

        $.ajax({
            url: "http://api.iimovie.cc/vodapi.html",
            type: "POST",
            async: false,
            dataType: "json",
            data: {data:'{"Action":"GetMovies","Message":{"PageIndex":"' + index + '","PageSize":"10","Type":"1","ID":[-1],"Data":""}}'},
            success: function(data) {
                        // Session.set("items", data.Message.Movies);
                for(var i in data.Message.Movies) {
                    alert(data.Message.Movies[i].Name);
                    var div = $("<div class='col-md-6 play-movie'></div>").attr("data-id", data.Message.Movies[i].MovieID);
                    var a = $("<a href='#modal'></a>");
                    var img = $("<img class='img-responsive'/>").attr("src", data.Message.Movies[i].CoverImg);
                    var p = $("<p></p>").text("xxx");

                    a.append(img);
                    a.append(p);

                    div.append(a);

                    $(".row").append(div);
                }

            }
        });

    }
});
*/