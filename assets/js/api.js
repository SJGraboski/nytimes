

 $("#search").on('click', function() {
 	var searchTerm = $("#search-term").val().trim(); 
	var numRecord = $("#number-responses").val().trim();
	var startYear = $("#start-year").val().trim();
	var endYear = $("#end-year").val().trim();

	var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + 
		searchTerm;
	
	if(startYear) {
		queryURL += "&begin_date=" + startYear + "0101";
	}  

	if (endYear) {
		queryURL += "&end_date=" + endYear + "1231";
	}

	var page_and_apiKey = "&page=0&api-key=4d967c5d0ae05680f9bd295982d1e0cd%3A5%3A74629249";
		
	queryURL += page_and_apiKey;

	console.log(queryURL);

	$.ajax({
		url: queryURL,
		method: 'GET'
			})
		.done(function(search) {

			// empty article area on every search
			$("#article-area").empty()

			var results = search.response.docs;
			console.log(results);
			for(i=0;i<numRecord;i++) {
				var articleDiv = $('<div class="item">');

				var articleHeader = $('<h2>');
				var articleNum = $('<span class="article-number">').text(i+1);
				var headlineText = results[i].headline.main;
				articleHeader.append(articleNum, headlineText)
				if (results[i].byline != null) {
					if (results[i].byline.person[0] != null) {
						var author = $('<p>').text(results[i].byline.person[0].firstname + " " + results[i].byline.person[0].lastname);
					}
					else {
						var author = $('<p>').text(results[i].byline.organization);
					}
				}
				else {
					var author = $('<p>No author</p>');
				}
				var section = $('<p>').text(results[i].section_name);
				var datePublished = $('<p>').text(results[i].pub_date);
				var articleLink = $('<p>').text(results[i].web_url);

				articleDiv.append(articleHeader, author, section, datePublished, articleLink);
				console.log(articleDiv);
				$("#article-area").append(articleDiv);
			}

		});
			

    	});


	


$("#clear-response").on('click', function() {
	$("#article-area").empty();
});
