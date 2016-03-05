

 $("#search").on('click', function() {
 	var searchTerm = $("#search-term").val().trim(); 
	var numRecord = $("#number-responses").val().trim();
	var startYear = $("#start-year").val().trim();
	var endYear = $("#end-year").val().trim();

	var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + 
		searchTerm + "&begin_date=" + startYear + "0101&end_date=" + endYear + 
		"1231&page=0&api-key=4d967c5d0ae05680f9bd295982d1e0cd%3A5%3A74629249";
	console.log(queryURL);

	$.ajax({
		url: queryURL,
		method: 'GET'
			})
		.done(function(search) {

			var results = search.response.docs;
			console.log(results);
			for(i=0;i<numRecord;i++) {
				var articleDiv = $('<div class="item">');

				var articleHeader = $('<h3>');
				var articleNum = $('<span>').text(i+1);
				var headlineText = results[i].headline.main;
				articleHeader.append(articleNum, headlineText)
				if (results[i].byline != null) {
					var author = $('<p>').text(results[i].byline.person[0].firstname + " " + results[i].byline.person[0].lastname);
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
