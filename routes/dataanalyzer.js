
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

	var timetableCssSelector = "table.timetable2";
	var timetables = window.$(timetableCssSelector);
	var timetableLength = timetables.length;

	var extractedTimeTables = [];
	var directionCssSelector = "div.bk_tab_time div.tab.on";
	var directions = window.$(directionCssSelector);

	var json = {
		"stationName": "",
		"year_month_str": "",
		"day_str": "",
		"year": 2013,
		"month": 7,
		"day": 10,
		"timetables":[]
	};

	json.stationName = stationName;
	json.year_month_str = yearMonth;
	json.day_str = dayStr;

	//console.log(json);

	for(var timeTableNum = 0; timeTableNum < timetableLength; timeTableNum++)
	{
		// 
		var timeTableJson = {
			"direction": "",
			"timetable":[]
		};

		// find direction
		var direction = window.$(directions[timeTableNum]).text();
		//console.log("direction: " + direction);
		timeTableJson.direction = direction;

		// get trs
		var trCssSelector = "";
		var trs = window.$(timetables[timeTableNum]).find("tr");
		var trLength = trs.length;

		// loop trs
		   // find th to update "hour" value if exists
		   // find tds and then find div.firstchild (minute value)
		   //
		var hourValue = 0;
		var minuteValue = 0;
		var trainTimeArray = [];
		for (var trNum = 0; trNum < trLength; trNum++)
		{
			// find th to get hour value
			var ths = window.$(trs[trNum]).find("th");
			if(0 < ths.length) hourValue = window.$(ths[0]).text();
			//console.log("hour: " + hourValue);

			// find minute value
			var tds = window.$(trs[trNum]).find("td");
			var tdLength = tds.length;
			var minuteCssSelector = "div b";
			for(var tdNum = 0; tdNum < tdLength; tdNum++)
			{
				var divs = window.$(tds[tdNum]).find("div");
				var divLength = divs.length;
				for(var divNum = 0; divNum < divLength; divNum++)
				{
					minuteValue = window.$(divs[divNum]).find("b").text();
					//console.log("HH:mm : " + hourValue + ":" + minuteValue);
					trainTimeArray.push({
						"hour": hourValue,
						"minute": minuteValue
					});
				}

				//var bElements = window.$(tds[tdNum]).find(minuteCssSelector);
				//minuteValue = window.$(bElements[0]).text();
				
			}

		}
		timeTableJson.timetable = trainTimeArray;
		json.timetables.push(timeTableJson);

		/*
		extractedTimeTables[timeTableNum] = {
			"direction": direction,
			"timetable":[
				{
					"hour":
				},
				{

				}
			]
		};
		*/
	}

	console.log(json);

	// var stationName = "";

	return json;
};