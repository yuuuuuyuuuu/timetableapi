
/*
 * GET home page.
 */
var DataCollector = require('./datacollector');
var DataAnalyzer = require('./dataanalyzer');

exports.timetable = function(req, res){
	
	
	var dataCollector = new DataCollector();
	dataCollector.GetTimeTableSource("緑園都市", 2013, 07, 16, function(error, window){
		console.log("callback");

		var dataAnalyzer = new DataAnalyzer();
		var jsonTimeTable = dataAnalyzer.GetJson(window);

		/*
		jsonTimeTable = {
			"factor1": "val1"
		}
		*/
		
		res.write(JSON.stringify(jsonTimeTable));
		res.end();
		//res.render('index', {title: 'Express', timetable: "test"});
		
		//res.end();

	});
  	
  	// res.render('index', { title: 'Express' });
};