var searchTerm = "lincoln"; //have to assign entry values to these
var numRecord;
var startYear = "2015";
var endYear = "2015";


var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&begin_date=" + startYear+ "0101&end_date=" + endYear + "1231&page=0&api-key=4d967c5d0ae05680f9bd295982d1e0cd%3A5%3A74629249";
console.log(queryURL);

$.ajax({
	url: queryURL,
	method: 'GET'
		})
	.done(function(response) {

    });
