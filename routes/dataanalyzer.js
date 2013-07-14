
module.exports = DataAnalyzer;

function DataAnalyzer()
{
	console.log("Constructor");
}

DataAnalyzer.prototype.Load = function(window)
{
	
};

DataAnalyzer.prototype.GetJson = function(window)
{
	console.log("GetJson");

	var headingCssSelector = "div.heading h2";
	var stationName = window.$(headingCssSelector).text();

	var yearMonthCssSelector = "form.fm_sub_t select#" + "sDym0" + " option[selected]";
	var yearMonth = window.$(yearMonthCssSelector).text();
	
	var dayCssSelector = "form.fm_sub_t select[name=" + "Ddd" + "] option[selected]";
	var days = window.$(dayCssSelector);
	var dayStr = window.$(days[0]).text();

	var directionCssSelector = "div.tab.on";
	var directions = window.$(directionCssSelector);
	var directionLength = directions.length;

	var timetableCssSelector = "table.timetable2 ";
	var timetables = window.$(timetableCssSelector);
	var timetableLength = timetables.length;
	
	var json = {
		"stationName": stationName,
		"year_month_str": yearMonth,
		"day_str": dayStr,
		"year": 2013,
		"month": 7,
		"day": 10,
		"timetable":{
			"yokohama":[
				{
					"hour": 5,
					"minute": [
						17,
						43
					]
				}
			],
			"shonandai":[
			],
			"edina":[
			]
		}
	};

	// var stationName = "";

	return json;
};