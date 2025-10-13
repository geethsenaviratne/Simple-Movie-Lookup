function search() {
    
    let movieInput = document.getElementById("movie")

    let movieName = movieInput.value

    let htmlRequest = new XMLHttpRequest()

    let url = "http://www.omdbapi.com/?apikey=787dd8f9&t="+ movieName

    htmlRequest.open("GET",url)

    htmlRequest.responseType = "json"

    htmlRequest.send()

    htmlRequest.onload = function(){
        console.log(htmlRequest.response)

        let imageTag = document.getElementById("poster")
        imageTag.src = htmlRequest.response.Poster

        //Rating
        let rateTag = document.getElementById("rate")
        rateTag.innerHTML = htmlRequest.response.imdbRating

        // --- Added fields (kept your style) ---
        // Title, Year, Type
        document.getElementById("title").innerHTML    = htmlRequest.response.Title
        document.getElementById("year").innerHTML     = htmlRequest.response.Year
        document.getElementById("type").innerHTML     = htmlRequest.response.Type

        // Director, Genre, Language
        document.getElementById("director").innerHTML = htmlRequest.response.Director
        document.getElementById("genre").innerHTML    = htmlRequest.response.Genre
        document.getElementById("language").innerHTML = htmlRequest.response.Language

        // Released, Runtime, Plot
        document.getElementById("released").innerHTML = htmlRequest.response.Released
        document.getElementById("runtime").innerHTML  = htmlRequest.response.Runtime
        document.getElementById("plot").innerHTML     = htmlRequest.response.Plot
        // --- End added fields ---
    }

    
}
