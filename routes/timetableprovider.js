
/*
 * GET home page.
 */
var DataCollector = require('./datacollector');
var DataAnalyzer = require('./dataanalyzer');

exports.timetable = function(req, res){
	
		console.log(req.body);

		var stationName = req.body.stationName;
		var year = req.body.year;
		var month = req.body.month;
		var day = req.body.day;

		var dataCollector = new DataCollector();
		dataCollector.GetTimeTableSource(stationName, year, month, day, function(error, window){
		console.log("callback");

		var dataAnalyzer = new DataAnalyzer();
		var jsonTimeTable = dataAnalyzer.GetJson(window, year, month, day);

		res.write(JSON.stringify(jsonTimeTable));
		res.end();


	});
  	
};