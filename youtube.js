$(document).ready(function() {

    var key = "AIzaSyAQI8vNBVkmV1wvImePx2BXK2_bI3HJ1UU"
    var playlistId = "PLdYvk1h7b9k_eoLEg4jK4NG00jmZSG-py"
    var url = "https://www.googleapis.com/youtube/v3/playlistItems"

    var options = {
        part: "snippet",
        key: key,
        maxResults: 20,
        playlistId: playlistId
    }

    loadVids()
    function loadVids() {
        $.getJSON(url, options, function(data) {
            console.log(data)
            var id = data.items[0].snippet.resourceId.videoId
            mainVid(id)
            resultsLoop(data)

        })
    }

    function mainVid(id) {
        $("#video").html(`
        
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        `)
    }

    function resultsLoop(data) {

        $.each(data.items, function(i, item) {
            var thumb = item.snippet.thumbnails.medium.url
            var title = item.snippet.title
            var description = item.snippet.description.substring(0, 100)

            $("main").append(`
        
                <article>

                    <img src="${thumb}" alt="" class="thumb">

                    <div class="details">
                        <h4>${title}</h4>
                        <p>${description}</p>
                    </div>

                </article>

            `)

        })

        

        

    }

})

