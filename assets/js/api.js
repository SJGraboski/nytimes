

 $("#search").on('click', function() {
 	var searchTerm = $("#search-term").val(); 
	var numRecord = $("#number-responses").val();
	var startYear = $("#start-year").val();
	var endYear = $("#end-year").val();

	var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + 
		searchTerm + "&begin_date=" + startYear + "0101&end_date=" + endYear + 
	"	1231&page=0&api-key=4d967c5d0ae05680f9bd295982d1e0cd%3A5%3A74629249";
	console.log(queryURL);

	$.ajax({
		url: queryURL,
		method: 'GET'
			})
		.done(function(response) {

			var results = response.docs;

			for(i=0;i<numRecord;i++) {
				var articleDiv = $('<div class="item">');

				var articleHeader = $('<h3>');
				var articleNum = $('<span>').text(i+1);
				var headlineText = results[i].headline.main;
				articleHeader.append(articleNum, headlineText);



				var author = 
				var section
				var datePublished
				var articleLink
			}
			

    	});


	 }




