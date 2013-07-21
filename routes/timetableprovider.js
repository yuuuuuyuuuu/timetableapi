
/*
 * GET home page.
 */
var DataCollector = require('./datacollector');
var DataAnalyzer = require('./dataanalyzer');

exports.timetable = function(req, res){
	
	console.log(req.body);

	var dataCollector = new DataCollector();
	dataCollector.GetTimeTableSource(req.body.stationName, req.body.year, req.body.month, req.body.day, function(error, window){
		console.log("callback");

		var dataAnalyzer = new DataAnalyzer();
		var jsonTimeTable = dataAnalyzer.GetJson(window);

		res.write(JSON.stringify(jsonTimeTable));
		res.end();


	});
  	
};